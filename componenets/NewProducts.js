import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding-top: 10px;
`;

const Title = styled.h3`
    margin: 10px 0 10px;
    font-family: 'Syne Mono', monospace;
    font-weight: normal;
    font-size: 2rem;
    background: linear-gradient(to right, rgb(300, 00, 00), rgb(0, 7, 277));
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default function NewProducts({products}){
    return(
        <Center>
        <Title>New Arrivals</Title>
        <ProductsGrid>
        {products?.length > 0 && products.map(product =>(
            <ProductBox {...product} key={product._id}></ProductBox>
        ))}
        </ProductsGrid>
        </Center>
    );
}