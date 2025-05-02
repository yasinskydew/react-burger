import BurgerComponent, { BurgerComponentType } from '../burgerComponent/burgerComponent';
import styles from './burgerComponentList.module.css'
import { IIngredient } from '../../../utils/data';

export interface BurgerComponentListProps {
  ingredients: IIngredient[];
}

export default function BurgerComponentList({
  ingredients
}: BurgerComponentListProps) {
  return (
    <div className={styles.burgerComponentList}>
      {ingredients.map((item, index) => {
        let positionType
        let isLocked = false;
        if(index === 0) {
          positionType = BurgerComponentType.top;
          isLocked = true;
        }
        if(index === ingredients.length - 1) {
          positionType = BurgerComponentType.bottom;
          isLocked = true;
        }
        return (
          <BurgerComponent key={item._id} positionType={positionType} isLocked={isLocked} {...item} />
        )
      })}
    </div>
  );
}
