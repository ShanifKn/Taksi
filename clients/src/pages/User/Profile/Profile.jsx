import React from "react";
import Navbar from "../../../components/User/Navbar";
import Profile from "../../../components/User/Profile";
import ProfileButton from "../../../components/User/ProfileButton";
import Sidebar from "../../../components/User/Sidebar";

const UserProfile = () => {
  return (
    <div className="bg-white h-screen ">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="md:flex w-9/12 ml-10 md:ml-0 items-center md:justify-between ">
          <Profile />
          <ProfileButton />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
