import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
    if( req.method !== 'POST'){
        res.json('Should be a POST request!');
        return;
    }

    const {
        name,email,city,postalCode,
        firstAddressLine,secondAddressLine,
        country,products,
    } = req.body;

    //connecting to the Database
    await mongooseConnect();
    
    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)];

    //extracting Specific Product Information from Product Model
    const productInfos = await Product.find({_id : uniqueIds});

    //prepping for Stripe Line array
    let line_items = [];
    for (const productID of uniqueIds) {
        const productInfo = productInfos.find(p => p._id.toString() === productID);
        const quantity = productsIds.filter(id => id === productID)?.length || 0;
        if(quantity > 0 && productInfo){
            line_items.push({
                quantity,
                priceData: {
                    currency: 'USD',
                    product_data: {name : productInfo.title},
                    unit_amount: quantity * productInfo.price,
                }
            })
        }
    }
    res.json({line_items});
    
    const orderDoc = await Order.create({
        line_items,name,email,city,postalCode,
        firstAddressLine,secondAddressLine,
        country,paid:false,
    })
  }