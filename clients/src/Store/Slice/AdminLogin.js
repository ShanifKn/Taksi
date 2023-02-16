import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  name: null,
  token: null,
};

export const AdminLoginSlice = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.name = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = AdminLoginSlice.actions;

export default AdminLoginSlice.reducer;
