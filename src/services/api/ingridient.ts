import { IIngredient } from '../types'
import { ApiEndpoints } from './constants/api'
import { ApiGroupNames } from './constants/api-group-names'
import { EndpointNames } from './constants/endpoint-names'
import { apiSlice } from './create-api'



export const inigridientApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      getIngridients: builder.query<{data: IIngredient[], success: boolean}, void>({
        query: () => ({
          url: ApiEndpoints.INGRIDIENTS,
          method: 'GET',
          apiGroupName: ApiGroupNames.INGRIDIENTS,
          name: EndpointNames.GET_INGRIDIENTS,
        }),
      }),
    }
  },
})

export const { useGetIngridientsQuery } = inigridientApiSlice