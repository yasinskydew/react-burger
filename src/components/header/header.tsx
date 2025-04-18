import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_buttons}>
                    <Button htmlType="button" size="medium" type="secondary" extraClass={styles.header_button}>
                        <BurgerIcon type="primary" />
                        Конструктор
                    </Button>
                    <Button htmlType="button" size="medium" type="secondary" extraClass={styles.header_button}>
                        <ListIcon type="secondary" />
                        Лента заказов
                    </Button>
                </div>
                <div className={styles.header_logo}>
                    <Logo />
                </div>
                <div className={styles.header_profile}>
                    <Button htmlType="button" size="medium" type="secondary" extraClass={styles.header_button}>
                        <ProfileIcon type="secondary" />
                        Личный кабинет
                    </Button>
                </div>
            </div>
        </header>
        
    )
}