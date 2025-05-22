import BurgerPrice from '../../../burgerPrice/burgerPrice';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burgerColumnItem.module.css'
import { IIngredient, DragItemTypes } from '../../../../services/types';
import { useOrder } from '../../../../services/store/hooks/useOrder';
import { useIngredients } from '../../../../services/store/hooks';
import { useDrag } from 'react-dnd';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface BurgerColumnItemProps extends IIngredient {}

export default function BurgerColumnItem({ ...ingredient }: BurgerColumnItemProps) {
    const { items, getBun } = useOrder();
    const dragRef = useRef<HTMLAnchorElement>(null);
    const location = useLocation();
    const { setIsIngredientModalOpen } = useIngredients();
    
    const [{isDrag}, drag] = useDrag({
        type: DragItemTypes.INGREDIENT,
        item: { ingredient: ingredient },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    drag(dragRef);

    const bun = getBun();

    const getCount = () => {
        if(!ingredient || !bun)  return 0;
        if(ingredient._id === bun._id) return 2;
        const count = items.filter(item => item._id === ingredient._id).length || 0;
        return count;
    }

    return (
        <Link to={`/ingredients/${ingredient._id}`} 
            className={styles.burger_column_item} 
            ref={dragRef} 
            style={{ opacity: isDrag ? 0.4 : 1 }}
            state={{ background: location }}
            onClick={() => setIsIngredientModalOpen(true)}
        >
            <img src={ingredient.image} alt={ingredient.name} />
            {getCount() > 0 && <Counter count={getCount()} size="default" />}
            <BurgerPrice size="default" price={ingredient.price} />
            <h2 className={styles.title + ' text_type_main-default'}>{ingredient.name}</h2>
        </Link>
    )
}
