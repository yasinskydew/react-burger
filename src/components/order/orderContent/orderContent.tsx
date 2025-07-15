import { IOrders, IOrdersFull, OrdersStatusEnum, OrdersStatusTranslates } from '../../../services/types';
import styles from './orderContent.module.css';
import { useIngredients, useOrders } from '../../../services/store/hooks';
import { CreatedOrderDate } from '../createdOrderDate/createdOrderDate';
import { OrderTotalPrice } from '../orderTotalPrice/orderTotalPrice';
import { OrderIngredientList } from '../orderIngredientList/orderIngredientList';
import { useLocation } from 'react-router-dom';

interface OrderContentProps {
  order?: IOrdersFull | IOrders;
}

export const OrderContent = (props: OrderContentProps) => {
  const location = useLocation();
  const { getIngredientListByIds } = useIngredients();
  const { getTotalByIngredients } = useOrders();

  if (!props.order) {
    return (
      <>
        Not found
      </>
    )
  }

  const { name, status, createdAt, ingredients: ingredientIds, number } = props.order;


  const statusClasses = {
    [OrdersStatusEnum.done]: styles.orderContentStatusListDone,
    [OrdersStatusEnum.pending]: styles.orderContentStatusListPending,
    [OrdersStatusEnum.created]: styles.orderContentStatusListCreated,
  };

  const ingredients = getIngredientListByIds(ingredientIds);

  const isModal = location.state;

  return (
    <section className={styles.orderContent}>
        {
          !isModal && <h2 className={[
            styles.orderContentPageTitle,
            'text', 
            'text_type_digits-default',
          ].join(' ')} data-testid="order-number">{`#${number}`}</h2>
        }
        <h2 className={styles.orderContentName + ' text text_type_main-medium'}>{name}</h2>
        <p className={[statusClasses[status]] + ' text text_type_main-default'}>{OrdersStatusTranslates[status]}</p>
        <h2 className={styles.orderContetIngredienTitle + ' text text_type_main-medium'}>Состав:</h2>
        <OrderIngredientList ingredients={ingredients}/>
        <div className={styles.orderContentTotal}>
          <CreatedOrderDate>{createdAt}</CreatedOrderDate>
          <OrderTotalPrice totalPrice={getTotalByIngredients(ingredients)}/>
        </div>
    </section>
  )
}