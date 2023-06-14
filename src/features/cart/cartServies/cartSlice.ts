import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../../type/type';
import { propCartItem } from '../../../type/type';



type CartState = {
  products: propCartItem[],
  totalPrice: number,
  tax: number
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  tax: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state:CartState, action: PayloadAction<Product>) => {
      const existingItemIndex = state.products.findIndex(
        item => item.product.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // Item already exists in cart, increment quantity
        state.products[existingItemIndex].quantity++;
      } else {
        // Item doesn't exist in cart, add it with quantity 1
        state.products.push({ product: action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
      state.tax = state.totalPrice * 0.2;
    },
    removeFromCart: (state:CartState, action: PayloadAction<number>) => {
      const indexToRemove = state.products.findIndex(item => item.product.id === action.payload);
      if (indexToRemove !== -1) {
        // Item exists in cart, remove it
        const itemToRemove = state.products[indexToRemove];
        state.totalPrice -= itemToRemove.product.price;
        if (state.products[indexToRemove].quantity > 1) {
          state.products[indexToRemove].quantity--
        }
        else {

          state.products = [
            ...state.products.slice(0, indexToRemove),
            ...state.products.slice(indexToRemove + 1)
          ];
        }
        state.tax = state.totalPrice * 0.2;
      }
    },
    resetCart(state:CartState) {
      state.products = [];
      state.totalPrice = 0;
      state.tax = 0;
    },
  }
},
);

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer