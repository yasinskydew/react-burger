import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css'
import HeaderNavButton from './headerNavButton/headerNavButton';

export default function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_buttons}>
                    <HeaderNavButton 
                        Icon={BurgerIcon} 
                        text="Конструктор" 
                        path="/" 
                    />
                    <HeaderNavButton 
                        Icon={ListIcon} 
                        text="Лента заказов" 
                        path="/order-history" 
                    />
                </div>
                <div className={styles.header_logo}>
                    <Logo />
                </div>
                <div className={styles.header_profile}>
                    <HeaderNavButton 
                        Icon={ProfileIcon} 
                        text="Личный кабинет" 
                        path="/profile" 
                    />
                </div>
            </div>
        </header>
        
    )
}