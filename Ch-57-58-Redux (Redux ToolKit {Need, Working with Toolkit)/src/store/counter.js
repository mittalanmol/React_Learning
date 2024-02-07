import { createSlice } from "@reduxjs/toolkit";

// we will create different number of slices and each slice ki apni fucntionality hogi

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 }, // yha direct 0 bhi de skte hai humne as a object di hai value
  reducers: {
    increment: (state) => {
      // yha action ki zrurat nhi thi
      state.counterVal++;
    },

    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num); // here our arguent was an num object so .num
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

// har slice ka action hoga and we are passing them
export const counterActions = counterSlice.actions;

// here export kr rhe hai counterSlice ko bhi kyuki phle to counterS se hi ho rha tha export
export default counterSlice;
