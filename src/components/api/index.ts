import { BurgerComponentType, IIngredient, ITab } from "./types";

const API_URL = 'https://norma.nomoreparties.space/api';

export const getIngredients = async (): Promise<IIngredient[]> => {
  try {
    const response = await fetch(`${API_URL}/ingredients`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return [];
  }
}


const getDefaultBun = (ingridients: IIngredient[]): IIngredient => {
  const bun = ingridients.find(ingredient => ingredient.type === 'bun' && ingredient.name === 'Краторная булка N-200i');
  if (!bun) {
    throw new Error('No default bun found');
  }
  return bun;
}

export const getDefaultIngredients = async (): Promise<IIngredient[]> => {
  try {
    const ingridients = await getIngredients();
    if (ingridients.length === 0) {
      throw new Error('No ingredients found');
    }
    const bun = getDefaultBun(ingridients);
    const defaultIngredients = [
      {
        ...bun,
        positionType: BurgerComponentType.top
      },
      {
        ...bun,
        positionType: BurgerComponentType.bottom
      }
    ];


    return defaultIngredients;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return [];
  }
}

const tabs: ITab[] = [
  {
     id: 'bun',
     title: 'Булки',
     isActive: true,
  },
  {
     id: 'main',
     title: 'Начинки',
     isActive: false,
  },
  {
     id: 'sauce',
     title: 'Соусы',
     isActive: false,
  }
]

export const getTabs = (): ITab[] => {
  return tabs;
}


