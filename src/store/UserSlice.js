import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: {},
  },
  reducers: {
    setUserProfile(state, action) {
      state.userProfile = action.payload;
      console.log(action.payload);
    },
  },
});

export const userActions = UserSlice.actions;
export default UserSlice;
