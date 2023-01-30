import React from "react";
import Driver from "../assets/Driver.jpg";

const Sigin = () => {
  return (
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="firstName">
                    First Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="lastName">
                    Last Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password">
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  {/* <p class="text-xs italic text-red-500">
                    Please choose a password.
                  </p> */}
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="c_password">
                    Confirm Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button">
                  Register Account
                </button>
              </div>
              <hr class="mb-6 border-t" />

              <div class="text-center">
                <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"></p>
                Already have an account? Login!
              </div>
            </form>
          </div>
          <div class="w-full h-auto bg-gray-400 hidden  lg:block lg:w-5/12 bg-cover rounded-l-lg relative">
            <img src={Driver} alt="" className="brightness-50" />
            <h1 className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
              “Certified stunt drivers earn a living, unlawful dangerous driving
              will earn you tragedy.” –Wayne Chirisa
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigin;
