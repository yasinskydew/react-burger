import { IIngredient } from '../../../api/types'
import BurgerColumnItem from '../burgerColumnItem/burgerColumnItem'
import styles from './burgerColumnList.module.css'
export interface BurgerColumnListProps {
  data: IIngredient[]
  ingredients: IIngredient[]
  addIngredient: (ingredient: IIngredient) => void
}

export default function BurgerColumnList({ data, ingredients, addIngredient }: BurgerColumnListProps) {
    return (
        <div className={styles.burger_column_list}>
            {data.map((item) => {
                const count = ingredients.filter((ingredient) => ingredient._id === item._id).length
                return (
                    <BurgerColumnItem key={item._id} {...item} count={count} onClick={() => addIngredient(item)}/>
                )
            })}
        </div>
    ) 
}
