import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  recentBorrow: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeBookFromCart: (state, action) => {
      state.cart = state.cart.filter((book) => book._id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setRecentBorrow: (state, action) => {
      state.recentBorrow = action.payload;
    },
    clearRecentBorrow: (state) => {
      state.recentBorrow = [];
    },
  },
});
const { reducer, actions } = cartSlice;
export const {
  setCart,
  removeBookFromCart,
  clearCart,
  clearRecentBorrow,
  setRecentBorrow,
} = actions;

export default reducer;
