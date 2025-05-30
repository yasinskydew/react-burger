import { IOrderResponse } from "../types";
import { IOrder } from "../types";
import { TokenManager } from "../utils/tokenManager";
import { ApiEndpoints } from "./constants/api";
import { ApiGroupNames } from "./constants/api-group-names";
import { EndpointNames } from "./constants/endpoint-names";
import { apiSlice } from "./create-api";


export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation<IOrderResponse, IOrder>({
            query: (order) => ({
                url: ApiEndpoints.ORDERS,
                method: 'POST',
                apiGroupName: ApiGroupNames.ORDERS,
                name: EndpointNames.CREATE_ORDER,
                body: order,  
                headers: {
                    Authorization: `Bearer ${TokenManager.getAccessToken()}`,
                },
            }),
        }),
    }),
})

export const { useCreateOrderMutation } = orderApiSlice;
