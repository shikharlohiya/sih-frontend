import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartItems: [],
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
