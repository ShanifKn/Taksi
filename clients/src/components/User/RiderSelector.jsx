import React, { useState, useContext, useEffect } from "react";
// import { List } from "../../api/services/UserRequest";
import uberX from "../../assets/rides/uberX.png";
import { LocationContext } from "../../Context/locationContext";

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
  const { dropoffCoordinates } = useContext(LocationContext);
  const [dropOff, setDropoff] = useState(dropoffCoordinates);
  const [carlist, setCarlist] = useState();

  // useEffect(() => {
  //   const getDriver = async () => {
  //     const cars = await List();
  //     setCarlist(cars);
  //   };
  //   getDriver();
  // }, []);

  return (
    <div className="h-full flex flex-col">
      {!dropOff ? (
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <img src={uberX} alt="Pizza" />
          </div>

          <div className="carousel-item">
            <img src={carlist.PicturePath} alt="Pizza" />
          </div>
          <div className="carousel-item">
            <img src={uberX} alt="Pizza" />
          </div>
        </div>
      ) : (
        <>
          <div className="text-gray-500 text-center text-xs py-2 border-h"></div>
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
        </>
      )}
    </div>
  );
};

export default RiderSelector;
