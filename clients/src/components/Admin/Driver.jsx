import React from "react";
import Approval from "./Approval";
import DriverList from "./DriverList";

const Driver = () => {
  return (
    <div className="md:flex justify-between gap-2   ">
      <DriverList />
      <div class="md:w-2/5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <h3 className="text-2xl mb-6 md:mt-0 mt-10  dark:text-white">
          Pending Approval
        </h3>
        <Approval />
      </div>
    </div>
  );
};

export default Driver;
