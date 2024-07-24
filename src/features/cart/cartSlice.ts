import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id : number,
  quantity: number
}

export interface CartState {
  items : CartItem[]
}

const initialState: CartState = {
  items : []
}

const cartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers: {
    addToCart : (state, action: PayloadAction<CartItem>) => {
      // state.items.push(action.payload)
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.items[itemIndex] = action.payload;
      } else {
        state.items.push(action.payload);
      }
    },
    resetCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, resetCart } = cartSlice.actions
export default cartSlice.reducer