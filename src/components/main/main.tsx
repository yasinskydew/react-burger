import BurgerIngridients from '../burger-ingridients/burger-ingridients'
import styles from './main.module.css'
import BurgerComponentSection from '../burger-components/burger-component-section/burger-component-section'

export default function Main() {
    return (
        <main className={styles.main}>
            <BurgerIngridients />
            <BurgerComponentSection />
        </main>
    )
}
