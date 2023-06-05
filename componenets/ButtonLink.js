import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
    border:2px solid #000;
    padding:8px 15px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    background-color: transparent;
    color: white;
    border: 1px solid #2376F6;
    box-shadow: 2px 2px teal;
    font-family: 'Monoton', cursive;
    font-weight: normal;
    font-size: 1 rem;
`;

export default function ButtonLink(props){
    return (
        <StyledLink {...props} />
    );
}