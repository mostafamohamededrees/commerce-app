import { configureStore } from "@reduxjs/toolkit";
import FlashReducer from "../RTK/ProductSlice";
import shopReducer from "../RTK/ShopSlice";
import cartReducer from "../RTK/Cart";

export const store = configureStore({
  reducer: {
    flash: FlashReducer,
    shop: shopReducer,
    cart: cartReducer,
  },
});
