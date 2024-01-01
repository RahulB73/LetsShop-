import React, { useState } from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const Container = styled.div`
    border : 2px solid black;
    width : 100vw;
    height : 100vh; 
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    display : flex;
    align-items : center;
    justify-content : center; 
`;
const Wrapper = styled.div`
    border : 1px solid black;
    background-color : white;
    width : 20%;
    padding : 20px;
    ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
`;
const Form = styled.form`
    display : flex;
    flex-direction : column;
    margin : 10px;
`;
const Input = styled.input`
    flex : 1;
    margin : 20px 10px 0px 0px;
    padding : 10px;
    min-width : 40%;
`;
const Gap = styled.div`
    margin : 20px 0;
`;

const Button = styled.button`
    cursor:pointer;
    position:relative;
    padding:10px 10px;
    background:white;
    font-size:15px;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    transition:all 1s;
    &:after,&:before{
    content:" ";
    width : 10%;
    height:10px;
    position:absolute;
    border :0px solid #fff;
    transition:all 1s;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
    }
    &:after{
        top:-1px;
        left:-1px;
        border-top:5px solid teal;
        border-left:5px solid teal;
    }
    &:before{
        bottom:-1px;
        right:-1px;
        border-bottom:5px solid teal;
        border-right:5px solid teal;
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
const LINK = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
  display : none;
`;

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
        Navigate("/");
    };

    return (
        <Container>
            <Container>
                <Wrapper>
                    <Title>LOGIN TO YOUR ACCOUNT</Title>
                    <Form>
                        <Input placeholder="Username" type="Username" onChange={(e) => setUsername(e.target.value)} />
                        <Input placeholder="Password" type="Password" onChange={(e) => setPassword(e.target.value)} />
                        <Gap />
                        <Button onClick={handleClick}>LOGIN</Button>
                        {error && <Error>Something went wrong...</Error>}
                        <Gap />
                        <LINK>Forgot Password</LINK>
                        <LINK>New User</LINK>
                    </Form>
                </Wrapper>
            </Container>
        </Container>
    )
};

export default Login;