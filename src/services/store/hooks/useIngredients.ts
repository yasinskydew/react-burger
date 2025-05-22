import { useDispatch, useSelector } from "react-redux";
import { IIngredient } from "../../types";
import { ApplicationState } from "../store";
import { setBun } from "../../reducers/order";
import { setIsIngredientModalOpenReducer } from "../../reducers/ingredients";

interface UseIngredientsReturn {
  ingredients: IIngredient[];
  getIngridientsByType: (type: string) => IIngredient[];
  setDefaultBun: (ingredient: IIngredient) => void;
  getIngredientById: (id: string) => IIngredient | undefined;
  isIngredientModalOpen: boolean;
  setIsIngredientModalOpen: (isOpen: boolean) => void;
}

export const useIngredients = (): UseIngredientsReturn => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state: ApplicationState) => state.ingredients.items);
  const isIngredientModalOpen = useSelector((state: ApplicationState) => state.ingredients.isIngredientModalOpen);

  const getIngridientsByType = (type: string) => ingredients.filter((ingredient) => ingredient.type === type);
  
  const setDefaultBun = (ingredient: IIngredient) => {
    dispatch(setBun(ingredient));
  }

  const getIngredientById = (id: string) => ingredients.find((ingredient) => ingredient._id === id);

  const setIsIngredientModalOpen = (isOpen: boolean) => {
    dispatch(setIsIngredientModalOpenReducer(isOpen));
  }
  
  return { 
    ingredients, 
    isIngredientModalOpen, 
    getIngridientsByType, 
    setDefaultBun, 
    getIngredientById, 
    setIsIngredientModalOpen 
  };
}
