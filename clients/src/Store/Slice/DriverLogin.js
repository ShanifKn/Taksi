import { createSlice } from "@reduxjs/toolkit";
import { set_location } from "../../api/services/DriverRequest";

const initialState = {
  user: null,
  name: null,
  token: null,
  location: null,
  coordinates: [],
  active: false,
};

export const DriverLoginSlice = createSlice({
  name: "driverLogin",
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
      state.location = null;
      state.coordinates = [];
      state.active = false;
    },
    setLocation: (state, action) => {
      state.location = action.payload.location;
      state.coordinates = [action.payload.coordinates];
      state.active = action.payload.active;
    },
    setActive: (state, action) => {
      state.active = true;
    },
    setInactive: (state, action) => {
      state.location = null;
      state.coordinates = [];
      state.active = false;
    },
    setLocationData: (state, action) => {
      set_location(state.coordinates, state.active, state.token);
    },
  },
});

export const { setLogin, setLogout, setLocation, setActive, setInactive, setLocationData } = DriverLoginSlice.actions;

export default DriverLoginSlice.reducer;
