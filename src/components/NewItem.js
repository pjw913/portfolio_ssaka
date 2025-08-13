import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function NewItem(){
    const category = [
        {
            id:'new-item1',
            images:[
                '/image/newitem1.png',
                '/image/newitemhover1-1.png',
                '/image/newitemhover1-2.png',
                '/image/newitemhover1-3.png',
                '/image/newitemhover1-4.png'
            ],
            name:'나이키 팬텀 6 로우 엘리트 AG PRO(HQ2335400)',
            price:319000,
            brand:'나이키',
            code:'HQ2335400',
            from:'상세설명참조',
            size:['230','240','245','250','255','260','265','270','275','280','285','290']
        },
        {
            id:'new-item2',
            images:[
                '/image/newitem2.png',
                '/image/newitemhover2-1.png',
                '/image/newitemhover2-2.png',
                '/image/newitemhover2-3.png',
                '/image/newitemhover2-4.png'
            ],
            name:'나이키 줌 머큐리얼 베이퍼 16 엘리트 AG PRO(FQ8693600)',
            price:299000,
            brand:'나이키',
            code:'FQ8693600',
            from:'상세설명참조',
            size:['230','235','240','245','250','255','260','265','270','275','280','285','290','295','300']
        },
        {
            id:'new-item3',
            images:[
                '/image/newitem3.png',
                '/image/newitemhover3-1.png',
                '/image/newitemhover3-2.png',
                '/image/newitemhover3-3.png',
                '/image/newitemhover3-4.png'
            ],
            name:'나이키 줌 머큐리얼 베이퍼 16 엘리트 FG(FQ1457600)',
            price:299000,
            brand:'나이키',
            code:'FQ1457600',
            from:'상세설명참조',
            size:['230','235','240','245','250','255','260','265','270','275','280','285','290']
        },
        {
            id:'new-item4',
            images:[
                '/image/newitem4.png',
                '/image/newitemhover4-1.png',
                '/image/newitemhover4-2.png',
                '/image/newitemhover4-3.png',
                '/image/newitemhover4-4.png'
            ],
            name:'나이키 팬텀 6 로우 엘리트 FG(HJ2146400)',
            price:319000,
            brand:'나이키',
            code:'HJ2146400',
            from:'상세설명참조',
            size:['240','245','250','260','265','270','275','280','285','290','295','300']
        },
        {
            id:'new-item5',
            images:[
                '/image/newitem5.png',
                '/image/newitemhover5-1.png',
                '/image/newitemhover5-2.png',
                '/image/newitemhover5-3.png',
                '/image/newitemhover5-4.png',
            ],
            name:'나이키 줌 머큐리얼 슈퍼플라이 10 엘리트 FG(FQ1454600)',
            price:329000,
            brand:'나이키',
            code:'FQ1454600',
            from:'상세설명참조',
            size:['230','235','240','245','250','255','260','265','270','275','280','285','290']
        },
        {
            id:'new-item6',
            images:[
                '/image/newitem6.png',
                '/image/newitemhover6-1.png',
                '/image/newitemhover6-2.png',
                '/image/newitemhover6-3.png',
                '/image/newitemhover6-4.png'
            ],
            name:'나이키 티엠포 레전드 10 엘리트 AG PRO(DV4330402)',
            price:269000,
            brand:'나이키',
            code:'DV4330402',
            from:'상세설명참조',
            size:['230','235','240','245','250','255','260','265','270','275','280','285','290','295','300']
        },
        {
            id:'new-item7',
            images:[
                '/image/newitem7.png',
                '/image/newitemhover7-1.png',
                '/image/newitemhover7-2.png',
                '/image/newitemhover7-3.png',
                '/image/newitemhover7-4.png',
            ],
            name:'나이키 티엠포 레전드 10 엘리트 FG(DV4328402)',
            price:269000,
            brand:'나이키',
            code:'DV4328402',
            from:'상세설명참조',
            size:['230','235','240','245','250','255','260','265','270','275','280','285','290','295','300']
        },
        {
            id:'new-item8',
            images:[
                '/image/newitem8.png',
                '/image/newitemhover8-1.png',
                '/image/newitemhover8-2.png',
                '/image/newitemhover8-3.png',
                '/image/newitemhover8-4.png'
            ],
            name:'아디다스 F50 리그 FG/MG(JI0003)',
            price:109000,
            brand:'아디다스',
            code:'JI0003',
            from:'캄보디아',
            size:['245','250','255','260','265','270','275','280','285','290','295']
        },
        {
            id:'new-item9',
            images:[
                '/image/newitem9.png',
                '/image/newitemhover9-1.png',
                '/image/newitemhover9-2.png',
                '/image/newitemhover9-3.png',
                '/image/newitemhover9-4.png'
            ],
            name:'아디다스 스쿼드라 25 코튼 폴로(JY3417)',
            price:35000,
            discountPrice:39000,
            percentage:10,
            couponprice:31500,
            coupon:'(쿠폰가)',
            brand:'아디다스',
            code:'JY3417',
            from:'상세설명참조',
            size:['090(S)','095(M)','100(L)','105(XL)','110(2XL)','115(3XL)','120(4XL)']
        },
        {
            id:'new-item10',
            images:[
                '/image/newitem10.png',
                '/image/newitemhover10-1.png',
                '/image/newitemhover10-2.png',
                '/image/newitemhover10-3.png',
                '/image/newitemhover10-4.png'
            ],
            name:'아디다스 갤럭시 7(JQ2605)',
            price:63200,
            discountPrice:79000,
            percentage:20,
            couponprice:56880,
            coupon:'(쿠폰가)',
            brand:'아디다스',
            code:'JQ2605',
            from:'상세설명참조',
            size:['230','235','240','245','250','255','260']
        },
    ]

    const [hoverStates, setHoverStates] = useState({});

    const handleMouseOver = (itemIndex) =>{
        setHoverStates(prev =>({
            ...prev,
            [itemIndex]: true
        }));
    }
    const handleMouseOut = (itemIndex) =>{
        setHoverStates(prev =>({
            ...prev,
            [itemIndex]: false
        }));
    }

    const navigate = useNavigate();

    const itemClick = (item) =>{
        localStorage.setItem(`product_${item.id}`, JSON.stringify(item));
        navigate(`/product/${item.id}`, { state: { product: item } });
    }

    return(
        <section className="new-item">
            <h2>NEW ITEM</h2>
            <Swiper slidesPerView={5} spaceBetween={20} navigation={true} modules={[Navigation]} className="mySwiper">
            {
                category.map((item,idx)=>(
                    <SwiperSlide key={item.id}>
                        <Link to="#" onClick={(e)=> {e.preventDefault(); itemClick(item);}} className="link">
                                            <img src={hoverStates[idx] ? item.images[1] : item.images[0]}
                                                 alt={item.name}
                                                 className="bestitem-img"
                                                 onMouseOver={() =>  handleMouseOver(idx) }
                                                 onMouseOut={() => handleMouseOut(idx)}
                                            />
                                            <FontAwesomeIcon icon={faHeart} />
                                            <h3 className="item-title">{item.name}</h3>
                                            <p className="item-price">
                                                {
                                                    item.price && (
                                                        <span>
                                                            {item.price.toLocaleString()}원{item.percentage ? `(${item.percentage.toLocaleString()}%)` : ''}
                                                        </span>
                                                    )
                                                }
                                                {
                                                    item.discountPrice && (
                                                        <span className="gray-text">{item.discountPrice ? `${item.discountPrice.toLocaleString()}원` : ''}</span>
                                                    )
                                                }
                                            </p>
                                            <p className="mark">
                                                {
                                                    item.mark && (
                                                        <span className="item-mark">{item.mark ? `${item.mark}` : ''}</span>
                                                    )
                                                }
                                                {
                                                    item.couponprice && (
                                                        <span className="coupon">{item.couponprice ? `${item.couponprice.toLocaleString()}원` : ''}</span>
                                                    )
                                                }
                                                {
                                                    item.coupon && (
                                                        <span className="coupon">{item.coupon ? `${item.coupon}`:''}</span>
                                                    )
                                                }
                                            </p>
                                            </Link>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </section>
    )
}

export default NewItem;