import React from "react";
import LocationSelector from "../scenes/Map/LocationSelector";
import Map from "../scenes/Map/Map";
import Navbar from "../scenes/navBar";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="main">
        <Map />
      </div>
      <div className="rideContainer">
        <div className="rideRequest">
          <LocationSelector />
        </div>
      </div>
    </div>
  );
};

export default Home;
