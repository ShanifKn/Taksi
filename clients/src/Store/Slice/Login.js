import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  name: null,
  token: null,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.name = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
