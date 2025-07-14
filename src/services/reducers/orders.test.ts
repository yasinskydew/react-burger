import ordersReducer, { setIsOrderModalOpenReducer, initialState } from './orders';
import { wsConnected, wsDisconnected, wsError, wsOrdersReceived } from '../api/wsOrders';
import { OrdersStatusEnum } from '../types';

describe('orders reducer', () => {
  it('returns the initial state', () => {
    expect(ordersReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('handles setIsOrderModalOpenReducer', () => {
    const state = ordersReducer(initialState, setIsOrderModalOpenReducer(true));
    expect(state.isOrderModalOpen).toBe(true);
  });

  it('handles wsConnected', () => {
    const state = ordersReducer(initialState, wsConnected());
    expect(state.wsConnected).toBe(true);
    expect(state.wsError).toBeNull();
  });

  it('handles wsDisconnected', () => {
    const prevState = { ...initialState, wsConnected: true };
    const state = ordersReducer(prevState, wsDisconnected());
    expect(state.wsConnected).toBe(false);
  });

  it('handles wsError', () => {
    const prevState = { ...initialState, wsConnected: true };
    const state = ordersReducer(prevState, wsError('Error'));
    expect(state.wsError).toBe('Error');
    expect(state.wsConnected).toBe(false);
  });

  it('handles wsOrdersReceived', () => {
    const payload = {
      orders: [
        {
          _id: '1',
          name: 'Order',
          createdAt: '',
          updatedAt: '',
          number: 1,
          ingredients: [],
          status: OrdersStatusEnum.done,
        },
      ],
      total: 1,
      totalToday: 1,
      success: true,
    };
    const state = ordersReducer(initialState, wsOrdersReceived(payload));
    expect(state.orders).toEqual(payload.orders);
  });
});