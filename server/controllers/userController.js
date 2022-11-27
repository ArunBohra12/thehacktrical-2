import Stripe from 'stripe';
const stripe = new Stripe(config.env.STRIPE_SECRET_KEY);

import User from '../models/userModel.js';
import catchAsync from './catchAsync.js';

const CLIENT_BASE_URL = 'http://localhost:3000';
const CREDITS_COST = 50;

export const getBuyCreditsCheckoutSession = catchAsync(async (req, res, next) => {
  const { credits } = req.body;
  const user = await User.findById(req.params.userId);

  // cereate checkout session
  // 1 credit costs 50inr
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${CLIENT_BASE_URL}/credits?booking=success`,
    cancel_url: `${CLIENT_BASE_URL}/credits`,
    customer_email: req.user.email,
    client_reference_id: req.params.userId,
    line_items: [
      {
        price_data: {
          currency: 'inr',
          unit_amount: credits * CREDITS_COST, // calculate total cost
          product_data: {
            name: 'Credits',
            description: 'Buy credits for theatrify',
            // will change this image later
            images: ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'],
          },
        },
        quantity: credits,
      },
    ],
    mode: 'payment',
  });

  // send it to the client
  res.status(200).json({
    status: 'success',
    sessionUrl: session.url,
  });
});

const updateUserWithCredits = catchAsync(async session => {
  const user = await User.findById(session.client_reference_id);
  console.log(session);
  // const newCredits = user.credits + session
  // const user = await User.findByIdAndUpdate(session.client_reference_id, { $add });
});

export const webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_CHECKOUT_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') updateUserWithCredits(event.data.object);

  res.status(200).json({ received: true });
};
