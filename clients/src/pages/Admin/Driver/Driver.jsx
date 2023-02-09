import React from "react";
import Siderbar from "../../../components/Admin/Siderbar";
import Driver from "../../../components/Admin/Driver";

const DriverPage = () => {
  return (
    <>
      <Siderbar />
      <div className="p-4 sm:ml-64 h-full">
        <h2 className="text-5xl mb-10 font-extrabold text-red-900">DRIVER</h2>
        <Driver />
      </div>
    </>
  );
};

export default DriverPage;
