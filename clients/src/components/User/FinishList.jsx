import React from "react";

const FinishList = ({ trip }) => {
  return (
    <>
      {trip.length !== 0 && (
        <section class="text-gray-600 body-font bg-white">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-col w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Trip History</h1>
            </div>
            <div class="flex flex-wrap -m-2">
              <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                    <p class="text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FinishList;
