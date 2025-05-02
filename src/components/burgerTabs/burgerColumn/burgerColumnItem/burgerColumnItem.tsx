import BurgerPrice from '../../../burgerPrice/burgerPrice';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerColumnItem.module.css'
import { IIngredient } from '../../../../utils/data';

export interface BurgerColumnItemProps extends IIngredient {
    count: number
    onClick?: () => void
}

export default function BurgerColumnItem({ image, price, count, name, onClick }: BurgerColumnItemProps) {
    
    const increment = () => {
        if(onClick) onClick()
    }
    return (
        <div className={styles.burger_column_item} onClick={increment}>
            <img src={image} alt={name} />
            {count > 0 && <Counter count={count} size="default" />}
            <BurgerPrice price={price} />
            <h2 className={styles.title + ' text_type_main-default'}>{name}</h2>
        </div>
    )
}
