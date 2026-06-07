import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  publicBooks: [],
  selectedBook: {},
};
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.books = action.payload;
    },
    setPublicBooks: (state, action) => {
      state.publicBooks = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload || {};
    },
  },
});
const { reducer, actions } = bookSlice;
export const { setBook, setPublicBooks, setSelectedBook } = actions;

export default reducer;
