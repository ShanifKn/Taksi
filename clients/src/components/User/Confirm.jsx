/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import RiderSelector from "../User/RiderSelector";
import Datepicker from "tailwind-datepicker-react";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import EditLocationIcon from "@mui/icons-material/EditLocation";
// import PaymentIcon from "@mui/icons-material/Payment";
// import DatePick from "./DatePick";
const options = {
  title: "Select Date",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2023-04-01"),
  minDate: new Date("2023-02-01"),
  theme: {
    background: "bg-white ",
    // todayBtn: "bg-green-500",
    // clearBtn: "",
    // icons: "",
    // text: "",
    // input: "",
    // inputIcon: "",
    selected: "bg-red-500",
  },
  icons: {
    // () => ReactNode | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-25 ",
  language: "en",
};

const Confirm = () => {
  const [show, setShow] = useState(false);

  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };

  const handleClose = (state) => {
    setShow(state);
  };
  return (
    <>
      <div className="flex-1 h-full flex flex-col justify-between ">
        <div className="h-full flex flex-col overflow-scroll scrollbar-hide">
          <RiderSelector />
        </div>
        <div className="border-t-2 cursor-pointer z-10 relative">
          <div className="bg-black text-white m-4 py-4 text-center text-xl">
            <label
              htmlFor="my-modal-3"
              className="btn bg-black border-none hover:bg-black">
              Comfirm
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle " />
      <div className="modal  ">
        <div className="modal-box relative h-full bg-black text-white mt-16">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-2xl capitalize font-bold text-center mt-2 mb-10">
            Book your ride.
          </h3>
          <div className="flex-row justify-start">
            <div className="flex justify-evenly items-center w-3/5">
              <h3 className="mr-10 text-xl ">Date:</h3>
              <Datepicker
                options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose}
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="0.01"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="0.01"
                  className="input input-bordered"
                />
              </label>
            </div>{" "}
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="0.01"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div class="relative block overflow-hidden rounded-lg  mt-10 border border-gray-100 p-8">
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div class="justify-between sm:flex">
                <div>
                  <h3 class="text-xl font-bold text-gray-900">
                    Building a SaaS product as a software developer
                  </h3>

                  <p class="mt-1 text-xs font-medium text-gray-600">
                    By John Doe
                  </p>
                </div>

                <div class="ml-3 hidden flex-shrink-0 sm:block">
                  <img
                    alt="Paul Clapton"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    class="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div class="mt-4 sm:pr-8">
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  velit illum provident a, ipsa maiores deleniti consectetur
                  nobis et eaque.
                </p>
              </div>

              <dl class="mt-6 flex">
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Published</dt>
                  <dd class="text-xs text-gray-500">31st June, 2021</dd>
                </div>

                <div class="ml-3 flex flex-col-reverse sm:ml-6">
                  <dt class="text-sm font-medium text-gray-600">
                    Reading time
                  </dt>
                  <dd class="text-xs text-gray-500">3 minute</dd>
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
