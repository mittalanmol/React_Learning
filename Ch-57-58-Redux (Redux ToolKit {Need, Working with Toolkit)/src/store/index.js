import { configureStore, createSlice } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import privacySlice from "./privacy";

// humne ek configure store bnaya uske andar we can pass any number of reducers

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
