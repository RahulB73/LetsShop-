import React, { useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import CartSlider from "../components/CartSlider";

const Container = styled.div`
    color : white:
    background: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
`;
 

const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
    color : white;
    background: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
`;

const Filter = styled.div`
    margin : 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size : 18px;
    font-weight : 400;
    margin-right : 20px;
    color : grey;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding : 10px;
    margin-right : 20px;
    background: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    color : grey;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
    
`;

const CartConatainer = styled.div`
    height: 330px;
    display: flex;
    overflow: hidden;
    margin-bottom: 11%;
    overflow-y: scroll;
`;

const ProductList = (props) => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  }



  return (
    <Container>
      <Navbar />
      <FilterContainer>
        <Filter><FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>pink</Option>
            <Option>teal</Option>
            <Option>green</Option>
            <Option>voilet</Option>
            <Option>crimson</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter><FilterText>Sort Products :</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <CartConatainer>
      <CartSlider cat={cat} filters={filters} sort={sort} />
      </CartConatainer>
      <CartSlider />
    </Container>
  )
};

export default ProductList;
