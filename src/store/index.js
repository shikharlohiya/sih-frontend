import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import cartSlice from "./CartSlice";
import DashboardSlice from "./DashboardSlice";
import placeSlice from "./PlaceSlice";
import QRSlice from "./QRSlice";
import ticketSlice from "./TicketSlice";
import UserSlice from "./UserSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    qr: QRSlice.reducer,
    place: placeSlice.reducer,
    cart: cartSlice.reducer,
    ticket: ticketSlice.reducer,
    user: UserSlice.reducer,
    dashboard: DashboardSlice.reducer,
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store)
