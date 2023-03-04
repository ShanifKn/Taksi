import React from "react";

const UpcomingTrips = () => {
  return (
    <>
      <section class="text-white body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-start w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Upcomming Trips</h1>
            <div className="h-1 w-44 bg-indigo-500 rounded"></div>
          </div>
          <div class="flex flex-wrap -m-4 justify-center md:justify-start">
            <div class=" lg:w-1/2 mb-6">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-200">locatioin</h2>
                  <h3 class="text-gray-400 mb-3">User name</h3>
                  <div className="md:inline-flex gap-2">
                    <p class="mb-4">DIate:</p>
                    <p class="mb-4">time:</p>
                  </div>
                  <div className="flex gap-2">
                    <p class="mb-4">Distance:</p>
                    <p class="mb-4">Amount:</p>
                  </div>
                  <h3 class="text-black  font-semiBold  text-xl b-3">verfication Code:</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingTrips;
