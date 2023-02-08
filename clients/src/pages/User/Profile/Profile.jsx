import React from "react";
import Navbar from "../../../components/User/Navbar";
import Profile from "../../../components/User/Profile";
import SiderBar from "../../../components/User/SiderBar";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <SiderBar />
      <Profile />
    </div>
  );
};

export default UserProfile;
