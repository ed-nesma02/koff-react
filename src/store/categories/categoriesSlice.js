import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { getState, dispatch }) => {
    const token = getState().auth.accessToken;

    const response = await fetch(`${API_URI}/api/productCategories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        dispatch(removeToken());
      }
      throw new Error("Не удалось получить каталог");
    }

    return response.json();
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
