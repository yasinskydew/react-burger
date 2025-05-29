import { Outlet } from 'react-router-dom'
import { ProfileMenu } from '../../profile/profileMenu/profileMenu'
import styles from './profileLayout.module.css'

export const ProfileLayout = () => {
    return (  
        <div className={styles.profile_layout}>
          <div>
            <ProfileMenu />
            <p className={styles.profile_layout_text + ' text text_type_main-default text_color_inactive'}>
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
          <Outlet />
        </div>
    )
}
