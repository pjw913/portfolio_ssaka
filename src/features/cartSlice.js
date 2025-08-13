import { createSlice } from '@reduxjs/toolkit';
import { validateCartItem } from '../utils/cartUtils';

const loadCartItems = () => {
    try {
        const serializedCart = localStorage.getItem('cartItems'); 
        if (serializedCart === null) return [];
        return JSON.parse(serializedCart);
    } catch (err) {
        console.error('Error loading Cart items data', err);
        return [];
    }
};

const saveCartItems = (items) => {
    try {
        const serializedCart = JSON.stringify(items);
        localStorage.setItem('cartItems', serializedCart);
    } catch (err) {
        console.error('Error Saving Cart Items', err);
    }
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartItems()  
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            try {
                validateCartItem(newItem);

                const existingItemIndex = state.items.findIndex(
                    item => item.id === newItem.id && item.selectedSize === newItem.selectedSize
                );

                if (existingItemIndex !== -1) {
                    state.items[existingItemIndex].quantity += newItem.quantity;
                } else {
                    state.items.push(newItem);
                }

                saveCartItems(state.items);  
            } catch (err) {
                console.error('장바구니 제품 추가 에러 :', err.message);
            }
        },
        updateCartQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
                saveCartItems(state.items); 
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            saveCartItems(state.items); 
        },
        clearCart: (state) => {
            state.items = [];
            saveCartItems(state.items); 
        }
    }
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
