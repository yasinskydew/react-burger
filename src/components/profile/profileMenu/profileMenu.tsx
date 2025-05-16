import { NavLink } from 'react-router-dom';
import styles from './profileMenu.module.css';

export const ProfileMenu = () => {

  const menuItems = [
    {
      text: 'Профиль',
      path: '/profile',
    },
    {
      text: 'История заказов',
      path: '/order-history',
    },
    {
      text: 'Выход',
      path: '/logout',
    },
  ]


  return (
      <div className={styles.profile_menu}>
          {menuItems.map((item) => (
            <NavLink to={item.path} key={item.text} className={styles.profile_menu_nav_link}>
              {({isActive}) => (
                <span className={`text text_type_main-medium ${isActive ? styles.profile_menu_item_active : styles.profile_menu_item}`}>
                  {item.text}
                </span>
              )}
            </NavLink>
          ))
          }
      </div>
  )
}
