import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../api/create-api'
import ingredientsReducer from '../reducers/ingredients'
import tabsReducer from '../reducers/tabs'
import orderReducer from '../reducers/order'
import userReducer from '../reducers/user'
import ordersReducer from '../reducers/orders'
import { wsMiddleware } from '../middleware/middleware'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  tabs: tabsReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  userSliceReducer: userReducer,
  orders: ordersReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(wsMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']