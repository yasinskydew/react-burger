import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IIngredient, IOrder, IOrderPosition, IOrderResponse } from "../../types";
import { ApplicationState } from "../store";
import { addIngridient, removeIngridient, clearOrderIngridients, setOrder } from "../../reducers/order";
import { useCreateOrderMutation } from "../../api/order";

interface UseOrderReturn {
    items: IOrderPosition[];
    totalPrice: number;
    addPosition: (ingredient: IIngredient) => void;
    removePosition: (ingredient: IOrderPosition) => void;
    clearOrder: () => void;
    createOrder: (order: IOrder) => Promise<void>;
    order: IOrderResponse | null;
}

export const useOrder = (): UseOrderReturn => {
  const dispatch = useDispatch();
  const { items, totalPrice, order } = useSelector((state: ApplicationState) => state.order);
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

  const createOrder = async (order: IOrder) => {
    const response = await createOrderMutation(order);
    if (response.data) {
      dispatch(setOrder(response.data));
    }
  }

  return { items, totalPrice, addPosition, removePosition, clearOrder, createOrder, order };
}
