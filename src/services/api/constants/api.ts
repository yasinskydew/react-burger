export enum ApiEndpoints {
    INGRIDIENTS = '/ingredients',
    ORDERS = '/orders',
    LOGIN = 'auth/login',
    REGISTER = 'auth/register',
    USER = 'auth/user',
    LOGOUT = 'auth/logout',
    RESET_PASSWORD = '/password-reset',
    RESET_PASSWORD_CONFIRM = '/password-reset/reset',
    ORDERS_ALL='/orders/all'
}

export const BASE_URL = 'https://norma.nomoreparties.space/api';
export const BASE_WS_URL = 'wss://norma.nomoreparties.space'