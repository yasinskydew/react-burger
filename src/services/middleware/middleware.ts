import { Middleware } from '@reduxjs/toolkit';
import { wsConnected, wsDisconnected, wsError, wsOrdersReceived } from '../api/wsOrders';

export const wsMiddleware: Middleware = (store) => (next) => (action) => {
  if (wsConnected.match(action)) {
    console.log('Middleware: WS connected');
  }

  if (wsDisconnected.match(action)) {
    console.log('Middleware: WS disconnected');
  }

  if (wsError.match(action)) {
    console.error('Middleware: WS error', action.payload);
  }

  if (wsOrdersReceived.match(action)) {
    console.log('Middleware: Orders received', action.payload);
  }

  return next(action);
};
