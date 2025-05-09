import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IIngredient, IOrderPosition, IOrderResponse } from "../types";

interface IOrderState {
    items: IOrderPosition[];
    bun: IIngredient | null;
    totalPrice: number;
    order: IOrderResponse | null;
}

const initialState: IOrderState = {
    items: [],
    bun: null,
    totalPrice: 0,
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
        setBun: (state, action: PayloadAction<IIngredient>) => {
            if (state.bun) {
                state.totalPrice -= state.bun.price * 2;
                state.bun = null;
            }

            state.bun = action.payload;
            state.totalPrice += action.payload.price * 2;
        },
        setOrder: (state, action: PayloadAction<IOrderResponse>) => {
            state.order = action.payload;
        },
        changePosition: (state, action: PayloadAction<{ dragIndex: number; hoverIndex: number }>) => {
            const { dragIndex, hoverIndex } = action.payload;
            const draggedItem = state.items[dragIndex];
            state.items.splice(dragIndex, 1);
            state.items.splice(hoverIndex, 0, draggedItem);
            state.items.forEach((item, index) => {
                item.orderPosition = index + 1;
            });
        }
    },
});

export const { 
    addIngridient, 
    removeIngridient, 
    clearOrderIngridients, 
    setOrder,
    setBun,
    changePosition,
} = orderSlice.actions;

export default orderSlice.reducer;
