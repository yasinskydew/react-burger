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
  isActive: boolean;
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

export const getTabs = () => {
  return tabs;
}