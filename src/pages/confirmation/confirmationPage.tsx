import { ModalWrapper } from "../../components/modalWrapper/modalWrapper"
import { Button, PasswordInput, Input } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './confirmationPage.module.css';
import { useRef, useState } from "react";
import { TokenManager } from "../../services/utils/tokenManager";
import { Loader } from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import { useResetPasswordConfirmMutation } from "../../services/api/auth";

export const ConfirmationPage = () => {
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const [resetPasswordConfirm, { isLoading }] = useResetPasswordConfirmMutation();
    
    const inputRef = useRef<HTMLInputElement>(null);

    const links = [
        {
            text: "Вспомнили пароль?",
            linkText: "Войти",
            to: "/login"
        },
    ];

    const handleSubmit = async () => {
        if (!password || !code) {
            return;
        }
        const response = await resetPasswordConfirm({ password, token: code });
        if (response.data?.success) {
            TokenManager.setIsResetPassword(false);
            navigate('/login');
        }
    }

    if (isLoading) {
        return <Loader />
    }

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
              <Button type='primary' size='medium' htmlType='submit' onClick={handleSubmit}>
                  Восстановить
              </Button>
           </form>
        </ModalWrapper>
    )
}