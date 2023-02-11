import React from "react";
import LocationSelector from "../../../components/User/LocationSelector";
import Navbar from "../../../components/User/Navbar";
import Confirm from "../../../components/User/Confirm";
// import Map from "../../../components/User/Map";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col text-black">
      <Navbar />
      <div className="h-full w-screen flex-1 z-10">
        {/* <Map /> */}
      </div>
      <div className="md:h-full h-80 md:w-[450px] md:ml-[9rem] md:py-[9rem] absolute inset-x-0 bottom-0 md:left-0 md:top-0 flex flex-col justify-end z-20">
        <div className="h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll  scrollbar-hide">
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
};

export default Home;
