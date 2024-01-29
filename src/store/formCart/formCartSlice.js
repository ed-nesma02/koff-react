import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

export const submitCartForm = createAsyncThunk(
  "formCart/submitCartForm",
  async (formData, { getState, dispatch }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URI}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (response.status === 401) {
          dispatch(removeToken());
        }
        throw new Error("Ошибка при отправке данных заказа");
      }

      const responseData = await response.json();
      return responseData.orderId;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  loading: false,
  error: null,
  success: false,
  orderId: null,
};

const formCartSlice = createSlice({
  name: "formCart",
  initialState,
  reducers: {
    updateSuccessCartForm: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitCartForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitCartForm.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.orderId = action.payload;
      })
      .addCase(submitCartForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { updateSuccessCartForm } = formCartSlice.actions;
export default formCartSlice.reducer;
