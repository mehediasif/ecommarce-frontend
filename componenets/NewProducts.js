import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    padding-top: 20px;
`;

export default function NewProducts({products}){
    return(
        <Center>
        <ProductsGrid>
        {products?.length > 0 && products.map(product =>(
            <ProductBox {...product} key={product._id}></ProductBox>
        ))}
        </ProductsGrid>
        </Center>
    );
}