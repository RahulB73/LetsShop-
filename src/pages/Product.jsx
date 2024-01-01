import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { AccountBalanceWallet, Add, FireTruck, Forward, ForwardOutlined, NotInterested, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requistMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import CartSlider from "../components/CartSlider";
import CategoryPick from "../components/CategoryPick";



const Container = styled.div`
    background-image: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e); 
    color : white;
`;

const Wrapper = styled.div`
    padding : 5px;
    height : 83vh;
    display : flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}     
`;
const ImgContainer = styled.div`
    padding : 40px;
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Image = styled.img`
    
    width : 50%;
    border-radius : 15px;
    transition : ease 1s;
    ${mobile({ height: "40vh" })}

    &:hover{
        scale : 1.2;
    }
`;
const InfoContainer = styled.div`
    padding : 40px;
    flex : 1;
    Padding : 0px 50px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
    font-weight : 200; 
    margin-top : 20px;   
`;
const Desc = styled.p`
    margin : 10px 0px; 
    font-size : 18px;   
`;
const Price = styled.span`
    font-weight : 100;
    font-size : 40px;
    color : green;
`;
const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between; 
    margin : 10px 0px; 
    border-bottom : 1px solid #01346E;
    padding : 5px 0px;
    margin-bottom : 10px;
    ${mobile({ width: "100%" })}  
`;
const Filter = styled.div`
    display : flex;
    align-items : center; 
`;
const FilterTitle = styled.span`
     font-weight : 200;
     font-size : 20px;
`;
const FilterColor = styled.div`
    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props => props.color};  
    margin : 0px 5px;
    cursor : pointer;  
`;
const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px;    
`;

const FilterSizeOption = styled.option`
     
`;
const AddContainer = styled.div`
    margin-top : 10px;
    display : flex;
    align-items : center; 
    justify-content : space-between; 
    padding : 5px 0px;
    ${mobile({ width: "100%" })}   
`;
const AmountContainer = styled.div`
    display : flex;
    align-items : center;
    font-weight : 500;
`;
const Amount = styled.span`
    border : 1px solid teal;
    display : flex;
    align-items : center;
    width : 30px;
    height : 30px;
    border-radius : 10px;
    margin : 0px 5px;
    justify-content : center;
`;
const Button = styled.button`
    border : none;
    padding : 10px;
    background-color : #05B39B;
    cursor : pointer;
    font-weight : 600;
    color : white;
    border-radius : 10px;
    
    &:hover{
        background-color : #28A6F4;
        transition : 1s ease;
        scale : 1.1;
    }
`;

const DeliveryConatiner = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between; 
    margin-top : 10px;
    border-bottom : 1px solid #01346E;
    padding : 5px 0px;
    margin-bottom : 10px;
`;

const DeliveryText = styled.span`
     color : green;
     font-size : 20px;
     font-weight : 600;
`;

const DeliveryDate = styled.span`
    font-size : 20px;
    font-weight : 400;
    margin-right : 5px;
    display : flex;
    align-items : center;
    justify-content : space-between; 
`;

const Offers = styled.span`
    font-size : 18px;
    margin-top : 10px;
    font-weight : 400;
    margin-right : 5px;
    display : flex;
    align-items : center;
    justify-content : space-between; 
    border-bottom : 1px solid #01346E;
    padding : 5px 0px;
    margin-bottom : 10px;
`;

const ReturnContainer = styled.div`
    padding : 5px 20px;
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    border-bottom : 1px solid #01346E;
    padding : 5px 0px;
    margin-bottom : 10px;
`;

const NoRetunr = styled.div`
     display : flex;
     flex-direction : column;
     align-items : center;
     justify-content : center;
     margin-right : 30px;
`;

const CashDelivery = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const HightLights = styled.div`
    font-size : 20px;
    font-weight : 500;
    border-bottom : 1px solid #01346E;
    padding : 5px 0px;
    margin-bottom : 10px;
`;
const List = styled.div`
    font-size : 17px;
    font-weight : 300;
    margin-top : 5px;
`;













const Product = (props) => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setproduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();



    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/product/find/" + id);
                setproduct(res.data);
            } catch { }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size }),
        );
    };


    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color : </FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)}></FilterColor>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size : </FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <DeliveryConatiner><FireTruck /><DeliveryText>FREE Delivery</DeliveryText><DeliveryDate>|  Delivery by 30 Dec, Saturday<ForwardOutlined /></DeliveryDate></DeliveryConatiner>
                    <Offers>All Offers & Coupens<Forward /></Offers>
                    <ReturnContainer><NoRetunr><NotInterested />No Return Allowed</NoRetunr><CashDelivery><AccountBalanceWallet />Cash on Delivery Available</CashDelivery></ReturnContainer>
                    <HightLights>HIGHLIGHTS :
                        <List>- Quantity : {quantity} </List>
                        <List>- Brand : Nike</List>
                        <List>- Use : Fashion Wear </List>
                        <List>- Avaiable : {product.inStock}</List>
                    </HightLights>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <CartSlider />
            <CategoryPick />
        </Container>
    )
};

export default Product;
