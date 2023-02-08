import React from "react";
import RiderSelector from "../User/RiderSelector";

const Confirm = () => {
  return (
    <div className="flex-1 h-full flex flex-col justify-between">
      <div className="h-full flex flex-col overflow-scroll scrollbar-hide">
        <RiderSelector />
      </div>
      <div className="border-t-2 cursor-pointer z-10">
        <div className="bg-black text-white m-4 py-4 text-center text-xl">
          Confirm ride
        </div>
      </div>
    </div>
  );
};

export default Confirm;
