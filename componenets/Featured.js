import styled from "styled-components";
import Center from "./Center";
import Primarybtn from "./Primarybtn";

const Bg = styled.div`
  background-color: #222;
  color: #f4f1f0;
  padding: 50px 0;
`;

const Title = styled.h1`
    margin:0;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: normal;
    font-size: 2.5rem;
`;

const Description = styled.p`
    color: #aaaa69;
    font-family: 'IBM Plex Mono', monospace;

`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
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

export default function Featured(){
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                <Column>
                    <div>
                    <Title>Pro Anywhere</Title>
                    <Description>Whereas disregard and contempt for human rights have resulted.Quick Brown fox jumps over the lazy dog.Enhance the beauty of css in styled components
                    </Description>
                    <ButtonsWrapper>
                    <Primarybtn white outline size='l'>View</Primarybtn>
                    <Primarybtn primary size='l'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z" clipRule="evenodd" />
                    </svg>

                    Add To Cart
                    
                    </Primarybtn>
                    </ButtonsWrapper>

                    </div>
                </Column>
                <Column>
                    <div>
                    <img src="https://mehediasif-ecommarce-products.s3.amazonaws.com/1682708611028.png" alt="" />
                    </div>
                </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}