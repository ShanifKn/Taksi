import React from "react";
import Login from "../../../components/Driver/Login";
import Navbar from "../../../components/Driver/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-64">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
