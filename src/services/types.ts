export enum BurgerComponentType {
  top = 'top',
  bottom = 'bottom'
}

export interface IIngredient {
 _id: string;
 name: string;
 type: string;
 proteins: number;
 fat: number;
 carbohydrates: number;
 calories: number;
 price: number;
 image: string;
 image_mobile: string;
 image_large: string;
 __v: number;
 positionType?: BurgerComponentType
}

export interface ITab {
  id: string;
  title: string;
}

const tabs: ITab[] = [
  {
     id: 'bun',
     title: 'Булки',
  },
  {
     id: 'main',
     title: 'Начинки',
  },
  {
     id: 'sauce',
     title: 'Соусы',
  }
]

export const getTabs = () => {
  return tabs;
}