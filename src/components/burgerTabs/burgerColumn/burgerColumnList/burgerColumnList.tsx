import BurgerColumnItem from '../burgerColumnItem/burgerColumnItem'
import styles from './burgerColumnList.module.css'
import { useIngredients } from '../../../../services/store/hooks';

interface IBurgerColumnListProps {
    type: string;
}

export default function BurgerColumnList({ type }: IBurgerColumnListProps) {
    const { getIngridientsByType } = useIngredients();

    return (
        <div className={styles.burger_column_list}>
            {getIngridientsByType(type).map((item) => {
                return (
                    <BurgerColumnItem key={item._id} {...item}/>
                )
            })}
        </div>
    ) 
}
