import BurgerPrice from '../../../burger-price/burger-price'
import styles from './burger-column-item.module.css'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
export interface BurgerColumnItemProps {
   title: string;
   image: string;
   price: number;
   count: number;
}



export default function BurgerColumnItem({ title, image, price, count }: BurgerColumnItemProps) {
    return (
        <div className={styles.burger_column_item}>
            <img src={image} alt={title} />
            {count > 0 && <Counter count={count} size="default" />}
            <BurgerPrice price={price} />
            <h2 className={styles.title + ' text_type_main-default'}>{title}</h2>
        </div>
    )
}
