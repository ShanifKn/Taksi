import React from "react";
import uberX from "../../assets/rides/uberX.png";

const carList = [
  {
    name: "FORD",
    carImage: uberX,
    price: 4500,
  },
  {
    name: "BMW",
    carImage: uberX,
    price: 9500,
  },
  {
    name: "Audi",
    carImage: uberX,
    price: 12500,
  },
];

const RiderSelector = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-gray-500 text-center text-xs py-2 border-h">
        Choose a ride , or swipe up for more
      </div>
      <div className="flex flex-col flex-1 overflow-scroll scrollbar-hide">
        {carList.map((car, index) => (
          <div className="flex p-3 m-2 items-center border-2 border-white">
            <img
              src={car.carImage}
              alt={car.name}
              height="50"
              width="50"
              className="h-14"
            />
            <div className="ml-2 flex-1">
              <div className="font-medium">{car.name}</div>
              <div className="text-xs text-green-500">5 min away</div>
            </div>
            <div className="flex items-center">
              <div className="mr-[-0.8rem]">₹ {car.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderSelector;
