import React from "react";
import { sliderItems } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import styled, { css } from 'styled-components';
import { mobile } from "../responsive";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
shuffle(sliderItems);


// Adjusted MainContainer styling
const MainContainer = styled.div`
  width : 100%;
  height: 85vh;
  padding-bottom: 10% 0px;
  overflow : hidden;
  background : linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
  ${mobile({  height: "auto" })};
`;

const SliderContainer = styled.div`
  height: 85vh;
  width: 80%;

  ${mobile({  height: "auto" })};
`;

const ImageContainer = styled.div`
  width: 50%; 
  height : 100%;

  ${mobile({  height: "auto" })};
`

const Image = styled.img`
  width: 100%;
  height : 80vh;
  background-color: transparent; 
  ${mobile({  height: "auto" })};
`;

const TextContainer = styled.div`
  width: 50%;
  height : 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items : center;
  justify-content : center;
  transition: opacity 0.3s;
`;

const AnnoucementTitle = styled.span`
  padding: 5px;
  color: white;
  font-size: 30px;
  font-weight: 700;

  ${mobile({  fontSize : "18px" })};
`;


const AnnoucementDesc = styled.span`
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 300;
  margin: 3% 0;

  ${mobile({  fontSize : "10px" })};
`;

const AnnoucementSmall = styled.span`
  padding: 5px;
  color: grey;
  font-size: 18px;
  font-weight: 300;
`;

const AnnouncmentButton = styled.button`
  border: none;
  padding: 5px 15px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius : 20px;
  margin-top : 5px;
  background : linear-gradient(to right, #797eef, #626bd0, #4c58b1, #364693, #213476, #13316b, #072e60, #002a54, #003253, #00374c, #003b43, #043e3a);
  transition : ease 1s;

  ${mobile({  fontSize : "13px" })};

  &:hover{
    background: crimson;
    scale : 1.2;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items : center;
  max-width  : 100%;
  height : 74vh;
  border-radius : 18px;
  margin : 5px 10px;
  ${props => css`background: ${props.bg};`}
  transition: opacity 0.3s;
  background-size: cover;  
  border-radius : 18px;
  object-fit : cover;
  margin : 2px 10px;

  ${mobile({  height: "auto", flexDirection : "row" })};
`

const SliderBox = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoScrolling: true
  };


  return (
    <MainContainer>
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <SliderContainer>
            <Wrapper key={index} bg={item.bg}>
              <TextContainer>
                <AnnoucementTitle>{item.title}</AnnoucementTitle>
                <AnnoucementDesc>{item.desc}</AnnoucementDesc>
                <AnnoucementSmall>{item.data}</AnnoucementSmall>
                <AnnouncmentButton>Explore More</AnnouncmentButton>
              </TextContainer>
              <ImageContainer>
                <Image src={item.img} alt={`slider-${index}`} />
              </ImageContainer>
            </Wrapper>
          </SliderContainer>
        ))}
      </Slider>
    </MainContainer>
  );
};

export default SliderBox;
