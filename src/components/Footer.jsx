import { Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    border : 2px solid black;
    display : flex;
    color : white;
    background: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    ${mobile({ flexDirection: "column" })}
     
`;
const Left = styled.div`
     
    flex:1; 
    padding : 20px;
    display : flex;
    flex-direction : column;
`;
const Title = styled.h1`
      
`;
const Desc = styled.p`
      
    margin : 20px 0px; 
`;
const SocialContainer = styled.div`
     
    display : flex;  
`;
const SocialIcon = styled.div`
     
    width : 40px;
    height : 40px;
    border-radius : 50%;
    color : white; 
    background-color : #${props => props.color}; 
    display : flex;
    margin-right : 10px;
    align-items : center;
    justify-content : center;
`;
const Center = styled.div`
      
    flex:1;
    padding : 20px; 
    ${mobile({ display: "none" })}   
`;
const Logo = styled.h3`
    margin-bottom : 30px;
`;
const List =  styled.ul`
    margine : 0;
    padding : 0;
    display : flex;
    list-style : none;
    flex-wrap : wrap;
`;
const ListItem =  styled.li`
    margin-bottom : 10px;
    width : 50%;
`;
const Right = styled.div`
      
    flex:1;  
    padding : 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;
const Titles = styled.h1`

`;
const ContactItem = styled.div`
    display : flex;
    align-items : center;
    margin-bottom : 20px;
`;
const Image = styled.img`
    width : 100%;
`;


const Footer = (props) => {
    return (
        <Container>
            <Left>
                <Title>RJ. Shop</Title>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Logo>Useful Links</Logo>

                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Titles>Contact</Titles>
                <ContactItem><Room style={{marginRight:"10px"}}/> BTM Stage 1, BTM Layout, Bangaluru, Karnataka, India</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +91 7387892803</ContactItem>
                <ContactItem><Email style={{marginRight:"10px"}}/> rahulborkar@gmail.com</ContactItem>
                <Image src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
};

export default Footer;
