import React from "react";
import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";
import { mobile } from "../responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
shuffle(categories);

const Container = styled.div`
    padding : 10% 0px;
    width : 100%;
    overflow : hidden;
    background : linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    margin : 20px 0px;
    ${mobile({ padding: "0px", flexDirection: "column" })};
`

const Categeries = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    return (
        <Container>
            <Slider {...settings}>
                {categories.map((item) => (
                    <CategoryItems item={item} key={item.id} />
                ))}
            </Slider>
        </Container>
    )
};

export default Categeries;
