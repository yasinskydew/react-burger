import { IIngredient, IngredientType, IOrderPosition, IOrderResponse } from "../../types";
import { setOrder, changePosition, clearOrderIngridients, setBun, addIngridient } from "../../reducers/order";
import { useCreateOrderMutation } from "../../api/order";
import { defaultBun } from "./useIngredients";
import { useAppDispatch, useAppSelector } from "../hook";

interface UseOrderReturn {
    items: IOrderPosition[];
    totalPrice: number;
    getBun: () => IIngredient;
    createOrder: () => Promise<void>;
    order: IOrderResponse | null;
    clearOrder: () => void;
    changePosition: (dragIndex: number, hoverIndex: number) => void;
    addToOrder: (ingredient: IIngredient) => void
}

export const useOrder = (): UseOrderReturn => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, order, bun } = useAppSelector((state) => state.order);
  const [createOrderMutation] = useCreateOrderMutation();

  const createOrder = async () => {
    const ingredients = items.map(item => item._id);
    if (bun) {
      ingredients.push(bun._id);
      ingredients.push(bun._id);
    }
    const order = {
      ingredients: ingredients
    }
    const response = await createOrderMutation(order);
    if (response.data) {
      dispatch(setOrder(response.data));
    }
  }

  const handleChangePosition = (dragIndex: number, hoverIndex: number) => {
    dispatch(changePosition({ dragIndex, hoverIndex }));
  }

  const clearOrder = () => {
    dispatch(clearOrderIngridients());
  }

  const getBun = (): IIngredient => {
    return bun || defaultBun;
  }

  const addToOrder = (ingredient: IIngredient) => {
    switch (ingredient.type) {
      case IngredientType.bun: {
        dispatch(setBun(ingredient));
        break;
      }
      case IngredientType.sauce:
      case IngredientType.main: {
         dispatch(addIngridient(ingredient));
         break;
      }

      default: {
        console.log('Undefined ingredient type');
      }
    }
  }

  return { 
    items, 
    totalPrice, 
    order,
    getBun, 
    createOrder, 
    clearOrder,
    changePosition: handleChangePosition,
    addToOrder,
  };
}
