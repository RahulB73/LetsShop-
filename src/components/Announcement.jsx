import styled, { keyframes } from 'styled-components';
import { mobile } from "../responsive";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(-200%);
  }
`;


const Container = styled.div`
  height: 30px;
  background-image: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
  overflow: hidden;
  color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding: 5px 0px;

  ${mobile({fontSize : "12px" })};
`;

const ScrollWrapper = styled.div`
  display: flex;
  animation: ${scrollAnimation} 10s linear infinite;
`;

const Text = styled.span`
  background : transparent;
  padding: 5px 15px;
  text-decoration: italic;
  border-radius: 10px;
 
`;

const Announcement = (props) => {
  return (
    <Container>
      <ScrollWrapper>
         
        <Text>GET UPTO 30% OFF ON SHOPPING FROM RJ SHOP</Text>
         
      </ScrollWrapper>
    </Container>
  );
};

export default Announcement;
