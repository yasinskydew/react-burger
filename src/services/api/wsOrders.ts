// api/websocket-api-slice.ts
import { IOrdersResponse } from '../types';
import { BASE_WS_URL } from './constants/api';
import { apiSlice } from './create-api';
import { createAction } from '@reduxjs/toolkit';

let socket: WebSocket | null = null;

export const wsConnected = createAction('ws/wsConnected');
export const wsDisconnected = createAction('ws/wsDisconnected');
export const wsError = createAction<string>('ws/wsError');
export const wsOrdersReceived = createAction<IOrdersResponse>('ws/ordersReceived');

export const ordersWsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    wsOrders: builder.query<IOrdersResponse, void>({
      queryFn: () => ({ data: { orders: [], total: 0, totalToday: 0, success: true } }),
      async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved, dispatch }) {
        const url = `${BASE_WS_URL}/orders/all`;
        socket = new WebSocket(url);
        socket.onmessage = (event) => {
          try {
            const data: IOrdersResponse = JSON.parse(event.data);
            if (data && data.success) {
              updateCachedData((draft) => {
                draft.orders = data.orders;
                draft.total = data.total;
                draft.totalToday = data.totalToday;
              });
              dispatch(wsOrdersReceived(data));
            }
          } catch (e) {
            console.error('Invalid WebSocket message:', e);
          }
        };

        socket.onopen = () => {
          dispatch(wsConnected());
        };

        socket.onerror = (event) => {
          dispatch(wsError('Ошибка WebSocket'));
        };

        socket.onclose = () => {
          dispatch(wsDisconnected());
        };

        await cacheEntryRemoved;
        socket?.close();
      },
    }),
    wsUserOrders: builder.query<IOrdersResponse, void>({
      queryFn: () => ({ data: { orders: [], total: 0, totalToday: 0, success: true } }),
      async onCacheEntryAdded(_, { updateCachedData, cacheEntryRemoved, dispatch }) {
        const url = `${BASE_WS_URL}/orders`;
        const token = localStorage.getItem('accessToken')?.replace('Bearer ', '');
        const wsUrl = token ? `${url}?token=${token}` : url;
        socket = new WebSocket(wsUrl);
        
        socket.onmessage = (event) => {
          try {
            const data: IOrdersResponse = JSON.parse(event.data);
            if (data && data.success) {
              updateCachedData((draft) => {
                draft.orders = data.orders;
                draft.total = data.total;
                draft.totalToday = data.totalToday;
              });
              dispatch(wsOrdersReceived(data));
            }
          } catch (e) {
            console.error('Invalid WebSocket message:', e);
          }
        };

        socket.onopen = () => {
          dispatch(wsConnected());
        };

        socket.onerror = (event) => {
          dispatch(wsError('Ошибка WebSocket'));
        };

        socket.onclose = () => {
          dispatch(wsDisconnected());
        };

        await cacheEntryRemoved;
        socket?.close();
      },
    }),
  }),
});

export const { useWsOrdersQuery, useWsUserOrdersQuery } = ordersWsApiSlice;