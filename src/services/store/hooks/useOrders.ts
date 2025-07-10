import { useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../store";
import { setIsOrderModalOpenReducer } from "../../reducers/orders";
import { IIngredient } from "../../types";

export const useOrders = () => {
  const dispatch = useDispatch();

  const isOrderModalOpen = useSelector((state: ApplicationState) => state.orders.isOrderModalOpen);
  const orders = useSelector((state: ApplicationState) => state.orders.items);

  const setIsOrderModalOpen = (isOpen: boolean) => {
    dispatch(setIsOrderModalOpenReducer(isOpen));
  }

  const getOrderByNumber = (orderNumber: string) => orders.find(({ number }) => orderNumber === String(number));

  const getTotlByIngredients = (ingredients: IIngredient[]): string => {
    return String(ingredients.reduce((sum: number, item: IIngredient) => sum + item.price, 0));
  }

  return {
    isOrderModalOpen,
    setIsOrderModalOpen,
    getOrderByNumber,
    getTotlByIngredients,
  }
}