const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const { items, email } = req.body;

  // console.log(items);
  console.log(email);
  const transformedItem = items.map((item) => ({
    quantity: 1,

    price_data: {
      currency: "INR",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    shipping_options: [{ shipping_rate: "shr_1M17P4SI4LdpfGmi5ybsnkx7" }],
    shipping_address_collection: {
      allowed_countries: ["IN", "AC", "DM", "AF"],
    },
    line_items: transformedItem,
    mode: "payment",
    success_url: `${process.env.HOST}`,
    cancel_url: `${process.env.HOST}`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
