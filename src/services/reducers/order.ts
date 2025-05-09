import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IIngredient, IOrderPosition, IOrderResponse } from "../types";

interface IOrderState {
    items: IOrderPosition[];
    defaultBun: IIngredient | null;
    totalPrice: number;
    order: IOrderResponse | null;
}

const initialState: IOrderState = {
    items: [],
    defaultBun: null,
    totalPrice: 1255 * 2,
    order: null,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addIngridient: (state, action: PayloadAction<IIngredient>) => {
            state.items.push({
                ...action.payload,
                orderPosition: state.items.length + 1
            });
            state.totalPrice += action.payload.price;
        },

        removeIngridient: (state, action: PayloadAction<IOrderPosition>) => {
            state.items = state.items.filter(item => item.orderPosition !== action.payload.orderPosition);
            state.items.forEach((item, index) => {
                item.orderPosition = index + 1;
            });
            state.totalPrice -= action.payload.price;
        },

        clearOrderIngridients: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        setDefaultBun: (state, action: PayloadAction<IIngredient>) => {
            state.defaultBun = action.payload;
        },
        setOrder: (state, action: PayloadAction<IOrderResponse>) => {
            state.order = action.payload;
        }
    },
});

export const { 
    addIngridient, 
    removeIngridient, 
    clearOrderIngridients, 
    setOrder,
    setDefaultBun, 
} = orderSlice.actions;
export default orderSlice.reducer;
