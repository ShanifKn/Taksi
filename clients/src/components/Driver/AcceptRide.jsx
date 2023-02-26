import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const AcceptRide = () => {
  return (
    <>
      <section class="text-gray-400  body-font overflow-hidden">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Bookings </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-800">
            <div class="py-8  border-b-2 border-gray-500 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-extrabold  text-lg title-font text-red-600">Booking Date</span>
                <span class="mt-1 text-white text-sm">12 Jun 2019</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-white title-font mb-2">
                  Delhi <TrendingFlatIcon /> calicut (216 km)
                </h2>
                <p class="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party
                  messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <div className="flex gap-10 mt-10">
                  <button className="btn bg-green-400 text-black">Accept</button>
                  <button className="btn bg-gray-500 text-black">Decline</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcceptRide;
