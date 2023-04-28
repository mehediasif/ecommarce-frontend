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
                    <img src="https://mehediasif-ecommarce-products.s3.us-east-1.amazonaws.com/mockup%20%2814%29.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCmV1LW5vcnRoLTEiRzBFAiEAoaHau0x%2BPWsEtwaGxPAvehialYVauov%2F9UBtfh9eNkkCICe5R7r61gSNx8p3RhPBzcYLUemNz0Osf0sI7GbYT92TKuQCCGQQABoMNTk2NTIxNjYwNjIwIgxXEULbF93dGBn2wcsqwQI1NDtdxFckbPA66Prg6TvUNWRREi92hL3UohsLYDRTsw6rsUT%2BoIJ2xvooF8wV8go%2FHNKeyiH0LNP5C2qTPUZYQRSqrxmapfxxeTv1AGWmri5w3mhe8UfhzXaZkafXY29Nuig4KA7oYoCgHlk5GtorF6kz3HXp5Q1dJdFY1q9P%2FCF8wuL3hyerluymnOiJJhwDtEGE7D1fwQbon0Y0eRMfaXDrOn4dN6wozmicO6WEQj7TqN%2F%2FpRFY%2BEmYSUF%2F2hqo%2BAZvbYGZBoAbMNJCIWXkxWAeB6pPKm%2Fy33EaAxLXGwL%2F1Ef2MmfB4eCky4j5ampkWcDTq8R1UptUzpW8xOpcUQeyABA6Dl0xGwiwPyjndIjpmgx5alzzJs6hxplfDOQlXzvfOYotDfAUMgNeDWbBhwLZZ8kIt667zbiIcj22AlEwzqewogY6swK4Bo5k%2FAqnmdvuqgzFwSgGmWWAWssCZXob2XfAOQSzsY9A%2B%2Fz1YtCCx5WpVBTMTacUerEZH43WbTqc2IaYEmb4wztl1a9D7wH2YDkXxqI%2FN%2FOW8Av6jd6eDlkFmzHuM5zJeh6ZpEVdzLbPsPQOjIPBPM6PAHfgJQCc33bkrrRvCOPx3k5vfh4mjUH4PVX%2BrtatDbFQuy8FX4D9Df94%2B%2Brc6UvKhcO7pt3VZF5ViJNg7bJhP7uuP%2FwfzD%2BhtZ9%2FYvSMkA8mPb0mEdvFiOFwWG8%2B1At4E1IAbgE4hbqV1US5x2pRCcl8iMkCRFs6yB3TubKV%2FimObKx1pfi2ybV0jBByXq0%2B1uWVioUTuhV%2BZmAR0YFEalzmI4QBVCHeHao5e2PM24mTMUWMq%2BwwGaXIEIV%2BSo0i&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230428T185531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYVY3WGDGDRZLEJZF%2F20230428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e58c074933348b044bc3739c815dcc90b4c073bc0996e534052acd27398ec0d" alt="" />
                    </div>
                </Column>

                </Wrapper>
            </Center>
        </Bg>
    );
}