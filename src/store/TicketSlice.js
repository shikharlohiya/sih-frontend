import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const ticketActions = ticketSlice.actions;

export default ticketSlice;
