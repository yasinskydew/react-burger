import BurgerComponent from '../burgerComponent/burgerComponent';
import styles from './burgerComponentList.module.css'
import { IIngredient, IOrderPosition } from '../../../services/types';
import { useOrder } from '../../../services/store/hooks/useOrder';

export interface BurgerComponentListProps {
  ingredients: Map<string, IOrderPosition>;
  deleteIngridient: (ingredient: IIngredient) => void
}

export default function BurgerComponentList() {
  const { items, removePosition } = useOrder();
  return (
    <div className={styles.burgerComponentList}>
      {Object.values(items).map((item) => {
        return (
          <BurgerComponent 
            key={item.orderPosition} 
            positionType={item.positionType} 
            isLocked={!!item.positionType} 
            handleClose={() => {
              removePosition(item)
            }} 
            {...item} 
          />
        )
      })}
    </div>
  );
}
