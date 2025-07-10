import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './feeedListItem.module.css';
import { IngredientImageList } from '../ingredientImageList/ingredientImageList';
import { useIngredients } from '../../../services/store/hooks';

export const FeedListItem = (props: any) => {
  const { getIngredientById } = useIngredients();

  const { order } = props;

  const ingredients = order.ingredients.map((id: string) => getIngredientById(id));
  const total = ingredients.reduce((sum: number, item: any) => sum + item.price, 0);

  return (
    <li key={order.number} className={styles.feedListItem}>
      <div className={styles.feedListItemRow}>
        <span className='text text_type_digits-default'>{'#' + order.number}</span>
        <span className='text text_type_main-default text_color_inactive'>{<FormattedDate date={new Date(order.createdAt)} />}</span>
      </div>
      <h2 className='text text_type_main-medium'>{order.name}</h2>
      <div className={styles.feedListItemRow}>
        <IngredientImageList ingredients={ingredients} maxVisible={5}/>
        <div className={styles.feedListItemTotal}>
          <span className='text text_type_digits-default'>{total}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
}