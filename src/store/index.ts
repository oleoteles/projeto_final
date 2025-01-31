import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'
import checkReducer from './reducers/check'
import payReducer from './reducers/pay'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    check: checkReducer,
    pay: payReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
