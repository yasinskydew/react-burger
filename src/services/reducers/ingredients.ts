import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIngredient } from '../types';

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
  reducers: {
    setIngredients: (state, action: PayloadAction<IIngredient[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const { setIngredients, setLoading, setError } = ingredientsSlice.actions;
export default ingredientsSlice.reducer; 