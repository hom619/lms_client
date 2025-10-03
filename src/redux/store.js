import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js";
export default configureStore({
  reducer: {
    userInfo: userReducer,
  },
});
