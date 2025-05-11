import { useDispatch, useSelector } from "react-redux";
import { IIngredient } from "../../types";
import { ApplicationState } from "../store";
import { setIngredients } from "../../reducers/ingredients";
import { setBun } from "../../reducers/order";

interface UseIngredientsReturn {
  ingredients: IIngredient[];
  getIngridientsByType: (type: string) => IIngredient[];
  setupIngredients: (ingredients: IIngredient[]) => void;
  setDefaultBun: (ingredient: IIngredient) => void;
}

export const useIngredients = (): UseIngredientsReturn => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state: ApplicationState) => state.ingredients.items);

  const getIngridientsByType = (type: string) => ingredients.filter((ingredient) => ingredient.type === type);

  const setupIngredients = (ingredients: IIngredient[]) => {
    dispatch(setIngredients(ingredients));
  }
  
  const setDefaultBun = (ingredient: IIngredient) => {
    dispatch(setBun(ingredient));
  }
  

  return { ingredients, getIngridientsByType, setupIngredients, setDefaultBun };
}
