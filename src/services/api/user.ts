import { TokenManager } from "../utils/tokenManager";
import { ApiEndpoints } from "./constants/api";
import { ApiGroupNames } from "./constants/api-group-names";
import { EndpointNames } from "./constants/endpoint-names";
import { apiSlice } from "./create-api";

export interface IUser {
    name: string;
    email: string;
}

export interface IGetUserResponse {
    success: boolean;
    message: string;
    user: IUser;
}

export interface IUserDataUpdate {
  name?: string;
  email?: string;
  password?: string;
}


export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({   
    getUser: builder.query<IGetUserResponse, void>({
      query: () => ({
        url: ApiEndpoints.USER,
        method: 'GET',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_GET_USER,
        headers: {
          Authorization: `Bearer ${TokenManager.getAccessToken()}`,
        },
      }),
    }),
    updateUser: builder.mutation<IGetUserResponse, IUserDataUpdate>({
      query: (userData) => ({
        url: ApiEndpoints.USER,
        method: 'PATCH',
        apiGroupName: ApiGroupNames.AUTH,
        name: EndpointNames.AUTH_UPDATE_USER,
        headers: {
          Authorization: `Bearer ${TokenManager.getAccessToken()}`,
        },
        body: userData,
      }),
    }),
  })
})

export const {  useGetUserQuery, useUpdateUserMutation } = userApiSlice;
