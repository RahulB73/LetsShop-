import { Send } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height : 60vh;
    background-color : #fcf5f5;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    color : white;
    background: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
`;

const Title = styled.h1`
    font-size : 70px;
    margin : 20px;
`;

const Desc = styled.div`
    margin-bottom : 20px;
    font-size : 24px;
    font-weight : 300;
    ${mobile({textAlign : "center"})};
`;

const Infocontainer = styled.div`
    width : 50%;
    height : 40px;
    background-color : white;
    display : flex;
    justify-content : space-between;
    border : 1px solid lightgrey;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border : none;
    flex : 8;
    padding-left : 20px;
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
`;

const Button = styled.button`
    flex : 1;
    border : none;
    font-color : white;
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
    transition : ease 1s;

    &:hover{
        scale : 1.1;
        background : linear-gradient(to left bottom, #68016e, #603490, #4f54ad, #3870c4, #198ad5);
    }  
`;

const Newsletter = (props) => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <Infocontainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </Infocontainer>
        </Container>
    )
};

export default Newsletter;
