import styled, {css} from "styled-components";

export const ButtonStyle = css`
    border:0;
    padding:5px 15px;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    svg{
        height: 26px;
        margin-right: 5px;
    }
    ${props => props.primary && css`
        background-color: #2384F6;
        color:#fff;
        border: 1px solid #2376F6;
    `}
    ${props => props.white && !props.outline && css`
        background-color: #aaa;
        color:#000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color:#fff;
        border: 1px solid #ffe;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding:8px 15px;
    `}
    ${props => props.size === 'm' && css`
        font-size: 1 rem;
        padding:8px 15px;
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;
export default function Primarybtn({children, ...rest}){
    return(<StyledButton {...rest}>{children}</StyledButton>)
}