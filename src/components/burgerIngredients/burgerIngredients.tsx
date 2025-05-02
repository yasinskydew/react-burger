

import BurgerTabList from '../burgerTabs/burgerTabList/burgerTabList';
import styles from './burgerIngredients.module.css';
import { getIngredients, getTabs, IIngredient } from '../../utils/data';
import { useState } from 'react';
import BurgerIngredient from './burgerIngredient/burgerIngridient';

interface BurgerIngredientsProps {
    ingredients: IIngredient[]
    addIngredient: (ingredient: IIngredient) => void
}

export default function BurgerIngredients(props: BurgerIngredientsProps) {
    const { ingredients } = props;
    const [tabs, setTabs] = useState(getTabs());
    const data = getIngredients()

    const setActiveTab = (newId: string) => {
        const newTabs = tabs.map(t => {
            newId === t.id ?  t.isActive = true : t.isActive = false
            return t;
        })
        setTabs(newTabs)
    }
    const getByType = (type: string) => {
        return data.filter(ingredient => ingredient.type === type)
    }


    return (
      <section className={styles.section_burger_ingredients}>
        <h1 className={styles.burger_title + ' text_type_main-large'}>
            Соберите бургер
        </h1>
        <BurgerTabList tabs={tabs} setActive={setActiveTab}/>
        <div className={styles.scrollableContent}>
           {
            tabs.map(tab => {
                return <BurgerIngredient 
                    key={tab.id} 
                    tab={tab} 
                    data={getByType(tab.id)} 
                    ingredients={ingredients} 
                    addIngredient={props.addIngredient}
                />
            })
           }
        </div>
    </section>
    )
}
