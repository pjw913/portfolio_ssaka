import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, updateCartQuantity, clearCart } from "../features/cartSlice";
import { calculateCartTotal, validateCartItem } from "../utils/cartUtils";
import { Link, useLocation, useParams } from "react-router-dom";

function CartPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  
    const handleQuantityChange = (itemId, newQuantity) => {
      if (newQuantity < 1) return;
      dispatch(updateCartQuantity({ id: itemId, quantity: newQuantity }));
    };
  
    const handleRemoveItem = (itemId) => {
      dispatch(removeFromCart(itemId));
    };
  
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <section className="main-cart">
        <div className="menu-link">
          <Link to="/">Home</Link> &gt; <Link to="#">마이페이지</Link> &gt; <p>장바구니</p>
        </div>
  
        <div className="cart-menu">
          <div className="cart-menu-title">
            <h2>장바구니</h2>
            <div>
              <p>01 장바구니</p> &gt; <p>02 주문서 작성/결제</p> &gt; <p>03 주문완료</p>
            </div>
          </div>
  
          <div className="cart-info">
            <div className="sub-info-1">
              <input type="checkbox" />
              <p>상품/옵션 정보</p>
              <div className="info">
                <span>수량</span>
                <span>상품금액</span>
                <span>할인/적립</span>
                <span>합계금액</span>
                <span>배송비</span>
              </div>
            </div>
  
            <div className="delivery">
              <input type="checkbox" />
              <p>쇼핑몰배송</p>
            </div>
  
            {cartItems.map((item) => (
              <div className="main-info" key={item.id}>
                <input type="checkbox" />
                <div className="main-info-1">
                  <img src={item.image || "/images/default.jpg"} alt={item.name} />
                  <p>{item.name}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>삭제</button>
                </div>
  
                <div className="main-info-2">{item.option || "기본옵션"}</div>
  
                <div className="main-info-3">
                  <div className="quantity-btn">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p className="price">{(item.price * item.quantity).toLocaleString()}원</p>
                </div>
              </div>
            ))}
  
            <div className="cart-total">
              <p>총 합계: {totalAmount.toLocaleString()}원</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default CartPage;