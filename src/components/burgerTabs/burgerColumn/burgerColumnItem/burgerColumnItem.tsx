import BurgerPrice from '../../../burgerPrice/burgerPrice';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerColumnItem.module.css'
import { IIngredient } from '../../../api/types';

export interface BurgerColumnItemProps extends IIngredient {
    count: number
    onClick: () => void
}

export default function BurgerColumnItem({ count, onClick, ...ingredient }: BurgerColumnItemProps) {
    return (
        <div className={styles.burger_column_item} onClick={onClick}>
            <img src={ingredient.image} alt={ingredient.name} />
            {count > 0 && <Counter count={count} size="default" />}
            <BurgerPrice price={ingredient.price} />
            <h2 className={styles.title + ' text_type_main-default'}>{ingredient.name}</h2>
        </div>
    )
}
