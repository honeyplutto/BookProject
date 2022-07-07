import { configureStore } from "@reduxjs/toolkit"
import authReducer from './auth/authSlice'
import bookReducer from './book/bookSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer
  },
})