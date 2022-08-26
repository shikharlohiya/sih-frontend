import { createSlice } from "@reduxjs/toolkit";

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    totalRevenue: 0,
    nationalityRevenue: [],
    topStates: {},
    topMonuments: {},
    topMonumentDayWise: {},
    monthlyRevenue: [],
  },
  reducers: {
    updateRevenue(state, action) {
      state.totalRevenue = action.payload;
    },
    updateNationalityRevenue(state, action) {
      state.nationalityRevenue = action.payload;
    },
    updateState(state, action) {
      state.topStates = action.payload;
    },
    updateMonument(state, action) {
      state.topMonuments = action.payload;
    },
    updateMonumentDayWise(state, action) {
      state.topMonumentDayWise = action.payload;
    },
    updateMonthlyRevenue(state, action) {
      state.monthlyRevenue = action.payload;
    },
  },
});

export const DashboardActions = DashboardSlice.actions;

export default DashboardSlice;
