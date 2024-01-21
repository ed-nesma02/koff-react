import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import productReducer from "./product/productSlice";
import favoriteReducer from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    favorite: favoriteReducer,
  },
});
