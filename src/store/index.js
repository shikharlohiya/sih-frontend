import { configureStore } from "@reduxjs/toolkit";
import QRSlice from "./QRSlice";

const store = configureStore({
  reducer: {
    qr: QRSlice.reducer,
  },
});
export default store;
