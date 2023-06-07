import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

//importing Stripe info
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SK);

export default async function handler(req, res) {
    
    
    if( req.method !== 'POST'){
        res.json('Should be a POST request!');
        return;
    }

    //connecting to the Database
    await mongooseConnect();

    const {
        name,email,city,postalCode,
        firstAddressLine,secondAddressLine,
        country,cartItems,
    } = req.body;

    
    
    const productsIds = cartItems;
    const uniqueIds = [...new Set(productsIds)];

    //extracting Specific Product Information from Product Model
    const productInfos = await Product.find({_id : uniqueIds});

    //prepping for Stripe Line array
    let line_items = [];
    for (const productID of uniqueIds) {
        const productInfo = productInfos.find(p => p._id.toString() === productID.toString());
        const quantity = productsIds.filter(id => id === productID)?.length || 0;
        if(quantity > 0 && productInfo){
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: {name : productInfo.title},
                    unit_amount: quantity * productInfo.price * 100,
                }
            })
        }
    }
    //res.json({line_items});

    const orderDoc = await Order.create({
        line_items,name,email,city,postalCode,
        firstAddressLine,secondAddressLine,
        country,paid:false,
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.NEXT_PUBLIC_PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.NEXT_PUBLIC_PUBLIC_URL + '/cart?cancel=1',
        metadata: {orderID: orderDoc._id.toString()},
    });

    res.json({
        url:session.url,
    })
  }