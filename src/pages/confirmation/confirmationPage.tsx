import { ModalWrapper } from "../../components/modalWrapper/modalWrapper"
import { Button, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './confirmationPage.module.css';
import { useRef, useState } from "react";

export const ConfirmationPage = () => {
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    
    const inputRef = useRef<HTMLInputElement>(null);

    const links = [
        {
            text: "Вспомнили пароль?",
            linkText: "Войти",
            to: "/login"
        },
    ];

    return (
        <ModalWrapper title="Восстановление пароля" links={links}>
           <form className={styles.confirmation_form}>
              <PasswordInput
                  name='password'
                  placeholder='Введите новый пароль'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
              />
              <Input
                  type='text'
                  name='code'
                  placeholder='Введите код из письма'
                  value={code}
                  onChange={(e: any) => setCode(e.target.value)}
                  ref={inputRef}
                  onPointerEnterCapture={(e: React.MouseEvent<HTMLInputElement>) => {
                      console.log(e);
                  }}
                  onPointerLeaveCapture={(e: React.MouseEvent<HTMLInputElement>) => {
                      console.log(e);
                  }}
              />
              <Button type='primary' size='medium' htmlType='submit'>
                  Восстановить
              </Button>
           </form>
        </ModalWrapper>
    )
}