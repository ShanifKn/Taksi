import React from "react";
import MainNavbar from "../../../components/Driver/MainNavbar";
import PendingBookings from "../../../components/Driver/PendingBookings";
import TopNav from "../../../components/Driver/TopNav";

const PendingBookingPage = () => {
  return (
    <>
      <TopNav />
      <MainNavbar />
      <PendingBookings />
    </>
  );
};

export default PendingBookingPage;
