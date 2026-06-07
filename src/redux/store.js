import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js";
import bookReducer from "../features/book/bookSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import borrowReducer from "../features/borrow/borrowSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage, //local storage
};

const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  cartInfo: persistReducer(cartPersistConfig, cartReducer),
  borrowInfo: borrowReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export const persistor = persistStore(store);
export default store;
