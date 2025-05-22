import { TokenManager } from "../utils/tokenManager";
import { ApiEndpoints } from "./constants/api";
import { ApiGroupNames } from "./constants/api-group-names";
import { EndpointNames } from "./constants/endpoint-names";
import { apiSlice } from "./create-api";
import { IUser } from "./user";

export interface ILoginResponse {
    success: boolean;
    message: string;
    user: IUser;
    accessToken: string;
    refreshToken: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
}

export interface ILogoutResponse {
    success: boolean;
    message: string;
}

export interface ILogout {
    token: string;
}

export interface IResetPassword {
    email: string;
}

export interface IResetPasswordResponse {
    success: boolean;
    message: string;
}

export interface IResetPasswordConfirm {
    password: string;
    token: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILogin>({
      query: (login) => ({
        url: ApiEndpoints.LOGIN,
        method: 'POST',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_LOGIN,
        body: login,
      }),
    }),
    register: builder.mutation<ILoginResponse, IRegister>({
      query: (register) => ({
        url: ApiEndpoints.REGISTER,
        method: 'POST',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_REGISTER,
        body: register,
      }),
    }),
    logout: builder.mutation<ILogoutResponse, ILogout>({
      query: () => ({
        url: ApiEndpoints.LOGOUT,
        method: 'POST',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_LOGOUT,
        body: {
          token: TokenManager.getRefreshToken(),
        },
        headers: {
          Authorization: `Bearer ${TokenManager.getAccessToken()}`,
        },
      }),
    }),
    resetPassword: builder.mutation<IResetPasswordResponse, IResetPassword>({
      query: (resetPassword) => ({
        url: ApiEndpoints.RESET_PASSWORD,
        method: 'POST',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_RESET_PASSWORD,
        body: resetPassword,
      }),
    }),
    resetPasswordConfirm: builder.mutation<IResetPasswordResponse, IResetPasswordConfirm>({
      query: (resetPasswordConfirm) => ({
        url: ApiEndpoints.RESET_PASSWORD_CONFIRM,
        method: 'POST',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_RESET_PASSWORD_CONFIRM,
        body: resetPasswordConfirm,
      }),
    }),
  })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useResetPasswordMutation, useResetPasswordConfirmMutation } = authApiSlice;
