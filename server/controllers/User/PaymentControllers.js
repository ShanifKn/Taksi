import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_KEY);

const paymentSucess = process.env.PAYMENT_SUCCESS;
const paymentCancel = process.env.PAYMENT_CANCEL;

export const paymentStripe = async (id) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "INR",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
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
