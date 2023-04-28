import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #f4f1f0;
  padding: 50px 0;
`;

const Title = styled.h1`
    margin:0;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: normal;
`;

const Description = styled.p`
    color: #aaaa69;
    font-family: 'IBM Plex Mono', monospace;

`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;

export default function Featured(){
    return(
        <Bg>
            <Center>
                <Wrapper>
                <Column>
                    <div>
                    <Title>Pro Anywhere</Title>
                    <Description>Whereas disregard and contempt for human rights have resulted.Quick Brown fox jumps over the lazy dog.Enhance the beauty of css in styled components
                    </Description>
                    </div>
                </Column>
                <Column>
                    <div>
                    <img src="https://mehediasif-ecommarce-products.s3.amazonaws.com/1682708611028.png" alt="" />
                    </div>
                </Column>

                </Wrapper>
            </Center>
        </Bg>
    );
}