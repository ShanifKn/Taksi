import React from "react";
import MainNavbar from "../../../components/Driver/MainNavbar";
import TopNav from "../../../components/Driver/TopNav";
import UpcomingTrips from "../../../components/Driver/UpcomingTrips";

const UpcomingtripPage = () => {
  return (
    <>
      <TopNav />
      <MainNavbar />
      <div className="p-10 mt-16 sm:ml-64 h-full">
        <UpcomingTrips />
      </div>
    </>
  );
};

export default UpcomingtripPage;
