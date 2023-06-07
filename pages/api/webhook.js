import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

//importing Stripe info
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SK);
// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_ENDPOINTSECRET;
import { buffer } from "micro";

export default async function handler(req, res){
    await mongooseConnect();

    const sig = req.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
        case 'charge.succeeded':
            const chargeSucceed = event.data.object;
            console.log(chargeSucceed);
            
        case 'payment_intent.succeeded':
          const paymentIntentSucceeded = event.data.object;
          // Then define and call a function to handle the event payment_intent.succeeded
          console.log(paymentIntentSucceeded);
        
        case 'checkout.session.completed':
          const checkoutSessionCompleted = event.data.object;
          const orderID = checkoutSessionCompleted.metadata.orderID;
          const paid = checkoutSessionCompleted.payment_status === 'paid';
          
          if(orderID && paid){
            await Order.findByIdAndUpdate(orderID,{
                paid:true,
            })
          }
          break;
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
      res.status(200).send('okay');
}

//The Stripe CLI is configured for mehediasif.me with account id acct_1NFZB8IK9K0Kkp8f
export const config = {
    api:{bodyParser:false,}

};
