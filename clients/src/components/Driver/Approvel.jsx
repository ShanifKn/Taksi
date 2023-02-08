import React from "react";

const Approvel = () => {
  return (
    <section className="h-screen pt-40 py-6 dark:bg-violet-400 dark:text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">
          Request for Approval
        </h1>
        <p className="pt-2 pb-8 text-xl font-medium text-center">
          Your request for approval send to admin. Check whether attached all
          relevant information and documentation are valid .
        </p>
        <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Approvel;
