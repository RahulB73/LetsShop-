import React, { useEffect } from "react";
import { styled } from "styled-components";
import Product from "./Product";
import { useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
    width : 100%;
    overflow : hidden;
    background : linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    border-bottom : 1px solid #042850;
    margin : 20px 0px;
    ${mobile({
      flexDirection: "row", // Change to row for horizontal arrangement
      justifyContent: "space-between", // Add space between items
      height: "auto",
      marginLeft: "5%", // Adjust the left margin as needed
      zIndex: "1",
    })};
`;

const SliderTitle = styled.span`
  color : white;
  font-size : 20px;
  display : flex;
  align-items : center;
  justify-content : space-between;  
  margin : 5px 0px;
  padding : 0px 10px;
  ${mobile({ padding: "0px", flexDirection: "column", fontSize : "15px" })};
`

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  // Fetch product data from an API whenever the cat dependency changes
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecommerce-backend-jplt.onrender.com/api/product?category=${cat}`
            : "https://ecommerce-backend-jplt.onrender.com/api/product"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  shuffle(products);

  // filter the products array based on the filters object whenever the products, cat, or filters dependencies change
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

  }, [products, cat, filters]);


  // sorts the filteredProducts array of products either by their creation date in ascending order, their price in ascending order, or their price in descending order.
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      <SliderTitle>Recommended Products <ArrowRightAltRounded /></SliderTitle>
      <Slider {...settings}>
        {cat
          ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
      </Slider>
    </Container>
  )
};

export default Products;
