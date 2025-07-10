import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './feeedListItem.module.css';
import { IngredientImageList } from '../ingredientImageList/ingredientImageList';
import { useIngredients, useOrders } from '../../../services/store/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IOrders } from '../../../services/types';
import { OrderTotalPrice } from '../../order/orderTotalPrice/orderTotalPrice';

interface FeedListItemProp {
  order: IOrders
  linkPath: string
}
export const FeedListItem = (props: FeedListItemProp) => {
  const location = useLocation();
  const { getIngredientListByIds } = useIngredients();
  const { getTotlByIngredients } = useOrders()

  const { order } = props;
  const ingredients = getIngredientListByIds(order.ingredients)


  return (
    <li key={order.number} >
      <Link to={props.linkPath} 
        className={styles.feedListItem} 
        state={{ background: location }}
      >
        <div className={styles.feedListItemRow}>
          <span className='text text_type_digits-default'>{'#' + order.number}</span>
          <span className='text text_type_main-default text_color_inactive'>{<FormattedDate date={new Date(order.createdAt)} />}</span>
        </div>

        <h2 className='text text_type_main-medium'>{order.name}</h2>
        <div className={styles.feedListItemRow}>
          <IngredientImageList ingredients={ingredients} maxVisible={5}/>
          <OrderTotalPrice totalPrice={getTotlByIngredients(ingredients)} />
        </div>
      </Link>
    </li>
  )
}