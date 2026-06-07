import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
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
  },
});
const { reducer, actions } = cartSlice;
export const { setCart, removeBookFromCart } = actions;

export default reducer;
