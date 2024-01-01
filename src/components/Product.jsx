import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  ${mobile({ height: "auto" })};

`;

const Container = styled.div`
  flex: 1;
  margin: 5px 10px;
  min-width: 280px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  border-radius : 15px;
  transition: all 1s ease;

  ${mobile({
    flexDirection: "column",  
    height: "auto",
    margin : "30%"
  })};
   
  &:hover ${Info}{
    opacity: 1;
    scale : 1.2;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  ${mobile({ height: "auto" })};
`;

const Image = styled.img`
  height: 100%;
  width : 100%;
  z-index: 2;
  border-radius : 15px;

  ${mobile({ height: "22vh" })};
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: crimson;
    transform: scale(1.1);
  }

  ${mobile({
    width: "45%", // Adjust the width for better spacing on mobile
    height: "auto",
  })};
`;


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container >
  );
};

export default Product;