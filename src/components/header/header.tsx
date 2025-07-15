import React from "react";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css'
import HeaderNavButton from './headerNavButton/headerNavButton';
import { useUser } from '../../services/store/hooks/useUser';

export default function AppHeader() {
    const { user } = useUser();
    return (
        <header className={styles.header} data-testid="header">
            <div className={styles.container} data-testid="header-container">
                <div className={styles.header_buttons} data-testid="header-buttons">
                    <HeaderNavButton 
                        Icon={BurgerIcon} 
                        text="Конструктор" 
                        path="/" 
                        data-testid="header-nav-button"
                    />
                    <HeaderNavButton 
                        Icon={ListIcon} 
                        text="Лента заказов" 
                        path="/feed" 
                        data-testid="header-nav-button"
                    />
                </div>
                <div className={styles.header_logo} data-testid="header-logo">
                    <Logo />
                </div>
                <div className={styles.header_profile} data-testid="header-profile">
                    <HeaderNavButton 
                        Icon={ProfileIcon} 
                        text={user ? user.name : "Личный кабинет"} 
                        path="/profile" 
                        data-testid="header-nav-button"
                    />
                </div>
            </div>
        </header>
        
    )
}