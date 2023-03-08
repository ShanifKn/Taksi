import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <div>
      <form>
        <PaymentElement />
        <button>Confirm Payment</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
