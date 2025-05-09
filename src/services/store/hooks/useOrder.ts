import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IIngredient, IOrderPosition, IOrderResponse } from "../../types";
import { ApplicationState } from "../store";
import { addIngridient, removeIngridient, clearOrderIngridients, setOrder, setBun, changePosition } from "../../reducers/order";
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
    changePosition: (dragIndex: number, hoverIndex: number) => void;
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

  const handleChangePosition = (dragIndex: number, hoverIndex: number) => {
    dispatch(changePosition({ dragIndex, hoverIndex }));
  }

  const getBun = () => {
    return bun as IIngredient;
  }

  return { 
    items, 
    totalPrice, 
    order,
    getBun, 
    addPosition,
    removePosition,
    clearOrder,
    createOrder, 
    setDefaultBun,
    changePosition: handleChangePosition };
}
