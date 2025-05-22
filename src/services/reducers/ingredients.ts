import { createSlice } from '@reduxjs/toolkit';
import { IIngredient } from '../types';
import { inigridientApiSlice } from '../api/ingridient';

interface IngredientsState {
  items: IIngredient[];
  loading: boolean;
  error: string | null;
  isIngredientModalOpen: boolean;
}

const initialState: IngredientsState = {
  items: [],
  loading: false,
  error: null,
  isIngredientModalOpen: false,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIsIngredientModalOpenReducer: (state, action) => {
      state.isIngredientModalOpen = action.payload;
    },
  },
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

export const { setIsIngredientModalOpenReducer } = ingredientsSlice.actions;
export default ingredientsSlice.reducer; 