import React, { useState, useContext, useEffect } from "react";
import { getCarList } from "../../api/services/UserRequest";
// import { List } from "../../api/services/UserRequest";
import uberX from "../../assets/rides/uberX.png";
import { LocationContext } from "../../Context/locationContext";
import { getDirection } from "../../api/getLocationCoordinates";

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
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);
  const [carlist, setCarlist] = useState();
  const [dropOff, setDropoff] = useState();
  const [distance, setDistance] = useState();
  const [duration, setDuration] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    setDropoff(dropoffCoordinates);
    const carList = async () => {
      const response = await getCarList();
      setCarlist(response);
    };
    carList();

    const tripDetails = async () => {
      const response = await getDirection(
        pickupCoordinates,
        dropoffCoordinates
      );
      console.log(response);

      const data = response.data.waypoints[0].distance;
      let distance = Math.floor(data);
      setDistance(distance);
      let price = distance * 15;
      setPrice(price);
    };

    tripDetails();
  }, [dropoffCoordinates, pickupCoordinates]);

  return (
    <div className="h-full flex flex-col">
      {!dropOff ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      ) : (
        <>
          <div className="text-gray-500 text-center text-xs py-2 border-h"></div>
          <div className="flex flex-col flex-1 overflow-scroll scrollbar-hide">
            {carlist.map((car, index) => (
              <div className="flex p-3 m-2 items-center border-2 border-white">
                <img
                  src={car.PicturePath}
                  alt={car.email}
                  height="50"
                  width="50"
                  className="h-14"
                />
                <div className="ml-2 flex-1">
                  <div className="font-medium">{`${car.firstName}  ${car.lastName}`}</div>


                  <div></div>
                  <div className="text-xs text-black">{car.vehicleNo}</div>

                  <div className="text-xs text-green-500">{distance} km</div>

                  <div className="text-xs text-red-500">5 min away</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-[-0.8rem]">₹ {price}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RiderSelector;
