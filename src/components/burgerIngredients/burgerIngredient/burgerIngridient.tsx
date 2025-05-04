

import { IIngredient, ITab,  } from '../../../utils/data';
import BurgerTitleSecond from '../../burgerTabs/burgerTitleSecond/burgerTitleSecond';
import BurgerColumnList from '../../burgerTabs/burgerColumn/burgerColumnList/burgerColumnList';

interface BurgerIngredientProps {
    ingredients: IIngredient[]
    data: IIngredient[]
    tab: ITab;
    addIngredient: (ingredient: IIngredient) => void
}

export default function BurgerIngredient(props: BurgerIngredientProps) {
    return (
        <>
             <BurgerTitleSecond>
                {props.tab.title}
            </BurgerTitleSecond>
            <BurgerColumnList data={props.data} ingredients={props.ingredients} addIngredient={props.addIngredient}/>
        </>
    )
}
