import { createSlice } from '@reduxjs/toolkit';
import { IOrders } from '../types';
import { ordersApiSlice } from '../api/orders';

interface OrdersState {
  items: IOrders[]
  loading: boolean;
  error: string | null;
  isOrderModalOpen: boolean;
}

const initialState: OrdersState = {
  items: [],
  loading: false,
  error: null,
  isOrderModalOpen: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setIsOrderModalOpenReducer: (state, action) => {
      state.isOrderModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(
      ordersApiSlice.endpoints.getAllOrders.matchPending,
      (state) => {
        state.loading = true;
        state.error = null;
        state.items = [];
      }
    )
    .addMatcher(
      ordersApiSlice.endpoints.getAllOrders.matchFulfilled,
      (state, action) => {
        state.items = action.payload.orders;
        state.loading = false;
        state.error = null;
      }
    )
    .addMatcher(
      ordersApiSlice.endpoints.getAllOrders.matchRejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch orders';
      }
    );
  }
})

export const { setIsOrderModalOpenReducer } = ordersSlice.actions;
export default ordersSlice.reducer; 