import React from "react";
import Carlist from "../../../components/Admin/Carlist";
import Siderbar from "../../../components/Admin/Siderbar";

const CarlistPage = () => {
  return (
    <>
      <Siderbar />
      <div className="p-4 sm:ml-64 h-full">
        <Carlist />
      </div>
    </>
  );
};

export default CarlistPage;
