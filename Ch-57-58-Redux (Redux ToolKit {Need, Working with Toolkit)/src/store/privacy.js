import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state); // ek expression ko by default return statement mann lete hai but here it is not expression so return used
    },
  },
});

// har slice ka action hoga and we are passing them

export const privacyActions = privacySlice.actions;

export default privacySlice;
