import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AdminLoginSlice } from "./Slice/AdminLogin";
import { DriverLoginSlice } from "./Slice/DriverLogin";
import { userLoginSlice } from "./Slice/Login";

const persistConfig = { key: "userLogin", storage, version: 1 };
const driverLoginPersistedConfig = { key: "driverLogin", storage, version: 1 };
const adminLoginPersistedConfig = { key: "adminLogin", storage, version: 1 };

const userLoginPersistedReducer = persistReducer(persistConfig, userLoginSlice.reducer);
const driverLoginPersistedReducer = persistReducer(driverLoginPersistedConfig, DriverLoginSlice.reducer);
const adminLoginPersistedReducer = persistReducer(adminLoginPersistedConfig, AdminLoginSlice.reducer);

export const store = configureStore({
  reducer: {
    userLogin: userLoginPersistedReducer,
    driverLogin: driverLoginPersistedReducer,
    adminLogin: adminLoginPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
