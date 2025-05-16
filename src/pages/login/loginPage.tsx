import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState } from "react";
import styles from './loginPage.module.css';
import { ModalWrapper } from "../../components/modalWrapper/modalWrapper";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const links = [
        {
            text: "Вы — новый пользователь?",
            linkText: "Зарегистрироваться",
            to: "/sign-in"
        },
        {
            text: "Забыли пароль?",
            linkText: "Восстановить пароль",
            to: "/forgot-password"
        }
    ];

    return (
        <ModalWrapper title="Вход" links={links}>
            <form className={styles.login_form}>
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

                <Button type='primary' size='medium' htmlType='submit'>
                    Войти
                </Button>
            </form>
        </ModalWrapper>
    )
}
