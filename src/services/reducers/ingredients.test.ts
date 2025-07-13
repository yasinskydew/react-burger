import ingredientsReducer, { setIsIngredientModalOpenReducer } from './ingredients';
import { inigridientApiSlice } from '../api/ingridient';

const initialState = {
  items: [],
  loading: false,
  error: null,
  isIngredientModalOpen: false,
};

const reducerPath = inigridientApiSlice.reducerPath || 'api';
const endpointName = 'getIngridients';
const pendingType = `${reducerPath}/executeQuery/pending`;
const fulfilledType = `${reducerPath}/executeQuery/fulfilled`;
const rejectedType = `${reducerPath}/executeQuery/rejected`;

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle setIsIngredientModalOpenReducer', () => {
    const state = ingredientsReducer(initialState, setIsIngredientModalOpenReducer(true));
    expect(state.isIngredientModalOpen).toBe(true);
  });

  it('should handle getIngridients.matchPending', () => {
    const action = { type: pendingType, meta: { arg: { endpointName } } };
    const state = ingredientsReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
    expect(state.items).toEqual([]);
  });

  it('should handle getIngridients.matchFulfilled', () => {
    const payload = { data: [{ _id: '1', name: 'Test', type: 'bun', proteins: 1, fat: 1, carbohydrates: 1, calories: 1, price: 1, image: '', image_mobile: '', image_large: '' }] };
    const action = { type: fulfilledType, payload, meta: { arg: { endpointName } } };
    const state = ingredientsReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
    expect(state.items).toEqual(payload.data);
  });

  it('should handle getIngridients.matchRejected', () => {
    const action = { type: rejectedType, error: { message: 'Error' }, meta: { arg: { endpointName } } };
    const state = ingredientsReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error');
  });
}); 