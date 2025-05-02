import styles from './main.module.css'
import { IIngredient } from '../../utils/data'
import { useState } from 'react'
import BurgerConstructor from '../burgerConstructor/burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';

export default function Main() {

    const [ingredients, setIngredients] = useState<IIngredient[]>([]);

    const addIngredient = (ingredient: IIngredient) => {
        setIngredients(prev => [...prev, ingredient])
        console.log(ingredients)
    }
    return (
        <main className={styles.main}>
            <BurgerIngredients ingredients={ingredients} addIngredient={addIngredient}/>
            <BurgerConstructor ingredients={ingredients} />
        </main>
    )
}
