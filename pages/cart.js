import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled, {css} from "styled-components";
import { CartContext } from "@/componenets/CartContext";
import Center from "@/componenets/Center";
import Header from "@/componenets/Header";
import Primarybtn from "@/componenets/Primarybtn";
import Table from "@/componenets/Table";
import Input from "@/componenets/Input";


const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 30px;
    margin: 20px 0 20px;
`;
const ColumnsWrapper1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 0 20px;
`;

const Box = styled.div`
    background-color: #fefefe;
    padding: 20px 20px;
    border-radius: 20px;
    box-shadow: 5px 1px 1px #fef5fF;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
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
    ${props => props.green && css`
        color: #000;
        background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 177));
        border: 1px dashed;
        border-radius: 20px;
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

const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;


export default function CartPage(){
    const {cartItems,addProduct,removeProduct,clearCart} = useContext(CartContext);
    const [productInfo, setProductInfo] = useState([]);

    //states for the Payment
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [firstAddressLine, setFirstAddressLine] = useState('');
    const [secondAddressLine, setSecondAddressLine] = useState('');
    const [country, setCountry] = useState('');

    const [isSuccess,setIsSuccess] = useState(false);


    useEffect(() => {
        if (cartItems.length > 0){
            axios.post('/api/cart', {ids:cartItems})
            .then(response =>{
                setProductInfo(response.data);
            })
        }else{
            setProductInfo([]);
        }
    }, [cartItems]);

    useEffect(() => {
        if( typeof window === 'undefined'){
            return;
        }
        if (window?.location.href.includes('success')){
            setIsSuccess(false);
            clearCart();
        }
    }, []);

    function moreOfthisProduct(id){
        addProduct(id);
    }
    function lessOfthisProduct(id) {
        removeProduct(id);
    }
    async function goToPayment(){

        const response = await axios.post('/api/checkout', {
            name,email,city,postalCode,
            firstAddressLine,secondAddressLine,
            country,cartItems,
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    }

    //Function to calculate Total Price on Shopping Cart
    let total = 0;
    for(const productID of cartItems) {
        const price = productInfo.find(p => p._id === productID)?.price || 0;
        total = total + price;
    }


    if (isSuccess) {
        return(
            <>
                <Header />
                <Center>
                    <ColumnsWrapper1>
                    <Box>
                        <Title>Thanks For your Purchase</Title>
                        <Title green>We will sent the confirmation by email</Title>
                    </Box>

                    <Box>
                        
                        <p>Subscribe to our newsletter for exciting offers</p>
                        <Input type={"email"} placeholder="Send me discounts"/>
                        <Primarybtn primary>Send</Primarybtn>
                    </Box>
                    { //This feedback box needs word in future 
                    }
                    <Box>
                        <Title>How was the experience?</Title>
                        <label for="Feedback">How can WE Improve?</label>
                        <Input type={"text"} placeholder="Suggestions"/>
                    </Box>
                        
                    </ColumnsWrapper1>
                    
                </Center>
            </>
        );}


    return(
        <>
        <Header />
        <Center>
            <ColumnsWrapper>
                <Box>
                    <Title nobgdash >Cart Information</Title>

                    {!cartItems.length && (
                        <Box>
                        <Title>Your Cart is Empty!</Title>
                        <Title green>We will sent the confirmation by email</Title>
                        </Box>
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
                            <Input 
                            type={"text"} 
                            placeholder="Name"
                            name="name" 
                            value={name}
                            onChange={ev => setName(ev.target.value)} 
                            />

                            <Input 
                            type={"text"} 
                            placeholder="Email" 
                            name="email"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)} 
                            />

                            <CityHolder>
                                <Input 
                                type={"text"} 
                                placeholder="City" 
                                name="city"
                                value={city}
                                onChange={ev => setCity(ev.target.value)} 
                                />
                                <Input 
                                type={"text"} 
                                placeholder="Postal Code" 
                                name="postalCode"
                                value={postalCode}
                                onChange={ev => setpostalCode(ev.target.value)} 
                                />
                            </CityHolder>

                            <Input 
                            type={"text"} 
                            placeholder="Street Address Line1" 
                            name="firstAddressLine" 
                            value={firstAddressLine}
                            onChange={ev => setFirstAddressLine(ev.target.value)} 
                            />

                            <Input 
                            type={"text"} 
                            placeholder="Street Address Line2" 
                            name="secondAddressLine"
                            value={secondAddressLine}
                            onChange={ev => setSecondAddressLine(ev.target.value)} 
                            />

                            <Input 
                            type={"text"} 
                            placeholder="Country" 
                            name="country"
                            value={country}
                            onChange={ev => setCountry(ev.target.value)} 
                            />
                            <Primarybtn black outline size={'l'} block onClick={goToPayment} >Continue to payment</Primarybtn>
                    </Box>
                )}
            </ColumnsWrapper>
        </Center>
        </>
    );
}