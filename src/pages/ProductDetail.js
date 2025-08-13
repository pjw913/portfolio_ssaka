import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs, FreeMode } from 'swiper/modules';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { validateCartItem, calculateItemTotal } from '../utils/cartUtils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState(null);
  const [playerSelect, setPlayerSelect] = useState(null);
  const [patchSelect, setPatchSelect] = useState(null);
  const [markingSelect, setMarkingSelect] = useState(null);
  const [nrfrSelect, setNrfrSelect] = useState(null);

  // ✅ 선택된 옵션 리스트 (사이즈별)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showAlertModal, setShowAlertModal] = useState(false);

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    } else {
      console.log('제품 데이터 가져오는 중...');
    }
  }, [location, id]);

  useEffect(() => {
    setSelectedOptions(prev =>
      prev.map(opt => ({
        ...opt,
        players: playerSelect,
        marking: markingSelect,
        patch: patchSelect,
        nrfr: nrfrSelect
      }))
    );
  }, [playerSelect, markingSelect, patchSelect, nrfrSelect]);

  // ✅ 최종 가격 계산 함수 (price = 할인가)
  const getFinalPrice = useCallback(() => {
    if (!product) return 0;
    return parseFloat(product.price);
  }, [product]);

  const getOptionPrice = (optionStr) => {
    if (!optionStr) return 0;
    const match = optionStr.match(/\(\+([\d,]+)원\)/);
    if (!match) return 0;
    return parseInt(match[1].replace(/,/g, ''), 10);
  };

  const handleSizeSelect = useCallback((size) => {
    // 이미 선택된 사이즈인지 체크
    const exists = selectedOptions.find(opt => opt.size === size);
    if (!exists) {
      setSelectedOptions(prev => [
        ...prev,
        { size: size, quantity: 1,
          quantity: 1,
          players: playerSelect,
          marking: markingSelect,
          patch: patchSelect,
          nrfr: nrfrSelect
        }
      ]);
    }
  }, [selectedOptions, playerSelect, markingSelect, patchSelect, nrfrSelect]);

  const handleQuantityChange = useCallback((size, change) => {
    setSelectedOptions(prev =>
      prev.map(opt =>
        opt.size === size
          ? { ...opt, 
            quantity: Math.max(1, opt.quantity + change),
            players: playerSelect,
            marking: markingSelect,
            patch: patchSelect,
            nrfr: nrfrSelect 
          }
          : opt
      )
    );
  }, [playerSelect, markingSelect, patchSelect, nrfrSelect]);

  const handleRemoveOption = (size) => {
    setSelectedOptions(prev => prev.filter(opt => opt.size !== size));
  };

  const handlePlayerSelect = useCallback((player) => {
    setPlayerSelect(player);
  }, []);

  const handlePatchSelect = (selectedPatch) => {
    setPatchSelect(selectedPatch);
  };

  const handleNrfrSelect = useCallback((selectedNrfr) => {
    setNrfrSelect(selectedNrfr);
  }, []);

  const handleMarkingSelect = (markingSelect) =>{
    setMarkingSelect(markingSelect);
  if (product.players?.length > 0) {
    setPlayerSelect(null);
  }
  setPatchSelect(null);
  }

  const totalPrice = useMemo(() => {
    const finalPrice = getFinalPrice();
    return selectedOptions.reduce((acc, opt) => {
      const patchPrice = getOptionPrice(opt.patch);
      const nrfrPrice = getOptionPrice(opt.nrfr);
  
      const optionTotal = finalPrice + patchPrice + nrfrPrice;
      return acc + optionTotal * opt.quantity;
    }, 0);
  }, [getFinalPrice, selectedOptions]);

  const handleAddCart = useCallback(() => {
    if (!product || selectedOptions.length === 0){ alert('사이즈를 선택해주세요.'); return;}

    const cartItems = selectedOptions.map(opt => ({
      id: `${id}_${opt.size}`,
      productId: id,
      name: product.name,
      price: parseFloat(product.price),
      originalPrice: parseFloat(product.discountPrice),
      quantity: opt.quantity,
      selectedSize: opt.size,
      image: product.images[0],
      brand: product.brand,
      percentage: product.percentage,
      code: product.code,
      from: product.from,
      mark: product.mark
    }));

    try {
      cartItems.forEach(item => validateCartItem(item));
      cartItems.forEach(item => dispatch(addToCart(item)));
      setShowAlertModal(true);
    } catch (err) {
      console.error('유효성 검사 에러', err.message);
    }
  }, [dispatch, product, id, selectedOptions,]);
  
  const handleBuyNow = useCallback(() => {
    if (!product || selectedOptions.length === 0) {
      alert('사이즈를 선택해주세요.');
      return;
    }
  
    // 선택된 상품 정보를 주문 페이지로 전달
    const orderItems = selectedOptions.map(opt => ({
      id: `${id}_${opt.size}`,
      productId: id,
      name: product.name,
      price: parseFloat(product.price),
      originalPrice: parseFloat(product.discountPrice),
      quantity: opt.quantity,
      selectedSize: opt.size,
      image: product.images?.[0] || '',
      brand: product.brand,
      percentage: product.percentage
    }));
  
    // 주문 페이지로 이동 (state로 데이터 전달)
    navigate('/order', { 
      state: { 
        orderItems,
        totalAmount: totalPrice,
        orderType: 'direct' // 바로구매 구분
      } 
    });
  }, [product, id, selectedOptions, totalPrice, navigate]);

  if (!product) {
    return <div>제품 데이터 없음 {id}</div>;
  }
  return (
    <section className="product-detail">
      {/* 이미지 영역 */}
      <div className="product-images">
        <Swiper
          spaceBetween={10}
          pagination={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Pagination, Thumbs]}
          className="mySwiper2"
        >
          {product.images?.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={index + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Pagination, Thumbs]}
          className="mySwiper"
        >
          {product.images?.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={index + 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 상품 정보 */}
      <div className="product-info">
        <h2 className="brand">{product.brand}</h2>
        <h3 className="name">{product.name}</h3>
        <div className="price">
          {product.percentage && (
            <span className="price-percent">{product.percentage}%</span>
          )}
          {/* discountPrice가 원가, price가 할인가인 경우 */}
          {product.price !== undefined && (
            <span className="original-price">
              {parseFloat(product.price).toLocaleString()}원
            </span>
          )}
          {product.discountPrice !== undefined && (
            <span className="discount-price">
              {parseFloat(product.discountPrice).toLocaleString()}원
            </span>
          )}
        </div>
        {product.mark && (
          <p className="mark">{product.mark}</p>
        )}
        <div className="sub-info-1">
          <h3>판매가</h3>
          <p>            
            {product.price !== undefined && (
              <span>{product.price.toLocaleString()}원</span>
            )}
            {product.discountPrice !== undefined && (
              <span className="discount-price">{product.discountPrice.toLocaleString()}원</span>
            )}
          </p>
          <h3>배송비</h3>
          <p>            
            <span>3,000원 (50,000원 이상 구매 시 무료)<br/><br/>택배/등기/소포/선결제</span>
          </p>
        </div>
        <div className="sub-info-2">
          <h3>브랜드</h3>
          <p>            
            <span>{product.brand}</span>
          </p>
          <h3>상품코드</h3>
          <p>            
            <span>{product.code}</span>
          </p>
          <h3>원산지</h3>
          <p>            
            <span>{product.from}</span>
          </p>
        </div>

        {/* 옵션 선택 */}
        <div className="selected-size">
          <h3>옵션 선택</h3>
          {product.size?.length > 0 && (
            <div className="sizeBtn">
            {product.size?.map(item => {
              const isSelected = selectedOptions.some(opt => opt.size===item );
              return(
                <button
                  key={item}
                  onClick={() => handleSizeSelect(item)}
                  className={isSelected ? 'active' : ''} 
                >
                  {item}
                </button>
              )
            })}
          </div>
          )}
          {product.clothsize?.length > 0 && (
            <div className="clothsize">
                <select 
                defaultValue=""
                required
                onChange={(e) => handleSizeSelect(e.target.value)}>
                  <option value="" disabled>사이즈을/를 선택해주세요.</option>
                  {product.clothsize.map(size=>(
                    <option key={size} value={size} disabled={size.includes('품절')}>
                    {size}
                  </option>
                  ))}
                </select>
          </div>
          )}
          {selectedOptions.length > 0 && !product.marking && product.players?.length > 0 && (
            <div className="players">
            <select 
                defaultValue=""
                required
                onChange={(e) => handlePlayerSelect(e.target.value)}>
                  <option value="" disabled>선수를/을 선택해주세요.</option>
                  {product.players.map(player=>(
                    <option key={player} value={player}>
                    {player}
                  </option>
                  ))}
                </select>
          </div>
          )}
          {selectedOptions.length > 0 && !product.players && product.marking?.length > 0 && (
                      <div className="marking">
                      <select 
                          defaultValue=""
                          required
                          onChange={(e) => handleMarkingSelect(e.target.value)}>
                            <option value="" disabled>마킹를/을 선택해주세요.</option>
                            {product.marking.map(marking=>(
                              <option key={marking} value={marking}>
                              {marking}
                            </option>
                            ))}
                          </select>
                    </div>
                    )}
          {(playerSelect || markingSelect) && product.patch?.length > 0 &&  (
            <div className="patch">
            <select 
                defaultValue=""
                required
                onChange={(e) => handlePatchSelect(e.target.value)}>
                  <option value="" disabled>패치를/을 선택해주세요.</option>
                  {product.patch.map(patch=>(
                    <option key={patch} value={patch}>
                    {patch}
                  </option>
                  ))}
                </select>
          </div>
          )}          
          {patchSelect && product.nrfr?.length &&  (
            <div className="nrfr">
            <select 
                defaultValue=""
                required
                onChange={(e) => handleNrfrSelect(e.target.value)}>
                  <option value="" disabled>NRFR를/을 선택해주세요.</option>
                  {product.nrfr.map(nrfr=>(
                    <option key={nrfr} value={nrfr}>
                    {nrfr}
                  </option>
                  ))}
                </select>
          </div>
          )}          
        </div>

        {/* 선택된 옵션 리스트 */}
        <div className="selected-quantity-list">
          {selectedOptions.map(opt => (
            <div key={opt.size} className="selected-quantity">
              <h3>  {[
                    `${opt.size}`,
                    opt.players && `${opt.players}`,
                    opt.marking && `${opt.marking}`,
                    opt.patch && `${opt.patch}`,
                    opt.nrfr && `${opt.nrfr}`
                    ]
                    .filter(Boolean)
                    .join(' | ')}</h3>
              <div className="quantity-btn">
                <button onClick={() => handleQuantityChange(opt.size, -1)}> - </button>
                <span>{opt.quantity}</span>
                <button onClick={() => handleQuantityChange(opt.size, 1)}> + </button>
              </div>
              <span>
                  {(
                    getFinalPrice() * opt.quantity + 
                    getOptionPrice(opt.patch) * opt.quantity + 
                    getOptionPrice(opt.nrfr) * opt.quantity
                  ).toLocaleString()} 원
                </span>
              <button onClick={() => handleRemoveOption(opt.size)}>&times;</button>
            </div>
          ))}
        </div>

        <div className="total-price">
          <strong>총 상품 금액</strong> <span><span className="price-won">{totalPrice.toLocaleString()}</span>원</span>
        </div>

        {/* 장바구니 담기 버튼 */}
        <div className="total-button">
        <button className="like" onClick={()=>alert('로그인 후 이용하실 수 있습니다.')}>🤍</button>
        <button className="add-cart-btn" onClick={handleAddCart}>
          장바구니
        </button>
        <button className="purchase" onClick={handleBuyNow}>구매하기</button>
        </div>
      </div>

      {showAlertModal && (
        <div className="modal">
          <div className="modal-content">
            <p>장바구니에 담았습니다.</p>
            <div className="modal-buttons">
              <button onClick={() => setShowAlertModal(false)}>쇼핑계속하기</button>
              <button onClick={() => navigate('/cart')}>장바구니가기</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetail;