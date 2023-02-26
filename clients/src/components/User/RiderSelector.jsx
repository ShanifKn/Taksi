import React, { useState, useContext, useEffect } from "react";
import { getCarList } from "../../api/services/UserRequest";
import { LocationContext } from "../../Context/locationContext";
import { getDirection, getLocationName } from "../../api/getLocationCoordinates";
import { selectTripContext } from "../../Context/SelectTrip";

const RiderSelector = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(LocationContext);
  const { driver, selectDriver, setTripDetails } = useContext(selectTripContext);
  const [carlist, setCarlist] = useState([]);
  const [dropOff, setDropoff] = useState();
  const [distance, setDistance] = useState();

  const handleClick = async (car) => {
    const response = await getLocationName(pickupCoordinates[0], pickupCoordinates[1]);
    const response2 = await getLocationName(dropoffCoordinates[0], dropoffCoordinates[1]);
    selectDriver(car);
    setTripDetails({
      pickup: response,
      dropOff: response2,
      driver: driver,
      distance: distance,
    });
  };

  useEffect(() => {
    setDropoff(dropoffCoordinates);
    const carList = async () => {
      const response = await getCarList();
      setCarlist(response);
    };
    carList();
    const tripDetails = async () => {
      const response = await getDirection(pickupCoordinates, dropoffCoordinates);
      const data = response.data.routes[0].distance;
      let distance = Math.floor(data / 1000);
      setDistance(distance);
    };

    tripDetails();
  }, [distance, dropoffCoordinates, pickupCoordinates]);

  return (
    <div className="h-full flex flex-col ">
      {!dropOff && carlist ? (
        <div className="flex justify-center md:mt-48">
          <div className="flex items-center justify-center space-x-2 ">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-gray-500 text-center text-xs py-2 "></div>
          <div className="flex flex-col flex-1 overflow-scroll scrollbar-hide">
            {carlist.map((car, index) => (
              <div
                className={`flex p-3 m-2 items-center border-2 border-white hover:bg-slate-200 cursor-pointer ${
                  driver === car._id ? "bg-slate-200" : ""
                }`}
                onClick={() => handleClick(car._id)}
                key={index}>
                <img src={car.PicturePath} alt={car.email} height="50" width="50" className="h-14" />
                <div className="ml-2 flex-1">
                  <div className="font-bold">{`${car.firstName}  ${car.lastName}`}</div>
                  <div className="text-xs text-black font-medium">{car.vehicleModel}</div>

                  <div className="text-xs text-black">{car.vehicleNo}</div>

                  <div className="text-xs text-green-500">{distance} km</div>
                </div>
                <div className="flex items-center">
                  <div className="mr-[-0.8rem]">₹ {car.Rate * distance}</div>
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
