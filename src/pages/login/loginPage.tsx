import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState } from "react";
import styles from './loginPage.module.css';
import { ModalWrapper } from "../../components/modalWrapper/modalWrapper";
import { useLoginMutation } from "../../services/api/auth";
import { Navigate, useLocation, useNavigate } from "react-router";
import { Loader } from "../../components/loader/loader";
import { useUser } from "../../services/store/hooks/useUser";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading, isError }] = useLoginMutation();
    const { user, error } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const links = [
        {
            text: "Вы — новый пользователь?",
            linkText: "Зарегистрироваться",
            to: "/register"
        },
        {
            text: "Забыли пароль?",
            linkText: "Восстановить пароль",
            to: "/forgot-password"
        }
    ];

    const handleSubmit = async () => {
        await login({ email, password })
        navigate(from, { replace: true })
    }

    if (user) {
        return <Navigate to={from} />
    }

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <div>Error: {error}</div>
    }

    return (
        <ModalWrapper title="Вход" links={links}>
            <form className={styles.login_form} onSubmit={handleSubmit}>
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
                >
                    Войти
                </Button>
            </form>
        </ModalWrapper>
    )
}
