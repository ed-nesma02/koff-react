import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem("favorite") || "[]"),
  favoriteProducts: [],
  pagination: {},
  loading: false,
  error: null,
};

export const fetchfavorites = createAsyncThunk(
  "favorite/fetchfavorites",
  async ({ page }, { getState, dispatch }) => {
    const token = getState().auth.accessToken;
    const searchParams = new URLSearchParams();
    const favoriteList = getState().favorite.favoriteList;
    const param = { list: favoriteList.join(","), page };

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

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
    removeFromFavorite: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (item) => item.id !== action.payload,
      );
      state.favoriteList = state.favoriteList.filter(
        (id) => id !== action.payload,
      );
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchfavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchfavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.favoriteProducts = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchfavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
