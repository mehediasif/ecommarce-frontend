import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import { ButtonStyle } from "./Primarybtn";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ProductWrapper = styled.div`

`;
const WhiteBox = styled(Link)`
    background-color: #fefefe;
    padding: 20px;
    border-radius: 5%;
    text-align: center;
    display: flex;
    align-items: center;
    max-height: 190px;
    justify-content: center;
    img{
        padding: 10px;
        max-width: 100%;
        max-height: 120px;
        
    }
`;

const Title = styled(Link)`
    margin:0;
    font-family: 'Cinzel', serif;
    font-weight: semi-bold;
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
`;
const StyledButton = styled.button`
    ${ButtonStyle}
`;

const ProductInfoBox = styled.div`
    margin-top: 10px;
    text-align: center;
    align-items: center;
`;
const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

const Price = styled.div`
    font-family: 'Cinzel', serif;
    font-weight: semi-bold;
    font-size: 1.3rem;
`;

export default function ProductBox({_id,title,description,price,productImages}){
    const {addProduct} = useContext(CartContext);
    const Producturl = '/product/'+_id; 
    return(
        <ProductWrapper>
            <WhiteBox href={Producturl}>
                <div>
                <img src={productImages[0]} alt="images for purchase" loading="lazy" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={Producturl}>{title}</Title>
                <PriceRow>
                    <Price>${price}</Price>
                    <StyledButton onClick={() => addProduct(_id)} secondary>
                    <CartIcon />Buy Now
                    </StyledButton>
                </PriceRow>
                
            </ProductInfoBox>
            
            
        </ProductWrapper>

        );
}