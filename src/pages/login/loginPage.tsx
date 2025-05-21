import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState } from "react";
import styles from './loginPage.module.css';
import { ModalWrapper } from "../../components/modalWrapper/modalWrapper";
import { useLoginMutation } from "../../services/api/auth";
import { ApplicationState } from "../../services/store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Loader } from "../../components/loader/loader";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, error } = useSelector((state: ApplicationState) => state.userSliceReducer);
    const [login, { isLoading, isError }] = useLoginMutation();

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

    const handleSubmit = () => {
        login({ email, password });
    }

    if (user) {
        return <Navigate to="/" />
    }

    if (isLoading) {
        return <Loader />
    }
    
    if (isError) {
        return <div>Error: {error}</div>
    }

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

                <Button 
                    type='primary' 
                    size='medium' 
                    htmlType='submit'
                    onClick={handleSubmit}
                >
                    Войти
                </Button>
            </form>
        </ModalWrapper>
    )
}
