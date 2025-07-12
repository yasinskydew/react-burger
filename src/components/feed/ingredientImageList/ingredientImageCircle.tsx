import styles from './ingredientImageList.module.css';

interface Ingredient {
  _id: string;
  image: string;
  name: string;
}

export const IngredientImageCircle: React.FC<{
  ingredient: Ingredient;
  showOverlay?: boolean;
  extraCount?: number;
}> = ({ ingredient, showOverlay = false, extraCount }) => (
  <div className={styles.circle}>
    <div className={styles.innerCircle}>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
      {showOverlay && extraCount && (
        <div className={styles.overlay}>
          <span className='text text_type_main-default'>+{extraCount}</span>
        </div>
      )}
    </div>
  </div>
);
