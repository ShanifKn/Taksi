import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { addAmount } from "../../api/services/UserRequest";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const WalletLeft = ({ wallet }) => {
  const token = useSelector((state) => state.userLogin.token);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

  const addCash = async () => {
    const response = await addAmount(value, token);
    if (response.status === 500) return navigate("/error");
    if (response.status === 200) {
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: response.data.response });
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="sm:w-4/12 mb-10 px-4  bg-gray-200 hover:bg-gray-300 rounded-lg">
        <div className="h-auto text-start mt-4 ">
          <h3 className="text-base">Balance</h3>
          <h1 className="text-3xl mt-4 text-black font-bold">₹ {value ? value : "00.00"}</h1>
          <p className="text-xl mt-4 text-black font-bold">Add bank account where you what to recive payout</p>
          <label className="btn btn-active mt-4 mb-4 text-white" htmlFor="my-modal-3">
            <AddIcon />
            Add bank account
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-white">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Amount you like to Add</h3>
          <div className="form-control  py-4 ">
            <div className="input-group flex justify-center ">
              <input
                type="number"
                placeholder="₹"
                pattern="\d*"
                value={value}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="input input-bordered"
              />
              <button className="btn btn-square" onClick={addCash}>
                <AddIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletLeft;
