import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBalance } from "../../api/services/UserRequest";
import WalletLeft from "./WalletLeft";
import WalletRight from "./WalletRight";

const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const token = useSelector((state) => state.userLogin.token);

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance(token);
      if (response.status === 500) return;
      if (response.status === 200) return setWallet(response.data.balance);
    };

    fetchBalance();
    //eslint-disable-next-line
  }, [wallet]);

  return (
    <>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap  justify-center md:gap-9 px-6 -mx-4 -mb-10 text-center">
            <WalletLeft />
            <WalletRight wallet={wallet} />
          </div>
          <div className="md:ml-64 flex-row ">
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Payment Banks</h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
