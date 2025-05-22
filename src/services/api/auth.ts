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
  })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;
