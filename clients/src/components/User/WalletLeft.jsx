import React from "react";
import AddIcon from "@mui/icons-material/Add";

const WalletLeft = () => {
  return (
    <>
      <div className="sm:w-4/12 mb-10 px-4  bg-gray-200 hover:bg-gray-300 rounded-lg">
        <div className="h-auto text-start mt-4 ">
          <h3 className="text-base">Balance</h3>
          <h1 className="text-3xl mt-4 text-black font-bold">$ 00.000</h1>
          <p className="text-xl mt-4 text-black font-bold">Add bank account where you what to recive payout</p>
          <button className="btn btn-active mt-4 mb-4 text-white">
            <AddIcon />
            Add bank account
          </button>
        </div>
      </div>
    </>
  );
};

export default WalletLeft;
