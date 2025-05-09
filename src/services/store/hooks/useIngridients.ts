import { useSelector } from "react-redux";
import { IIngredient } from "../../types";
import { ApplicationState } from "../store";

interface UseIngridientsReturn {
  ingredients: IIngredient[];
  getIngridientsByType: (type: string) => IIngredient[];
  getDefaultBun: () => IIngredient;
}

export const useIngridients = (): UseIngridientsReturn => {
  const ingredients = useSelector((state: ApplicationState) => state.ingredients.items);

  const getIngridientsByType = (type: string) => ingredients.filter((ingredient) => ingredient.type === type);

  const getDefaultBun = () => ingredients.find((ingredient) => ingredient.type === 'bun') as IIngredient;

  return { ingredients, getIngridientsByType, getDefaultBun };
}
