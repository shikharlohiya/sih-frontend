import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartItems: [],
    price: 0,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
      state.price = 0;
      state.cartItems.map((item) => {
        state.price += Number(item.price);
        console.log(item.price);
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
