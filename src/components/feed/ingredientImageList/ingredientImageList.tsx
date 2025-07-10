import React from 'react';
import styles from './ingredientImageList.module.css';
import { IngredientImageCircle } from './ingredientImageCircle';

interface Ingredient {
  _id: string;
  image: string;
  name: string;
}

interface Props {
  ingredients: Ingredient[];
  maxVisible?: number;
}

export const IngredientImageList: React.FC<Props> = ({ ingredients, maxVisible = 6 }) => {
  const visibleIngredients = ingredients.slice(0, maxVisible);
  const extraCount = ingredients.length - maxVisible;

  return (
    <div className={styles.list}>
      {visibleIngredients.map((ingredient, idx) => (
        <IngredientImageCircle
          key={idx}
          ingredient={ingredient}
          showOverlay={idx === maxVisible - 1 && extraCount > 0}
          extraCount={extraCount}
        />
      ))}
    </div>
  );
}; 