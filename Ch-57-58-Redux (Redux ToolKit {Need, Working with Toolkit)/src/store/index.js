import { configureStore, createSlice } from "@reduxjs/toolkit";

// we will create different number of slices and each slice ki apni fucntionalitty hogi

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

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state); // ek expression ko by default return statement mann lete hai but here it is not expression so return used
    },
  },
});

// humne ek configure store bnaya uske andar we can pass any number of reducers

const counterScore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

// har slice ka action hoga and we are passing them

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterScore;
