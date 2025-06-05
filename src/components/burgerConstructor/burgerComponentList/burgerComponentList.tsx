import BurgerComponent from '../burgerComponent/burgerComponent';
import styles from './burgerComponentList.module.css'
import { useOrder } from '../../../services/store/hooks/useOrder';
import { useDispatch } from 'react-redux';
import { removeIngridient } from '../../../services/reducers/order';

export default function BurgerComponentList() {
  const dispatch = useDispatch();

  const { items } = useOrder();
  return (
    <div className={styles.burgerComponentList}>
      {Object.values(items).map((item, index) => {
        return (
          <BurgerComponent 
            key={item.id} 
            positionType={item.positionType} 
            isLocked={!!item.positionType} 
            handleClose={() => dispatch(removeIngridient(item))} 
            index={index}
            {...item} 
          />
        )
      })}
    </div>
  );
}
