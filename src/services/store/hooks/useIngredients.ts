import { IIngredient } from "../../types";
import { setIsIngredientModalOpenReducer } from "../../reducers/ingredients";
import circle from '../../../images/ingridients/circle.svg';
import { useAppDispatch, useAppSelector } from "../hook";

interface UseIngredientsReturn {
  ingredients: IIngredient[];
  getIngridientsByType: (type: string) => IIngredient[];
  getIngredientById: (id: string) => IIngredient | undefined;
  isIngredientModalOpen: boolean;
  setIsIngredientModalOpen: (isOpen: boolean) => void;
  getIngredientListByIds: (ingredientIds: string[]) => IIngredient[]
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
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector((state) => state.ingredients.items);
  const isIngredientModalOpen = useAppSelector((state) => state.ingredients.isIngredientModalOpen);

  const getIngridientsByType = (type: string) => ingredients.filter((ingredient) => ingredient.type === type);

  const getIngredientById = (id: string) => ingredients.find((ingredient) => ingredient._id === id);

  const setIsIngredientModalOpen = (isOpen: boolean) => {
    dispatch(setIsIngredientModalOpenReducer(isOpen));
  }

  const getIngredientListByIds = (ingredientIds: string[]): IIngredient[] => {
    return ingredientIds
      .map((id: string) => getIngredientById(id))
      .filter((ingredient): ingredient is IIngredient => Boolean(ingredient));
  }
  
  return { 
    ingredients, 
    isIngredientModalOpen, 
    getIngridientsByType, 
    getIngredientById, 
    setIsIngredientModalOpen,
    getIngredientListByIds
  };
}
