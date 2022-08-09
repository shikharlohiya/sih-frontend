import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "place",
  initialState: {
    placeList: [],
  },
  reducers: {
    addPlaceData(state, action) {
      state.placeList = action.payload;
    },
  },
});

export const placeActions = placeSlice.actions;

export default placeSlice;
