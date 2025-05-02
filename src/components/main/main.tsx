import styles from './main.module.css'
import { getDefaultIngridients, IIngredient } from '../../utils/data'
import { useState } from 'react'
import BurgerConstructor from '../burgerConstructor/burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';

export default function Main() {
    const [ingredients, setIngredients] = useState<IIngredient[]>(getDefaultIngridients());

    const addIngredient = (ingredient: IIngredient) => {
        setIngredients(prev => {
            const lastItem = prev[prev.length - 1];
            return [...prev.slice(0, -1), ingredient, lastItem];
        })
    }

    const deleteIngridient = (ingredient: IIngredient) => {
        const index = ingredients.findIndex(item => item._id === ingredient._id);
        if (index === -1) return;
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    }
    return (
        <main className={styles.main}>
            <BurgerIngredients ingredients={ingredients} addIngredient={addIngredient}/>
            <BurgerConstructor ingredients={ingredients} deleteIngridient={deleteIngridient}/>
        </main>
    )
}
