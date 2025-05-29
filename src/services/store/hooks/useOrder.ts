import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IIngredient, IOrderPosition, IOrderResponse } from "../../types";
import { ApplicationState } from "../store";
import { setOrder, changePosition, clearOrderIngridients } from "../../reducers/order";
import { useCreateOrderMutation } from "../../api/order";
import { defaultBun } from "./useIngredients";

interface UseOrderReturn {
    items: IOrderPosition[];
    totalPrice: number;
    getBun: () => IIngredient;
    createOrder: () => Promise<void>;
    order: IOrderResponse | null;
    clearOrder: () => void;
    changePosition: (dragIndex: number, hoverIndex: number) => void;
}

export const useOrder = (): UseOrderReturn => {
  const dispatch = useDispatch();
  const { items, totalPrice, order, bun } = useSelector((state: ApplicationState) => state.order);
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

  return { 
    items, 
    totalPrice, 
    order,
    getBun, 
    createOrder, 
    clearOrder,
    changePosition: handleChangePosition 
  };
}
