import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components"
import { ModalWrapper } from "../../components/modalWrapper/modalWrapper"
import styles from './registerPage.module.css';
import { useRef, useState } from "react";
import { useRegisterMutation } from "../../services/api/auth";
import { Loader } from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/store/hooks/useUser";

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [nameError, setNameError] = useState(false);

  const [register, { isLoading, isError }] = useRegisterMutation();
  const { error } = useUser()
  const navigate = useNavigate();
  
  const links = [
    {
      text: "Уже зарегистрированы?",
      linkText: "Войти",
      to: "/login"
    },
  ];

  const handleRegister = async () => {
    if (name === '') {
      setNameError(true);
    }
    await register({
      name,
      email,
      password,
    })
    navigate('/');
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Error: {error}</div>
  }

  return (
    <ModalWrapper title="Регистрация" links={links}>
      <form>
        <div className={styles.register_form}>
          <Input
            type='text'
            name='name'
            placeholder='Имя'
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            ref={inputRef}
            autoComplete='on'
            error={nameError}
            errorText='Введите имя'
            onPointerEnterCapture={(e: React.MouseEvent<HTMLInputElement>) => {
              console.log(e);
            }}
            onPointerLeaveCapture={(e: React.MouseEvent<HTMLInputElement>) => {
              console.log(e);
            }}
          />

          <EmailInput
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <PasswordInput
            name='password'
            placeholder='Пароль'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button type='primary' size='medium' htmlType='button' onClick={handleRegister}>
            Зарегистрироваться
          </Button>                   
        </div>
      </form>
    </ModalWrapper>
  )
}
