import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css'
import HeaderNavButton from './headerNavButton/headerNavButton';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../services/store/store';

export default function AppHeader() {
    const { user } = useSelector((state: ApplicationState) => state.userSliceReducer);
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
                        path="/feed" 
                    />
                </div>
                <div className={styles.header_logo}>
                    <Logo />
                </div>
                <div className={styles.header_profile}>
                    <HeaderNavButton 
                        Icon={ProfileIcon} 
                        text={user ? user.name : "Личный кабинет"} 
                        path="/profile" 
                    />
                </div>
            </div>
        </header>
        
    )
}