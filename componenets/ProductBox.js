import styled from "styled-components";
import CartIcon from "./icons/CartIcon";
import { ButtonStyle } from "./Primarybtn";

const ProductWrapper = styled.div`

`;
const WhiteBox = styled.div`
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

const Title = styled.h2`
    margin:0;
    font-family: 'Cinzel', serif;
    font-weight: normal;
    font-size: 1rem;
    text-align: center;
`;
const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function ProductBox({_id,title,description,price,productImages}){
    return(
        <ProductWrapper>
        <WhiteBox>
        <div>
        <img src={productImages[0]} alt="" />
        </div>
        
        {price}
        </WhiteBox>
        <Title>{title}</Title>
        <StyledButton primary>
        <CartIcon />
        </StyledButton>
        </ProductWrapper>

        );
}