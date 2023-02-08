import React from "react";
import Login from "../../../components/Driver/Login";
import Navbar from "../../../components/Driver/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-evenly items-center h-screen">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
