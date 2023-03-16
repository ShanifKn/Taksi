import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBalance, getWallet } from "../../api/services/UserRequest";
import WalletLeft from "./WalletLeft";
import WalletRight from "./WalletRight";

const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const [trans, setTrans] = useState([]);
  const token = useSelector((state) => state.userLogin.token);

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance(token);
      if (response.status === 500) return;
      if (response.status === 200) return setWallet(response.data.balance);
    };

    const fetchWallet = async () => {
      const response = await getWallet(token);
      if (response.status === 201) return;
      if (response.status === 200) return setTrans(response.data.wallet);
      if (response.status === 500) return;
    };

    fetchBalance();
    fetchWallet();
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
          <div className="md:ml-60 w-8/12 flex-row ">
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Payment Statements</h2>

            {trans ? (
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y-2 divide-gray-200 text-sm mt-10">
                  <thead>
                    <tr>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Transaction Id</th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Method</th>
                      <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Amount</th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    {trans.map((trans, _id) => (
                      <tr key={_id}>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{trans.transactionID}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{trans.method}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">₹ {trans.cash}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div class="overflow-x-auto">
                <h1>No Transaction as be done</h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
