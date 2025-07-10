import { IOrdersResponse, IOrdersByIdResponse } from "../types";
import { TokenManager } from "../utils/tokenManager";
import { ApiEndpoints } from "./constants/api";
import { ApiGroupNames } from "./constants/api-group-names";
import { EndpointNames } from "./constants/endpoint-names";
import { apiSlice } from "./create-api";


export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query<IOrdersResponse, void>({
            query: () => ({
                url: ApiEndpoints.ORDERS_ALL,
                method: 'GET',  
                apiGroupName: ApiGroupNames.ORDERS,
                name: EndpointNames.GET_ALL_ORDERS,
            }),
        }),
        getOrderById: builder.query<IOrdersByIdResponse, string>({
            query: (id) => ({
                url: `${ApiEndpoints.ORDERS}/${id}`,
                method: 'GET',
                apiGroupName: ApiGroupNames.ORDERS,
                name: EndpointNames.GET_BY_ID_ORDERS,
                headers: {
                    Authorization: `Bearer ${TokenManager.getAccessToken()}`,
                },
           })
        })
    }),
})

export const { useGetAllOrdersQuery, useGetOrderByIdQuery } = ordersApiSlice;
