import { IIngredient } from '../../../services/types';
import { groupByKey } from '../../../services/utils/chunks';
import { IngredientImageCircle } from '../../feed/ingredientImageList/ingredientImageCircle';
import { OrderTotalPrice } from '../orderTotalPrice/orderTotalPrice';
import styles from './orderIngredientList.module.css'

export const OrderIngredientList = ({ ingredients} : { ingredients: IIngredient[] }) => {
  const grouppedIngredients = groupByKey(ingredients, '_id');

  return (
    <ul className={styles.listContainer}>
      {
        Object.keys(grouppedIngredients).map((key, idx) => {

          const count = grouppedIngredients[key].length
          const ingredient = grouppedIngredients[key][0]

          return (
            <div className={styles.ingredientItem}>
              <div className={styles.ingredientItem}>
                <IngredientImageCircle
                  key={idx}
                  ingredient={ingredient}
                />
                <h3 className='text text_type_main-default'>{ingredient.name}</h3>
              </div>
              <OrderTotalPrice totalPrice={count + 'x' + ingredient.price + ' '}/>
            </div>
          )
        })
      }
    </ul>
  )
}