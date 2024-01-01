import {
  StarBorderOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
    flex: 1;
    margin: 5px 10px;
    min-width: 230px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    border-radius : 25px;
    transition: all 0.5s ease;
    
    &:hover{
      translate : 0px -7px; 
    }
  `;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: end;
  transition: all 0.5s ease;
  cursor: pointer;

`;

const Image = styled.img`
    height: 100%;
    width : 100%;
    z-index: 2;
    border-radius : 20px;
  `;

const InfoContainer = styled.div`
    color : #FFFFFF;
    font-size : 17px;
    font-weight: 800;
    display : flex;
    flex-directon : column;
    align-items : center;
    justify-content : space-between;
    margin : 20px;
`;

const Title = styled.div`
    display : block;
    margin : 3px 10px;
`;

const Button = styled.button`
  border: none;
  padding: 5px 15px;
  color: #FEFEF9;
  font-size: 15px;
  font-weight: 700;
  border-radius : 20px;
  margin-bottom : 5px;
  background-color : transparent;
  border : 1px solid #A4A4A3;
  transition: all 0.5s ease;

  &:hover{
    background: #0FF79A;
    scale : 1.2;
  }
`

const CartSingle = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <InfoContainer>
          <Title>{item.title}</Title>
          <StarBorderOutlined /> 4.7<Title>${item.price}</Title>
        </InfoContainer>
        <Link to={`/product/${item._id}`}>
          <Button>See Now</Button>
        </Link >
      </Info>
    </Container >
  );
};

export default CartSingle;