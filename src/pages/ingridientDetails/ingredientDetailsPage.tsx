import IngridientDetails from '../../components/burgerIngredients/ingridientDetails/ingridientDetails';
import styles from './ingredientDetailsPage.module.css';

export default function IngridientDetailsPage() {
  
  
  return (
    <div className={styles.ingredientDetailsPage}>
      <h2 className={styles.ingredientDetailsPageTitle + ' text_type_main-medium'}>Детали ингредиента</h2>
      <IngridientDetails />
    </div>
  )
}
