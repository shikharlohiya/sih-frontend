import { createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
  name: "place",
  initialState: {
    placeList: [],
    nearPlaces: [],
  },
  reducers: {
    addPlaceData(state, action) {
      state.placeList = action.payload;
    },
    addNearPlaces(state, action) {
      state.nearPlaces = action.payload;
    },
  },
});

export const placeActions = placeSlice.actions;

export default placeSlice;
