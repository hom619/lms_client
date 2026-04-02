import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js";
import bookReducer from "../features/book/bookSlice.js";
export default configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
  },
});
