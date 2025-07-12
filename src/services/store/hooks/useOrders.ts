import { setIsOrderModalOpenReducer } from "../../reducers/orders";
import { IIngredient } from "../../types";
import { useAppDispatch, useAppSelector } from "../hook";

export const useOrders = () => {
  const dispatch = useAppDispatch();

  const isOrderModalOpen = useAppSelector((state) => state.orders.isOrderModalOpen);
  const orders = useAppSelector((state) => state.orders.orders);

  const setIsOrderModalOpen = (isOpen: boolean) => {
    dispatch(setIsOrderModalOpenReducer(isOpen));
  }

  const getOrderByNumber = (orderNumber: string) => orders.find(({ number }) => orderNumber === String(number));

  const getTotalByIngredients = (ingredients: IIngredient[]): string => {
    return String(ingredients.reduce((sum: number, item: IIngredient) => sum + item.price, 0));
  }

  return {
    isOrderModalOpen,
    setIsOrderModalOpen,
    getOrderByNumber,
    getTotalByIngredients,
  }
}