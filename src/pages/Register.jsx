import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width : 100vw;
    height : 100vh; 
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        background-size : cover;
    display : flex;
    align-items : center;
    justify-content : center; 
`;
const Wrapper = styled.div`
    background : linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    width : 40%;
    padding : 20px;
    color : white;
    border-radius : 15px;
    ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
`;
const Form = styled.form`
    display : flex;
    flex-wrap : wrap;
`;
const Input = styled.input`
    flex : 1;
    margin : 20px 10px 0px 0px;
    padding : 10px;
    min-width : 40%;
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
`;
const Agreement = styled.span`
    font-size : 17px;
    margin : 20px 0px;
`;
const Button = styled.button`
    cursor:pointer;
    position:relative;
    padding:10px 10px;
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
    font-size:15px;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    transition:all 1s;
    &:after,&:before{
    content:" ";
    width:10px;
    height:10px;
    position:absolute;
    border :0px solid #fff;
    transition:all 1s;
    color : grey;
    }
    
    &:after{
        top:-1px;
        left:-1px;
        border-top:5px solid black;
        border-left:5px solid black;
    }
    &:before{
        bottom:-1px;
        right:-1px;
        border-bottom:5px solid black;
        border-right:5px solid black;
    }
    &:hover{
        border-top-right-radius:0px;
        border-bottom-left-radius:0px;
    
    &:before,&:after{
        
        width:100%;
        height:100%;
         
    }
    }
`;

const Register = (props) => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Register;
