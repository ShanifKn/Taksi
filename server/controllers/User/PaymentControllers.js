import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_KEY);

const paymentSucess = process.env.PAYMENT_SUCCESS;
const paymentCancel = process.env.PAYMENT_CANCEL;
const paymentAdd = process.env.PAYMENT_ADD;

export const paymentStripe = async (id, trip) => {
  const pickup = trip.location.pickup;
  const drop = trip.location.dropoff;
  const distance = trip.location.distance;
  const amount = trip.payment.amount;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "INR",
          product_data: {
            name: "Pay before get a coupon",
            description: "Give your verfication code to the Driver",
            metadata: {
              pickup: pickup,
              dropoff: drop,
              distance: distance,
            },
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${paymentSucess}/${id}`,
    cancel_url: `${paymentCancel}`,
  });
  return session.id;
};

export const addMoneyStrip = async (id, amount) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "INR",
          product_data: {
            name: "Add Payment to your Wallet",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${paymentAdd}?id=${id}&amount=${amount}`
    // cancel_url: `${paymentCancel}`,
  });
  return session.id;
};
