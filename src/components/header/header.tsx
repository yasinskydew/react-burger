import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from 'react-router-dom';

export default function AppHeader() {
    const navigate = useNavigate();

    const handleProfileNavigate = () => {
        navigate('/profile');
    }
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_buttons}>
                    <Button htmlType="button" size="medium" type="secondary" extraClass={styles.header_button}>
                        <BurgerIcon type="primary" />
                        <span className={styles.header_button_text}>Конструктор</span>
                    </Button>
                    <Button htmlType="button" size="medium" type="secondary" extraClass={styles.header_button}>
                        <ListIcon type="secondary" />
                        <span className={styles.header_button_text_secondary}>Лента заказов</span>
                    </Button>
                </div>
                <div className={styles.header_logo}>
                    <Logo />
                </div>
                <div className={styles.header_profile}>
                    <Button 
                        htmlType="button" 
                        size="medium" 
                        type="secondary" 
                        extraClass={styles.header_button}
                        onClick={handleProfileNavigate}
                    >
                        <ProfileIcon type="secondary" />
                        <span className={styles.header_button_text_secondary}>Личный кабинет</span>
                    </Button>
                </div>
            </div>
        </header>
        
    )
}