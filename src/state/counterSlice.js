import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 1,
};

const counterSlice = createSlice({
  // The name of our reducer
  name: 'counter',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count = state.count > 1 ? (state.count - 1) : 1;
    }
    ,
    reset: (state) => {
      state.count = 1;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;