import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBorrows: [], // admin to see
  myBorrows: [], // only client to see
};
const borrowSlice = createSlice({
  name: "borrows",
  initialState,
  reducers: {
    setAllBorrows: (state, action) => {
      state.allBorrows = action.payload;
    },
    setMyBorrows: (state, action) => {
      state.myBorrows = action.payload;
    },
  },
});
const { reducer, actions } = borrowSlice;
export const { setAllBorrows, setMyBorrows } = actions;

export default reducer;
