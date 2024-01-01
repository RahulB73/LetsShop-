import React from "react";
import styled from "styled-components";
import { Star } from "@mui/icons-material";
import { mobile } from "../responsive";



const Wrapper = styled.div`
    display : flex ;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    width : 100%;
    height : 40vh;
    flex-wrap:wrap;
    background : linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    margin : 20px 0px;
    padding : 10% 0px;
    ${mobile({ height: "auto", margin : "0px" })};
`;

const Container = styled.div`
    padding : 5px;
    display : flex;
    width : 30%;
    height: 15vh;
    color : white;
    background : linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
    border-radius : 10px;
    transition : all ease 2s;
    margin : 10px 10px;

    ${mobile({
        width: "90%",
        height : "auto"
      })}

    &:hover{
        scale : 1.1;
    }
`;

const ImageContainer = styled.div`
    width : 30%;
    height: 14vh;
    margin-right : 10px;
    border-radius : 10px;
    ${mobile({ height: "auto" })};
`;

const Image = styled.img`
    width : 100%;
    height: 14vh;
    object-fit : cover;
    border-radius : 10px;
    ${mobile({ height: "18vh" })};
`

const Textcontainer = styled.div`
    ${mobile({ height: "auto" })};
`;
const Title = styled.span`
    font-size : 20px;
    font-weight : 500;
    display : block;
    ${mobile({ fontSize : "15px" })};
`;

const RatingConatair = styled.div`
    font-size : 17px;
    display : flex;
    align-items : center;
    justify-content : space-around;
`;

const DescText = styled.span`
    margin : 5px 0px;
    font-size : 15px;
    display : block;
`;

const Button = styled.button`
    border : 1px solid #7C7C73;
    padding : 7px;
    background-color : transparent;
    border-radius : 15px;
    color : white;
    margin-left : 50%;
    cursor : pointer;
    transition : ease 1s;

    ${mobile({ fontSize : "12px" })};

    &:hover{
        background: crimson;
        scale : 1.2;
    }
`;





const CategoryPick = (props) => {
    return (
        <Wrapper>
            <Container>
                <ImageContainer><Image src="https://www.shutterstock.com/image-photo/beautiful-colorful-clothes-flying-isolatedwomens-600nw-2257875171.jpg" /></ImageContainer>
                <Textcontainer>
                    <Title>Clothing</Title>
                    <DescText>Women Clothes | Men Clothes | Children Clothes | Many More..</DescText>
                    <RatingConatair><Star />4.3<Button>See More..</Button></RatingConatair>
                </Textcontainer>
            </Container>
            <Container>
                <ImageContainer><Image src="https://www.tekportal.net/wp-content/uploads/2019/01/accessory-1833.jpg" /></ImageContainer>
                <Textcontainer>
                    <Title>Accessaries</Title>
                    <DescText>Bags | Belts | Jwellary | Watches | Earings | Many More..</DescText>
                    <RatingConatair><Star />4.3<Button>See More..</Button></RatingConatair>
                </Textcontainer>
            </Container>
            <Container>
                <ImageContainer><Image src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg" /></ImageContainer>
                <Textcontainer>
                    <Title>Cosmetics</Title>
                    <DescText>Makeup Products | Hygine Items | Makeup Kits | Many More..</DescText>
                    <RatingConatair><Star />4.3<Button>See More..</Button></RatingConatair>
                </Textcontainer>
            </Container>
            <Container>
                <ImageContainer><Image src="https://images.hindustantimes.com/img/2022/12/22/1600x900/istockphoto-1279108197-170667a_1671687926903_1671687937504_1671687937504.jpg" /></ImageContainer>
                <Textcontainer>
                    <Title>Footwear</Title>
                    <DescText>Women Footwer | Men Footwear | Children Footwear | Many More..</DescText>
                    <RatingConatair><Star />4.3<Button>See More..</Button></RatingConatair>
                </Textcontainer>
            </Container>
            <Container>
                <ImageContainer><Image src="https://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg" /></ImageContainer>
                <Textcontainer>
                    <Title>Electronics</Title>
                    <DescText>Mobile | Airpods | SmartWatches | Laptops | Tablets | Many More..</DescText>
                    <RatingConatair><Star />4.3<Button>See More..</Button></RatingConatair>
                </Textcontainer>
            </Container>
            <Container>
                <ImageContainer><Image src="https://5.imimg.com/data5/OV/KM/CR/ANDROID-37090388/product-jpeg.jpg" /></ImageContainer>
                <Textcontainer>
                    <Title>Home Appliences</Title>
                    <DescText>TV | Fridge | Heater | Microwave | Mixures | Many More..</DescText>
                    <RatingConatair><Star />4.3<Button>See More..</Button></RatingConatair>
                </Textcontainer>
            </Container>
        </Wrapper>
    )
};

export default CategoryPick;
