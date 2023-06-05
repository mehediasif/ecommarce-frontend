import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    padding: 15px 10px;
    margin-bottom: 10px;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px #ccc;
`;
export default function Input(props){
    return <StyledInput {...props} />
}