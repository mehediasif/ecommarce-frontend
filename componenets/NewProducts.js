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
    font-family: 'Syne Mono', monospace;
    font-weight: normal;
    font-size: 2rem;
    color: black;
    margin: 10px 0 10px;
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