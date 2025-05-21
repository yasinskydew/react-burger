import { NavLink, useNavigate } from 'react-router-dom';
import styles from './profileMenu.module.css';
import { useLogoutMutation } from '../../../services/api/auth';
import { TokenManager } from '../../../services/utils/tokenManager';
import { Loader } from '../../loader/loader';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../services/store/store';

export const ProfileMenu = () => {
  const [logout, { isLoading, isError }] = useLogoutMutation();
  const { error } = useSelector((state: ApplicationState) => state.userSliceReducer);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout({
      token: TokenManager.getRefreshToken() || '',
    })
    navigate('/login');
  }

  const menuItems = [
    {
      text: 'Профиль',
      path: '/profile',
      isActive: true,
    },
    {
      text: 'История заказов',
      path: '/order-history',
      isActive: false,
    },
    {
      text: 'Выход',
      path: '',
      onClick: handleLogout,
      isActive: false,
    },
  ]

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error: {error}</div>
  }

  return (
      <div className={styles.profile_menu}>
          {menuItems.map((item) => (
            <NavLink to={item.path} key={item.text} className={styles.profile_menu_nav_link} onClick={item.onClick}>
              <span className={`text text_type_main-medium ${item.isActive ? styles.profile_menu_item_active : styles.profile_menu_item}`}>
                {item.text}
              </span>
            </NavLink>
          ))
          }
      </div>
  )
}
