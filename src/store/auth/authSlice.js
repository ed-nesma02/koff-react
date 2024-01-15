import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";

export const fetchAccessToken = createAsyncThunk(
  "auth/fetchAccessToken",
  async () => {
    const response = await fetch(`${API_URI}/api/users/accessKey`);

    if (!response.ok) {
      throw new Error("Не удалось получить токен доступа");
    }

    const data = await response.json();
    return data.accessKey;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    loading: false,
    error: null,
  },
  reducers: {
    removeToken(state) {
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.accessToken = action.payload;
        localStorage.setItem("accessToken", action.payload);
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer;
