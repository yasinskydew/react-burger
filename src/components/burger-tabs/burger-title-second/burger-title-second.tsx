import styles from './burger-title-second.module.css'

export default function BurgerTitleSecond({ children }: { children: React.ReactNode }) {
    return (
        <h2 className={styles.burger_title_second + ' text_type_main-medium'}>
           {children}
        </h2>
    )
}
