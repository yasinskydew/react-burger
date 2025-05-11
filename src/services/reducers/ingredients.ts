import { createSlice } from '@reduxjs/toolkit';
import { IIngredient } from '../types';
import { inigridientApiSlice } from '../api/ingridient';

interface IngredientsState {
  items: IIngredient[];
  loading: boolean;
  error: string | null;
}

const initialState: IngredientsState = {
  items: [],
  loading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        inigridientApiSlice.endpoints.getIngridients.matchPending,
        (state) => {
          state.loading = true;
          state.error = null;
          state.items = [];
        }
      )
      .addMatcher(
        inigridientApiSlice.endpoints.getIngridients.matchFulfilled,
        (state, action) => {
          state.items = action.payload.data;
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        inigridientApiSlice.endpoints.getIngridients.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch ingredients';
        }
      );
  }
});

export default ingredientsSlice.reducer; 