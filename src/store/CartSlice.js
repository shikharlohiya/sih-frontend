import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    paynowLoading: false,
    cartItems: [],
    price: 0,
    formData: {
      userType: "",
      gender: "",
      name: "",
      age: "",
      nationality: "",
      idType: "",
      idNumber: "",
      userId: JSON.parse(localStorage.getItem("jwt"))?.user._id,
    },
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPaynowLoading(state, action) {
      state.paynowLoading = action.payload;
    },
    setFormData(state, action) {
      const value = {
        [action.payload.name]: action.payload.value,
      };
      state.formData = { ...state.formData, ...value };
    },
    clearFormData(state, action) {
      state.formData = {
        userType: "",
        gender: "",
        name: "",
        age: "",
        nationality: "",
        idType: "",
        idNumber: "",
        userId: JSON.parse(localStorage.getItem("jwt")).user._id,
      };
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
      state.price = 0;
      state.cartItems.map((item) => {
        item.ticketedUsers.map((user) => {
          if (user.nationality.toLowerCase() !== "indian")
            state.price += Number(item.fprice);
          else if (user.userType.toLowerCase() === "adult")
            state.price += Number(item.price);
          else state.price += Number(item.cprice);
        });
        console.log(item.price);
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
