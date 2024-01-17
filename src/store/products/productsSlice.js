import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState, dispatch }) => {
    const token = getState().auth.accessToken;

    const response = await fetch(`${API_URI}/api/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        dispatch(removeToken());
      }
      throw new Error("Не удалось получить товары");
    }

    return response.json();
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
