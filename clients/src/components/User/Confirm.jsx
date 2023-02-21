/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import RiderSelector from "../User/RiderSelector";
import Datepicker from "tailwind-datepicker-react";
import { selectTripContext } from "../../Context/SelectTrip";
import { handleBookTrip, handleChange, options } from "../../Helpers/user";
import { useSelector } from "react-redux";

const Confirm = () => {
  const token = useSelector((state) => state.userLogin.token);
  const { tripDetails } = useContext(selectTripContext);
  const [show, setShow] = useState(false);
  console.log(token);

  const handleDatePicker = (state) => {
    setShow(state);
  };

  return (
    <>
      <div className="flex-1 h-full flex flex-col justify-between ">
        <div className="h-full flex flex-col overflow-scroll scrollbar-hide">
          <RiderSelector />
        </div>
        {tripDetails.driver ? (
          <div className="border-t-2 cursor-pointer z-10 relative">
            <div className="bg-black text-white m-4  text-center text-xl" onClick={handleBookTrip(tripDetails)}>
              <label htmlFor="my-modal-3" className="btn bg-black border-none text-white hover:bg-black">
                Comfirm
              </label>
            </div>
          </div>
        ) : (
          <div className="border-t-2 cursor-pointer z-10 relative">
            <div className="bg-black text-white m-4 py-4 text-center text-xl">Please select your locations</div>
          </div>
        )}
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle " />
      <div className="modal  ">
        <div className="modal-box relative h-full bg-black text-white mt-16">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-2xl capitalize font-bold text-center mt-2 mb-10">Book your ride.</h3>
          <div className="flex-row justify-start">
            <div className="flex justify-evenly items-center w-3/5">
              <h3 className="mr-10 text-xl ">Date:</h3>
              <Datepicker options={options} onChange={handleChange} show={show} setShow={handleDatePicker} />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="0.01" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="0.01" className="input input-bordered" />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="0.01" className="input input-bordered" />
              </label>
            </div>
            <div className="relative block overflow-hidden rounded-lg  mt-10 border border-gray-100 p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Drive name</h3>

                  <p className="mt-1 text-xs font-medium text-gray-600">Car Name</p>
                </div>

                <div className="ml-3 hidden flex-shrink-0 sm:block">
                  <img
                    alt="Paul Clapton"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et
                  eaque.
                </p>
              </div>

              <dl className="mt-6 flex">
                <div className="flex flex-col-reverse">
                  <dt className="text-sm font-medium text-gray-600">Published</dt>
                  <dd className="text-xs text-gray-500">31st June, 2021</dd>
                </div>

                <div className="ml-3 flex flex-col-reverse sm:ml-6">
                  <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                  <dd className="text-xs text-gray-500">3 minute</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="btn btn-outline btn-accent">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
