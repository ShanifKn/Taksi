import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_KEY);

const YOUR_DOMAIN = "http://localhost:3001/user/webhook";

export const paymentStripe = async () => {
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
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  console.log(session);
  return session.id;
};
