import { ModalWrapper } from "../../components/modalWrapper/modalWrapper"
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './forgotPasswordPage.module.css';
import { useState } from "react";

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const links = [
        {
            text: "Вспомнили пароль?",
            linkText: "Войти",
            to: "/login"
        },
    ];

    return (
        <ModalWrapper title="Восстановление пароля" links={links}>
           <form className={styles.forgot_password_form}>
                <EmailInput
                    name='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button type='primary' size='medium' htmlType='submit'>
                    Восстановить
                </Button>
           </form>
        </ModalWrapper>
    )
}