import React from "react";
import WalletLeft from "./WalletLeft";
import WalletRight from "./WalletRight";

const Wallet = () => {
  return (
    <>
      <section class="text-gray-600 bg-white body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap  justify-center md:gap-9 px-6 -mx-4 -mb-10 text-center">
            <WalletLeft />
            <WalletRight />
          </div>
          <div className="md:ml-64 flex-row ">
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Payment Banks</h2>
            <p class="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
            </p>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
