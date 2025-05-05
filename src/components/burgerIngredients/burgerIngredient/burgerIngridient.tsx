import BurgerTitleSecond from '../../burgerTabs/burgerTitleSecond/burgerTitleSecond';
import BurgerColumnList from '../../burgerTabs/burgerColumn/burgerColumnList/burgerColumnList';
import { IIngredient, ITab } from '../../api/types';

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
