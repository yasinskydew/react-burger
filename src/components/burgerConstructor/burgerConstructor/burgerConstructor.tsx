import { IIngredient } from '../../../utils/data'
import BurgerPrice from '../../burgerPrice/burgerPrice'
import BurgerComponentList from '../burgerComponentList/burgerComponentList'
import styles from './burgerConstructor.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

interface BurgerConstructorProps {
  ingredients: IIngredient[]
  deleteIngridient: (ingredient:IIngredient) => void
}
export default function BurgerConstructor({ ingredients, deleteIngridient }: BurgerConstructorProps) {

  const getPrice = () => {
    return ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
  }
  return (
    <section className={styles.burgerConstructor}>
      <div className={styles.scrollableContent}>
        <BurgerComponentList ingredients={ingredients} deleteIngridient={deleteIngridient} />
      </div>
      <div className={styles.burgerConstructorBottoms}>
        <BurgerPrice price={getPrice()} size="large" />
        <Button htmlType="submit" type="primary" size="large">
            Оформить заказ
        </Button>
      </div>
    </section>
  );
}
