import { NavLink } from 'react-router-dom';
import styles from './profileMenu.module.css';
import { useLogoutMutation } from '../../../services/api/auth';
import { TokenManager } from '../../../services/utils/tokenManager';
import { Loader } from '../../loader/loader';
import { useUser } from '../../../services/store/hooks/useUser';

interface MenuItem {
  text: string;
  path?: string;
  onClick?: () => void;
}

export const ProfileMenu = () => {
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const { error, clearUser } = useUser()
  const handleLogout = async () => {
    await logout({ token: TokenManager.getRefreshToken() || '' })
    clearUser()
  }

  const menuItems: MenuItem[] = [
    {
      text: 'Профиль',
      path: '/profile',
    },
    {
      text: 'История заказов',
      path: '/profile/orders',
    },
    {
      text: 'Выход',
      onClick: handleLogout,
    },
  ];

  const renderMenuItem = (item: MenuItem) => {
    if (item.path) {
      return (
        <NavLink to={item.path} end key={item.text} className={styles.profile_menu_nav_link} >
          {({ isActive }) => (
            <span
              className={`text text_type_main-medium ${isActive ? styles.profile_menu_item_active : styles.profile_menu_item}`}
            >
              {item.text}
            </span>
          )}
        </NavLink>
      );
    }
    
    return (
      <span
        key={item.text}
        className={`text text_type_main-medium ${styles.profile_menu_item}`}
        onClick={item.onClick}
        role="button"
      >
        {item.text}
      </span>
    );
  };

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.profile_menu}>
      {isError && <div>Error: {error}</div>}
      {menuItems.map(renderMenuItem)}
    </div>
  );
}
