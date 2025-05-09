import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../api/create-api'
import ingredientsReducer from '../reducers/ingredients'
import tabsReducer from '../reducers/tabs'
import currentIngredientReducer from '../reducers/currentIngridient'
import orderReducer from '../reducers/order'
const isProduction = false;


const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  tabs: tabsReducer,
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        serviceApi: apiSlice
      }
    }
  }).concat(apiSlice.middleware),
  devTools: !isProduction,
})

setupListeners(store.dispatch)