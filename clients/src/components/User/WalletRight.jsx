import React from "react";

const WalletRight = () => {
  return (
    <>
      <div class="sm:w-4/12 mb-10 px-4 w-full bg-gray-200 hover:bg-gray-300 rounded-lg">
        <div className="h-52 text-start mt-4 ">
          <h3 className="text-base">Wallet</h3>
          <h1 className="text-3xl mt-4 text-black font-bold">$ 00.000</h1>
          {/* <p className="text-xl mt-4 text-black font-bold">Add bank account where you what to recive payout</p> */}
          <button className="btn btn-active mt-4 mb-2 text-white rounded-3xl">Withdraw</button>
        </div>
      </div>
    </>
  );
};

export default WalletRight;
