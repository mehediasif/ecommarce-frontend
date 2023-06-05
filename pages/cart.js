import { CartContext } from "@/componenets/CartContext";
import Center from "@/componenets/Center";
import Header from "@/componenets/Header";
import Primarybtn from "@/componenets/Primarybtn";
import Table from "@/componenets/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled, {css} from "styled-components";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 30px;
    margin: 20px 0 20px;
`;

const Box = styled.div`
    background-color: #fefefe;
    padding: 20px 20px;
    border-radius: 20px;
    box-shadow: 5px 1px 1px #fef5fF;
`;

const TitleStyle = css`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    padding: 5px;
    
    ${props => props.nobgdash && css`
        color: #0f0f0f;
        background-color: #e7e9e7;
        border: 1px dashed;
        border-radius: 10px;
    `}
`;
const Title = styled.h3`
    ${TitleStyle}
`;

const ProductInfoCell = styled.td`
    padding: 10px 0;
`;
const ProductImageBox = styled.div`
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 80px;
        max-height: 80px;
    }
`;

const QualtityNoLabel = styled.span`
    padding: 0 5px;
    font-family: 'Roboto', sans-serif;
`;

const ProductPriceCell = styled.div`
    padding: 20px 15px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
    border: 1px solid rgba(0,0,0,0.7);
    border-radius: 10px;
    box-shadow: 1px 4px 1px #0e0ffF;
`;

export default function CartPage(){
    const {cartItems,addProduct,removeProduct} = useContext(CartContext);
    const [productInfo, setProductInfo] = useState([]);
    useEffect(() => {
        if (cartItems.length > 0){
            axios.post('/api/cart', {ids:cartItems})
            .then(response =>{
                setProductInfo(response.data);
            })
        }
    }, [cartItems]);
    function moreOfthisProduct(id){
        addProduct(id);
    }
    function lessOfthisProduct(id) {
        removeProduct(id);
    }

    //Function to calculate Total Price on Shopping Cart
    let total = 0;
    for(const productID of cartItems) {
        const price = productInfo.find(p => p._id === productID)?.price || 0;
        total += price;
    }
    return(
        <>
        <Header />
        <Center>
            <ColumnsWrapper>
                <Box>
                    <Title nobgdash >Cart Information</Title>

                    {!cartItems.length && (
                        <Title>Your Cart is Empty!</Title>
                    )}

                    {productInfo?.length > 0 && (
                        <>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {productInfo.map(product => (

                                    <tr key={product._id}>
                                        <ProductInfoCell>
                                        <ProductImageBox>
                                            <img src={product.productImages[0]} alt="product image des" />
                                        </ProductImageBox>
                                        {product.title}
                                        </ProductInfoCell>
                                        <td>
                                            <Primarybtn red
                                            onClick={() => lessOfthisProduct(product._id)}
                                            >-</Primarybtn>
                                            <QualtityNoLabel>
                                            {cartItems.filter(id => id === product._id).length}
                                            
                                            </QualtityNoLabel>
                                            <Primarybtn primary
                                            onClick={() => moreOfthisProduct(product._id)}
                                            >+</Primarybtn>
                                        </td>
                                        <td>
                                        ${cartItems.filter(id => id === product._id).length * product.price}

                                        </td>
                                    </tr>
                                 ))}
                                    
                                </tbody>
                            </Table>
                                    <ProductPriceCell>
                                        <QualtityNoLabel>Sub Total:</QualtityNoLabel>
                                        <QualtityNoLabel>{productInfo.length} items</QualtityNoLabel>
                                        <QualtityNoLabel>${total}</QualtityNoLabel>
                                    </ProductPriceCell>
                                    
                                    
                        </>
                    )}
                </Box>

                {!!cartItems?.length && (
                    <Box>
                    <Title>Order Information</Title>
                    <input type={"text"} placeholder="Address Line1"></input>
                    <input type={"text"} placeholder="Address Line1"></input>
                    <Primarybtn black outline size={'l'} block>Continue to payment</Primarybtn>
                    </Box>
                )}
            </ColumnsWrapper>
        </Center>
        </>
    );
}