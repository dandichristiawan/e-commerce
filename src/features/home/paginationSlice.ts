import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface SkipState {
  skip : number
}

const initialState: SkipState = {
  skip : 0
}

const skipSlice = createSlice({
  name : 'pagination',
  initialState,
  reducers:{
    setSkip: (state, action: PayloadAction<number>) =>{
      state.skip = action.payload
    },
    resetSkip: () => initialState
  }
})

export const {setSkip, resetSkip} = skipSlice.actions
export default skipSlice.reducer