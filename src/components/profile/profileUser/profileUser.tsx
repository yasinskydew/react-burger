import styles from './profileUser.module.css';
import { ProfileUserInput } from '../profileUserInput/profileUserInput';
import { ApplicationState } from '../../../services/store/store';
import { useSelector } from 'react-redux';

export interface userPropertyInterface {
  value: string;
  placeholder: string;
  type: string;
  icon: string;
  inputMode: string;
  name: string;
}

export const ProfileUser = () => {
  const { user } = useSelector((state: ApplicationState) => state.userSliceReducer);
  
  const userProperty: userPropertyInterface[] = [
    {
      name: 'name',
      value: user?.name || '',
      placeholder: 'Имя',
      type: 'text',
      icon: 'EditIcon',
      inputMode: 'text',
    },
    {
      name: 'email',
      value: user?.email || '',
      placeholder: 'E-mail',
      type: 'email',
      icon: 'EditIcon',
      inputMode: 'email',
    },
    {
      name: 'password',
      value: 'password',
      placeholder: 'Пароль',
      type: 'password',
      icon: 'EditIcon',
      inputMode: 'password',
    },
  ]

  return (
    <div className={styles.profile_user}>
      {
        userProperty.map((user) => (
          <ProfileUserInput
            key={user.name}
            inputProperty={user}
            isDisabled={true}
            setIsDisabled={() => {}}
            setInputProperty={() => {}}
          />
        ))
      }
    </div>
  )
}
