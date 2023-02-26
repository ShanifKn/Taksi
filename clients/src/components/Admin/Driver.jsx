import React from "react";
import Approval from "./Approval";
import DriverList from "./DriverList";
import Onlinelist from "./Onlinelist";

const Driver = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container  py-10 mx-auto">
        <div className="flex flex-wrap w-full ">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Driver List</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex-row justify-between mt-5 ">
          <div className="w-full flex justify-between  ">
            <div className=" w-3/5">
              <h3 className="text-2xl mb-6 md:mt-0 mt-10  dark:text-white">Pending Approval</h3>
              <Approval />
            </div>
            <div className="w-96">
              <Onlinelist />
            </div>
          </div>
        </div>
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg md:mr-10">
          <DriverList />
        </div>
      </div>
    </section>
  );
};

export default Driver;
