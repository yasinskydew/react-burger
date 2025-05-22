import { ModalWrapper } from "../../components/modalWrapper/modalWrapper"
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './forgotPasswordPage.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenManager } from "../../services/utils/tokenManager";
import { useResetPasswordMutation } from "../../services/api/auth";
import { Loader } from "../../components/loader/loader";

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const links = [
        {
            text: "Вспомнили пароль?",
            linkText: "Войти",
            to: "/login"
        },
    ];

    const handleSubmit = async () => {
        const response = await resetPassword({ email });
        if (response.data?.success) {
            TokenManager.setIsResetPassword(false);
            navigate('/reset-password');
        }
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <ModalWrapper title="Восстановление пароля" links={links}>
           <form className={styles.forgot_password_form}>
                <EmailInput
                    name='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button type='primary' size='medium' htmlType='submit' onClick={handleSubmit}>
                    Восстановить
                </Button>
           </form>
        </ModalWrapper>
    )
}