import { createSlice } from '@reduxjs/toolkit';
import { IIngredient } from '../types';

interface ICurrentIngredientState {
  currentIngredient: IIngredient | null;
}

const initialState: ICurrentIngredientState = {
  currentIngredient: null,
};

export const currentINgridientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
  reducers: {
    setCurrentIngredient: (state, action) => {
      state.currentIngredient = action.payload;
    },
    clearCurrentIngredient: (state) => {
      state.currentIngredient = null;
    },
  },
})

export const { setCurrentIngredient, clearCurrentIngredient } = currentINgridientSlice.actions;
export default currentINgridientSlice.reducer;
