import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import placeSlice from "./PlaceSlice";
import QRSlice from "./QRSlice";

const store = configureStore({
  reducer: {
    qr: QRSlice.reducer,
    place: placeSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
