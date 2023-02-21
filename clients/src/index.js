import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LocationProvider } from "./Context/locationContext";
import { NavbarProvider } from "./Context/NavbarContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Store/Store";
import { TripProvider } from "./Context/SelectTrip";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocationProvider>
          <NavbarProvider>
            <TripProvider>
              <App />
            </TripProvider>
          </NavbarProvider>
        </LocationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
