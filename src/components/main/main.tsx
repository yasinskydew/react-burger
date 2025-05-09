import styles from './main.module.css'
import { useEffect } from 'react'
// import BurgerConstructor from '../burgerConstructor/burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import { useGetIngridientsQuery } from '../../services/api/ingridient';
import { useDispatch } from 'react-redux';
import { setIngredients } from '../../services/reducers/ingredients';

export default function Main() {
    const { data: ingredientsData } = useGetIngridientsQuery()
    const dispatch = useDispatch();

    useEffect(() => {
        if (ingredientsData && ingredientsData.success) {
            dispatch(setIngredients(ingredientsData.data));
        }
    }, [ingredientsData, dispatch]);

    return (
        <main className={styles.main}>
            <BurgerIngredients />
            {/* <BurgerConstructor /> */}
        </main>
    )
}
