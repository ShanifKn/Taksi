import React, { useContext, useState } from "react";
import { LocationContext } from "../Context/locationContext";

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("from");
  const { pickup, setPickup, dropoff, setDropoff } = useContext(LocationContext);

  return (
    <div className="pt-2">
      <div className="w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden  ">
        {inFocus === "from" ? "Where can we pick you up ?" : "Where to ?"}
      </div>
      <div className="flex flex-col md:mb-4 relative">
        <div
          className={`h-10 mx-4 border-2 bg-#eeeeee flex items-center my-1 py-1 px-2 ${
            inFocus === "from" && "border-black"
          }`}>
          <div className="mx-1">
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            className="my-2 rounded-2 p-22 outline-none border-none bg-transparent h-full w-full"
            placeholder="Enter pickup loaction"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setInFocus("from")}
          />
        </div>
        <div className="w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]" />
        <div
          className={`h-10 mx-4 border-2 bg-#eeeeee flex items-center my-1 py-1 px-2 ${
            inFocus === "to" && "border-black"
          }`}>
          <div className="mx-1">
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            className="my-2 rounded-2 p-22 outline-none border-none bg-transparent h-full w-full"
            placeholder="Enter pickup loaction"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onFocus={() => setInFocus("to")}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
