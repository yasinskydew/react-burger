import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../api/create-api'
import ingredientsReducer from '../reducers/ingredients'
import tabsReducer from '../reducers/tabs'
import currentIngredientReducer from '../reducers/currentIngridient'
import orderReducer from '../reducers/order'
import userReducer from '../reducers/user'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  tabs: tabsReducer,
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  userSliceReducer: userReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)