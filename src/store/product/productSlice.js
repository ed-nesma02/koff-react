import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({ id }, { getState, dispatch }) => {
    const token = getState().auth.accessToken;

    const response = await fetch(`${API_URI}/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        dispatch(removeToken());
      }
      throw new Error("Не удалось получить информацию о товаре");
    }

    return response.json();
  },
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
