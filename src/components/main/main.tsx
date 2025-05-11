import styles from './main.module.css'
import { useEffect } from 'react'
import BurgerConstructor from '../burgerConstructor/burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import { useGetIngridientsQuery } from '../../services/api/ingridient';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useIngredients } from '../../services/store/hooks';
import { IIngredient } from '../../services/types';


export default function Main() {
    const { data: ingredientsData, isLoading, isError } = useGetIngridientsQuery()
    const { setDefaultBun } = useIngredients();

    useEffect(() => {
        if(isLoading) {
            return;
        }
        if(isError) {
            return;
        }
        if (ingredientsData && ingredientsData.success) {
            setDefaultBun(ingredientsData.data.find(ingredient => ingredient.type === 'bun') as IIngredient);
        }
        
    }, [ingredientsData, setDefaultBun, isLoading, isError]);

    return (
        <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
}
