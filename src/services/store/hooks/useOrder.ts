import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IIngredient, IOrder, IOrderPosition, IOrderResponse } from "../../types";
import { ApplicationState } from "../store";
import { addIngridient, removeIngridient, clearOrderIngridients, setOrder, setBun } from "../../reducers/order";
import { useCreateOrderMutation } from "../../api/order";

interface UseOrderReturn {
    items: IOrderPosition[];
    totalPrice: number;
    getBun: () => IIngredient;
    addPosition: (ingredient: IIngredient) => void;
    removePosition: (ingredient: IOrderPosition) => void;
    clearOrder: () => void;
    createOrder: () => Promise<void>;
    order: IOrderResponse | null;
    setDefaultBun: (ingredient: IIngredient) => void;
}

export const useOrder = (): UseOrderReturn => {
  const dispatch = useDispatch();
  const { items, totalPrice, order, bun } = useSelector((state: ApplicationState) => state.order);
  const [createOrderMutation] = useCreateOrderMutation();

  const addPosition = (ingredient: IIngredient) => {
    dispatch(addIngridient(ingredient));
  }

  const removePosition = (ingredient: IOrderPosition) => {
    dispatch(removeIngridient(ingredient));
  }

  const clearOrder = () => {
    dispatch(clearOrderIngridients());
  }

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

  const setDefaultBun = (ingredient: IIngredient) => {
    dispatch(setBun(ingredient));
  }

  const getBun = () => {
    return bun as IIngredient;
  }

  return { items, totalPrice, getBun, addPosition, removePosition, clearOrder, createOrder, order, setDefaultBun };
}
