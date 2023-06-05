import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import Primarybtn from "./Primarybtn";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #f4f1f0;
  padding: 50px 0;
`;

const Title = styled.h1`
    margin:0;
    font-family: 'Satisfy', cursive;
    font-weight: normal;
    font-size: 3.5rem;
`;

const Description = styled.p`
    color: #ee664d;
    font-family: 'Cinzel', serif;

`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    img{
        max-width: 100%;
        max-height: 100vh;
        object-fit: fill;
        border-radius: 25% 10%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
`;

export default function Featured({featuredProduct}){
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(featuredProduct._id);
    }
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                <Column>
                    <div>

                    <Title> <span>&#128083;</span> {featuredProduct.title}</Title>

                    <Description>{featuredProduct.description} &#x1F60E;</Description>

                    <ButtonsWrapper>
                    <ButtonLink href={'/products/'+featuredProduct._id}>View</ButtonLink>
                    <Primarybtn primary size='l' onClick={addFeaturedToCart}>
                    <CartIcon />
                    Add To Cart
                    </Primarybtn>
                    </ButtonsWrapper>

                    </div>
                </Column>
                <Column>
                    <div>
                    <img src="https://mehediasif-ecommarce-products.s3.amazonaws.com/1685851496628.webp" alt="" />
                    </div>
                </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}