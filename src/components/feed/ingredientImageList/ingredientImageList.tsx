import React from 'react';
import styles from './ingredientImageList.module.css';

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
        <div className={styles.circle} key={ingredient._id || idx}>
          <div className={styles.innerCircle}>
            <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
            {idx === maxVisible - 1 && extraCount > 0 && (
              <div className={styles.overlay}>
                <span className='text text_type_main-default'>+{extraCount}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 