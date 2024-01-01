import React from "react"
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    width : 98%;
    height: 70vh;
    position: relative;
    border-radius : 8px;
    transition : ease 1s;

    &:hover{
      scale : 0.9;
    }
`
const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
    border-radius : 7px;
    ${mobile({ height: "30vh" })};
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color : white;
    margin-bottom : 20px;
`
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
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Link to={`/products/${item.cat}`}>
          <Button>Buy Now</Button>
          </Link>
        </Info>
    </Container>
  )
};

export default CategoryItems;
