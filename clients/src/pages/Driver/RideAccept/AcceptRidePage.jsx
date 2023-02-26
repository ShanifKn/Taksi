import React from "react";
import AcceptRide from "../../../components/Driver/AcceptRide";
import MainNavbar from "../../../components/Driver/MainNavbar";
import TopNav from "../../../components/Driver/TopNav";

const AcceptRidePage = () => {
  return (
    <>
      <TopNav />
      <MainNavbar />
      <div className="p-10 mt-16 sm:ml-64 h-full">
        <AcceptRide />
      </div>
    </>
  );
};

export default AcceptRidePage;
