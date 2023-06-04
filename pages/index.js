import Featured from "@/componenets/Featured";
import Header from "@/componenets/Header";
import NewProducts from "@/componenets/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";


export default function HomePage({featuredProduct,newProducts}){
  //console.log(featuredProduct);
  //console.log(newProducts);

  return(
    <div>
      <Header />
      <Featured featuredProduct={featuredProduct}/>
      <NewProducts />
    </div>
    );
}

export async function getServerSideProps(){
  const featuredProductID = '6459a810b338bd3a66239fb6';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct : JSON.parse(JSON.stringify(featuredProduct)),
      newProducts : JSON.parse(JSON.stringify(newProducts)),
    },
  }
}