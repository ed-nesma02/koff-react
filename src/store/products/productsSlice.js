import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (param, { getState, dispatch }) => {
    const token = getState().auth.accessToken;
    const searchParams = new URLSearchParams();

    if (param) {
      for (const key in param) {
        if (Object.hasOwnProperty.call(param, key) && param[key]) {
          searchParams.append(key, param[key]);
        }
      }
    }

    const response = await fetch(`${API_URI}/api/products?${searchParams}`, {
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
    pagination: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pagination = null;
        state.products = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.products = action.payload;
        } else {
          state.products = action.payload.data;
          state.pagination = action.payload.pagination;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
