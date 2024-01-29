import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI } from "../../const/API";
import { removeToken } from "../auth/authSlice";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (orderId, { getState, dispatch }) => {
    const token = getState().auth.accessToken;

    try {
      const response = await fetch(`${API_URI}/api/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          dispatch(removeToken());
        }
        throw new Error("Ошибка при отправке данных заказа");
      }

      return await response.json();
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  orderData: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.loading = false;
      state.error = null;
      state.orderData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.orderData = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
