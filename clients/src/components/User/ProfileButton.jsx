import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <div className="leading-10">
      <h1 className="text-2xl text-black font-semibold"> Get a ride in minutes</h1>
      <p className="text-black">Plan a trip,But book a taxi as before your plan a trip.</p>
      <Link to="/" className="btn">
        Request a Booking
      </Link>
    </div>
  );
};

export default ProfileButton;
