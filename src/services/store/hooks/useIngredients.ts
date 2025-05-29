import { useDispatch, useSelector } from "react-redux";
import { IIngredient } from "../../types";
import { ApplicationState } from "../store";
import { setIsIngredientModalOpenReducer } from "../../reducers/ingredients";
import circle from '../../../images/ingridients/circle.svg';

interface UseIngredientsReturn {
  ingredients: IIngredient[];
  getIngridientsByType: (type: string) => IIngredient[];
  getIngredientById: (id: string) => IIngredient | undefined;
  isIngredientModalOpen: boolean;
  setIsIngredientModalOpen: (isOpen: boolean) => void;
}

export const defaultBun: IIngredient = {
  _id: '0',
  name: 'Пожалуйста, перенесите сюда булку',
  type: 'defaultBun',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: circle,
  image_mobile: circle,
  image_large: circle,
  __v: 0,
}

export const defaultIngridient: IIngredient = {
  _id: '1',
  name: 'Пожалуйста, перенесите сюда ингридиент',
  type: 'defaultIngridient',
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  price: 0,
  image: circle,
  image_mobile: circle,
  image_large: circle,
  __v: 0,
}

export const useIngredients = (): UseIngredientsReturn => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state: ApplicationState) => state.ingredients.items);
  const isIngredientModalOpen = useSelector((state: ApplicationState) => state.ingredients.isIngredientModalOpen);

  const getIngridientsByType = (type: string) => ingredients.filter((ingredient) => ingredient.type === type);

  const getIngredientById = (id: string) => ingredients.find((ingredient) => ingredient._id === id);

  const setIsIngredientModalOpen = (isOpen: boolean) => {
    dispatch(setIsIngredientModalOpenReducer(isOpen));
  }
  
  return { 
    ingredients, 
    isIngredientModalOpen, 
    getIngridientsByType, 
    getIngredientById, 
    setIsIngredientModalOpen 
  };
}
