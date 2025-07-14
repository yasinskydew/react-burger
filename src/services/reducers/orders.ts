import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrders, IOrdersResponse } from '../types';
import { ordersApiSlice } from '../api/orders';
import { 
  wsConnected, wsDisconnected, wsError, wsOrdersReceived
} from '../api/wsOrders';

interface OrdersState {
  orders: IOrders[];
  loading: boolean;
  error: string | null;
  isOrderModalOpen: boolean;
  wsConnected: boolean;
  wsError: string | null;
}

export const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
  isOrderModalOpen: false,
  wsConnected: false,
  wsError: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setIsOrderModalOpenReducer: (state, action: PayloadAction<boolean>) => {
      state.isOrderModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(wsConnected, (state) => {
      state.wsConnected = true;
      state.wsError = null;
    })
    .addCase(wsDisconnected, (state) => {
      state.wsConnected = false;
    })
    .addCase(wsError, (state, action: PayloadAction<string>) => {
      state.wsError = action.payload;
      state.wsConnected = false;
    })
    .addCase(wsOrdersReceived, (state, action: PayloadAction<IOrdersResponse>) => {
      state.orders = action.payload.orders;
    })
    
    builder
      .addMatcher(
        ordersApiSlice.endpoints.getAllOrders.matchPending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ordersApiSlice.endpoints.getAllOrders.matchFulfilled,
        (state, action) => {
          state.orders = action.payload.orders;
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
  },
});

export const { setIsOrderModalOpenReducer } = ordersSlice.actions;
export default ordersSlice.reducer;
