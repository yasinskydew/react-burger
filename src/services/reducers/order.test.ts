import orderReducer, {
  addIngridient,
  removeIngridient,
  clearOrderIngridients,
  setBun,
  setOrder,
  changePosition,
} from './order';
import { IngredientType } from '../types';

const getInitialState = () => ({
  items: [],
  bun: null,
  totalPrice: 0,
  order: null,
});

const getBun = () => ({
  _id: 'bun1',
  name: 'Bun',
  type: IngredientType.bun,
  proteins: 1,
  fat: 1,
  carbohydrates: 1,
  calories: 1,
  price: 10,
  image: '',
  image_mobile: '',
  image_large: '',
  __v: 0,
});

const getIngredient = (overrides = {}) => ({
  _id: 'ing1',
  name: 'Ing',
  type: IngredientType.main,
  proteins: 1,
  fat: 1,
  carbohydrates: 1,
  calories: 1,
  price: 5,
  image: '',
  image_mobile: '',
  image_large: '',
  __v: 0,
  ...overrides,
});

const getOrderResponse = () => ({
  name: 'Order',
  order: { number: 1 },
  success: true,
});

describe('order reducer', () => {
  it('returns the initial state / возвращает начальное состояние', () => {
    expect(orderReducer(undefined, { type: '' })).toEqual(getInitialState());
  });

  it('handles addIngridient / обрабатывает addIngridient', () => {
    const state = orderReducer(getInitialState(), addIngridient(getIngredient()));
    expect(state.items.length).toBe(1);
    expect(state.totalPrice).toBe(5);
  });

  it('handles removeIngridient / обрабатывает removeIngridient', () => {
    const stateWithItem = orderReducer(getInitialState(), addIngridient(getIngredient()));
    const state = orderReducer(
      stateWithItem,
      removeIngridient({ ...stateWithItem.items[0] })
    );
    expect(state.items.length).toBe(0);
    expect(state.totalPrice).toBe(0);
  });

  it('handles clearOrderIngridients / обрабатывает clearOrderIngridients', () => {
    const stateWithItem = orderReducer(getInitialState(), addIngridient(getIngredient()));
    const state = orderReducer(stateWithItem, clearOrderIngridients());
    expect(state.items.length).toBe(0);
    expect(state.bun).toBeNull();
    expect(state.totalPrice).toBe(0);
  });

  it('handles setBun / обрабатывает setBun', () => {
    const state = orderReducer(getInitialState(), setBun(getBun()));
    expect(state.bun).toEqual(getBun());
    expect(state.totalPrice).toBe(20);
  });

  it('handles setOrder / обрабатывает setOrder', () => {
    const state = orderReducer(getInitialState(), setOrder(getOrderResponse()));
    expect(state.order).toEqual(getOrderResponse());
  });

  it('handles changePosition / обрабатывает changePosition', () => {
    let state = orderReducer(getInitialState(), addIngridient(getIngredient()));
    state = orderReducer(
      state,
      addIngridient(getIngredient({ _id: 'ing2', name: 'Ing2' }))
    );
    const firstId = state.items[0].id;
    const secondId = state.items[1].id;
    state = orderReducer(state, changePosition({ dragIndex: 0, hoverIndex: 1 }));
    expect(state.items[0].id).toBe(secondId);
    expect(state.items[1].id).toBe(firstId);
  });
});