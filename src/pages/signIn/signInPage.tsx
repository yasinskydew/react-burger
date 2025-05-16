import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components"
import { ModalWrapper } from "../../components/modalWrapper/modalWrapper"
import styles from './signInPage.module.css';
import { useRef, useState } from "react";

export const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const links = [
        {
            text: "Уже зарегистрированы?",
            linkText: "Войти",
            to: "/login"
        },
    ];

    return (
        <ModalWrapper title="Регистрация" links={links}>
            <form>
                <div className={styles.sign_in_form}>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Имя'
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        ref={inputRef}
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

                    <Button type='primary' size='medium' htmlType='submit'>
                        Зарегистрироваться
                    </Button>                   
                </div>
            </form>
        </ModalWrapper>
    )
}
