import styles from './profileUser.module.css';
import { ProfileUserInput } from '../profileUserInput/profileUserInput';

export interface userPropertyInterface {
  value: string;
  placeholder: string;
  type: string;
  icon: string;
  inputMode: string;
  name: string;
}

export const ProfileUser = () => {
  const user: userPropertyInterface[] = [
    {
      name: 'name',
      value: 'John Doe',
      placeholder: 'Имя',
      type: 'text',
      icon: 'EditIcon',
      inputMode: 'text',
    },
    {
      name: 'email',
      value: 'john.doe@example.com',
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
        user.map((user) => (
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
