import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/features/cart/cartSlice'
import skipReducer from '@/features/home/paginationSlice'

const store = configureStore({
  reducer: {
    cart : cartReducer,
    pagination : skipReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store