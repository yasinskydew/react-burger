import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from '../api/create-api'
import ingredientsReducer from '../reducers/ingredients'
import tabsReducer from '../reducers/tabs'
const isProduction = false;


const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  ingredients: ingredientsReducer,
  tabs: tabsReducer
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