import { createSlice } from "@reduxjs/toolkit";

interface InputState {
  text: string;
}

const initialState: InputState = {
  text: "",
};

export const inputSlice = createSlice({
  name: "input text",
  initialState,
  reducers: {
    setText(state, { payload }) {
      console.log("receive data: ", payload);
      state.text = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setText } = inputSlice.actions;
export default inputSlice.reducer;
