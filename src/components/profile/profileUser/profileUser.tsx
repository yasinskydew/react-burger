import styles from './profileUser.module.css';
import { ProfileUserInput } from '../profileUserInput/profileUserInput';
import { ApplicationState } from '../../../services/store/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { IUserDataUpdate, useUpdateUserMutation } from '../../../services/api/user';
import { Loader } from '../../loader/loader';

export interface userPropertyInterface {
  placeholder: string;
  type: string;
  inputMode: string;
  name: string;
}

export interface IUserData {
  name: string;
  email: string;
  password: string;
}

export const ProfileUser = () => {
  const { user } = useSelector((state: ApplicationState) => state.userSliceReducer);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const [userData, setUserData] = useState<IUserData>({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const userProperty: userPropertyInterface[] = [
    {
      name: 'name',
      placeholder: 'Имя',
      type: 'text',
      inputMode: 'text',
    },
    {
      name: 'email',
      placeholder: 'E-mail',
      type: 'email',
      inputMode: 'email',
    },
    {
      name: 'password',
      placeholder: 'Пароль',
      type: 'password',
      inputMode: 'text',
    },
  ]

  const handleReset = () => {
    setUserData({
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    });
    setIsDisabled(true);
  }

  const handleSave = () => {
    const userDataUpdate: IUserDataUpdate = {
      name: userData.name,
      email: userData.email,
      password: userData.password || undefined,
    }
    updateUser(userDataUpdate);
    setIsDisabled(true);
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <form className={styles.profile_user} onSubmit={handleSave}>
      <div className={styles.profile_user_inputs}>
        {
          userProperty.map((user) => (
            <ProfileUserInput
              key={user.name}
              userData={userData}
              inputProperty={user}
              setData={(name, value) => {
                setUserData({
                  ...userData,
                  [name]: value,
                })
                setIsDisabled(false);
              }}
            />
          ))
        }
      </div>
      {
        !isDisabled && (
          <div className={styles.profile_user_buttons}>
            <Button htmlType='button' type='secondary' size="large" onClick={handleReset}>
                Отмена
            </Button>
            <Button htmlType='submit' type='primary' size="large">
                Сохранить
            </Button>
        </div>
      )}
    </form>
  )
}
