import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: {
      isLoggedIn: localStorage.getItem("jwt"),
    },
  },
  reducers: {
    setUserProfile(state, action) {
      state.userProfile = action.payload;
      console.log(action.payload);
    },
    updateUserStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const userActions = UserSlice.actions;
export default UserSlice;
