import { createSlice } from "@reduxjs/toolkit";

const QRSlice = createSlice({
  name: "qr",
  initialState: {
    isLoading: false,
  },
  reducers: {
    generate(state, action) {
      state.isLoading = true;
    },
  },
});

const qrActions = QRSlice.actions;

export default QRSlice;
