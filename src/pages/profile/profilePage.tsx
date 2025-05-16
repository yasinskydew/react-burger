import { ProfileMenu } from "../../components/profile/profileMenu/profileMenu"
import { ProfileUser } from "../../components/profile/profileUser/profileUser"
import styles from './profilePage.module.css'

export const ProfilePage = () => {
    return (  
        <div className={styles.profile_page}>
          <div>
            <ProfileMenu />
            <p className={styles.profile_page_text + ' text text_type_main-default text_color_inactive'}>
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
          <ProfileUser />
        </div>
    )
}
