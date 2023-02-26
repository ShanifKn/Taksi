import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCar } from "../../Helpers/driver";

const Carlist = () => {
  const token = useSelector((state) => state.adminLogin.token);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCar(token).then((car) => {
      setCars(car.data.Driver);
    });
  }, [token, cars]);

  // const blockCar = (id, token) => {};

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">List of Cars Available </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          {cars.length > 0 ? (
            <div className="flex flex-wrap -m-4">
              {cars.map((car, index) => (
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div key={index} className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={car.PicturePath} alt={car.vehicleModel} />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{car.vehicleNo}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{car.vehicleModel}</h2>
                    <h3 className="leading-relaxed text-base">
                      Owner:
                      <span className="ml-2 font-medium text-gray-900">{`${car.firstName} ${car.lastName}`}</span>
                    </h3>
                    <p className="leading-relaxed text-base">
                      DL:
                      <span className="ml-2 font-medium text-gray-900">{car.DLRNO}</span>
                    </p>
                    <p className="leading-relaxed text-base">
                      ADDRESS:
                      <span className="ml-2 font-medium text-gray-900">{car.city}</span>,
                      <span className="ml-2 font-medium text-gray-900">{car.state}</span>
                    </p>
                    <p className="leading-relaxed text-base">
                      CONTACT:
                      <span className="ml-2 font-medium text-gray-900">{car.phone}</span>
                    </p>
                    {car.Approval ? (
                      <div className="flex justify-center mt-4 ">
                        <button className="btn bg-green-500 border-none text-black hover:bg-red-500">Block</button>
                      </div>
                    ) : (
                      <div className="flex justify-center mt-4 ">
                        <button className="btn bg-red-500 border-none text-black hover:bg-green-500">Blocked</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">No Vehicle </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">No Driver As Register</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Carlist;
