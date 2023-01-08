import { createSlice } from "@reduxjs/toolkit";

interface CountState{
  val: number
}

const initialState: CountState = {
  val: 0
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state){
      state.val += 1;
    },
    decrement(state){
      if(state.val < 0){
        state.val = 0
      }else{
        state.val -= 1;
      }
    },
    setValue(state, {payload}){
      state.val = payload
    }
  },
  extraReducers: (builder) => {}
});

export const { increment, decrement,setValue } = countSlice.actions;
export default countSlice.reducer;