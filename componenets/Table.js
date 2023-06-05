import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    th{
        text-align: left;
        margin: 10px 0 10px;
        font-weight: normal;
        color: #aaa;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }
    td{
        border-top: 1px solid rgba(2,0,5, 0.2);
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

`;
export default function Table(props) {
    return <StyledTable {...props} />
}