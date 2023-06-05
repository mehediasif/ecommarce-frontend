import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import Center from "./Center";


const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
    color: #f4f1f0;
    text-decoration: none;
    font-family: 'Monoton', cursive;

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-family: 'Syne Mono', monospace;


`;
const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`;

const NavLink = styled(Link)`
    color: #e4f1d0;
    text-decoration: none;
`;

export default function Header(){
    const {cartItems} = useContext(CartContext);
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>Ecommarce</Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>Products</NavLink>
                        <NavLink href={'/categories'}>Categories</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart ({cartItems.length}) </NavLink>
                    </StyledNav>
                </Wrapper>
            
            </Center>

        </StyledHeader>
    );
  }