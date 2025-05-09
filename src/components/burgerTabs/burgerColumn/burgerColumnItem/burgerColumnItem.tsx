import BurgerPrice from '../../../burgerPrice/burgerPrice';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerColumnItem.module.css'
import { IIngredient } from '../../../../services/types';
import { useOrder } from '../../../../services/store/hooks/useOrder';
import { useIngridients } from '../../../../services/store/hooks';

export interface BurgerColumnItemProps extends IIngredient {
    onClick: () => void
}

export default function BurgerColumnItem({ onClick, ...ingredient }: BurgerColumnItemProps) {
    const { items } = useOrder();
    const { getDefaultBun } = useIngridients();
    const bun = getDefaultBun();

    const getCount = () => {
        if(ingredient._id === bun._id) {
            return 2;
        }
        const count = items.filter(item => item._id === ingredient._id).length || 0;
        return count;
    }

    return (
        <div className={styles.burger_column_item} onClick={onClick}>
            <img src={ingredient.image} alt={ingredient.name} />
            {getCount() > 0 && <Counter count={getCount()} size="default" />}
            <BurgerPrice size="default" price={ingredient.price} />
            <h2 className={styles.title + ' text_type_main-default'}>{ingredient.name}</h2>
        </div>
    )
}
