import BurgerComponent from '../burgerComponent/burgerComponent';
import styles from './burgerComponentList.module.css'
import { IIngredient } from '../../../services/types';

export interface BurgerComponentListProps {
  ingredients: IIngredient[];
  deleteIngridient: (ingredient: IIngredient) => void
}

export default function BurgerComponentList({
  ingredients,
  deleteIngridient
}: BurgerComponentListProps) {
  return (
    <div className={styles.burgerComponentList}>
      {ingredients.map((item) => {
        return (
          <BurgerComponent key={item._id} positionType={item.positionType} isLocked={!!item.positionType} handleClose={() => {
            deleteIngridient(item)
          }} {...item} />
        )
      })}
    </div>
  );
}
