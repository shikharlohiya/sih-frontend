import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import DashboardSlice from "./DashboardSlice";
import placeSlice from "./PlaceSlice";
import QRSlice from "./QRSlice";
import ticketSlice from "./TicketSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    qr: QRSlice.reducer,
    place: placeSlice.reducer,
    cart: cartSlice.reducer,
    ticket: ticketSlice.reducer,
    user: UserSlice.reducer,
    dashboard: DashboardSlice.reducer,
  },
});
export default store;
