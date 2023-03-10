import React from "react";
import Siderbar from "../../../components/Admin/Siderbar";
import Driver from "../../../components/Admin/Driver";

const DriverPage = () => {
  return (
    <>
      <Siderbar />
      <div className="p-4 sm:ml-64 h-full">
        <Driver />
      </div>
    </>
  );
};

export default DriverPage;
