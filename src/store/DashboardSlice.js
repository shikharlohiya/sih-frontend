import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    totalRevenue: 0,
    nationalityRevenue: [],
  },
  reducers: {
    updateRevenue(state, action) {
      state.totalRevenue = action.payload;
    },
    updateNationalityRevenue(state, action) {
      state.nationalityRevenue = action.payload;
    },
  },
});

export const DashboardActions = DashboardSlice.actions;

export default DashboardSlice;
