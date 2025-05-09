import styles from './burgerTitleSecond.module.css'

interface BurgerTitleSecondProps {
    children: React.ReactNode
    tabId?: string
}

export default function BurgerTitleSecond({ children, tabId }: BurgerTitleSecondProps) {
    return (
        <h2 className={styles.burger_title_second + ' text_type_main-medium'} data-tab-id={tabId}>
           {children}
        </h2>
    )
}
