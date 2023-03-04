import React from "react";
import Navbar from "../../../components/User/Navbar";
import Wallet from "../../../components/User/Wallet";

const WalletPage = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <Wallet />
    </div>
  );
};

export default WalletPage;
