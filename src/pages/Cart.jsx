
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from '../components/Navbar';
import { Add, Delete, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requistMethod";
import { Link } from "react-router-dom";
import { removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { addOrder } from "../redux/apiCalls";





const Container = styled.div``;

const Wrapper = styled.div`
    padding : 20px;
    color : white;
    background-image: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight : 500;
    text-align : center;
`;
const Top = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding : 10px;
    color : white;
    font-size : 18px;
    background: linear-gradient(to right bottom, #4e042e, #58003d, #5f004e, #620063, #5f007b, #5d0084, #5a008e, #550298, #5c0193, #61018e, #66038a, #6a0585);
    border-radius : 15px;
`;
const TopButton = styled.div`
    padding : 10px;
    font-weight : 400;
    cursor : pointer;
    border:  none;
    background : linear-gradient(to right bottom, #01346e, #094887, #105da1, #1573bb, #198ad5);
    color:  grey:
    border-radius : 15px;;
    transition : ease 1s;

    &:hover{
        scale : 1.1;
        background : linear-gradient(to left bottom, #68016e, #603490, #4f54ad, #3870c4, #198ad5);
    }
`;
const Toptexts = styled.div`
    ${mobile({ display: "none" })}
`;
const Toptext = styled.span`
    text-decoration : underline;
    cursor : pointer;
    margin : 0px 10px;
`;
const Bottom = styled.div`
    padding : 5px
    display : flex;
    justify-content : space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
    padding : 10px;
    width : 100%;
`;

const Product = styled.div`
    padding : 10px;
    display : flex;
    border-bottom : 1px solid #042850;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
    padding : 5px;
    width : 50%;
    display : flex;
`;

const Image = styled.img`
    width : 40%;
    height : 40vh;
    border-radius : 15px;
    transition : ease 2s;
    margin-right : 10px;

    &:hover{
        scale : 1.1;
    }
`;

const Details = styled.div`
    padding : 10px;
    display : flex;
    width : 50%;
    flex-direction : column;
    justify-content : space-around;
`;

const ProductName = styled.div`
    color :  orange;  
    font-size : 25px; 
`;

const ProductDesc = styled.span`
    
`;
const ProductColor = styled.div` 
    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props => props.color};   
`;
const ProductSize = styled.span`
    
`;
const PriceDetail = styled.div` 
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center; 
    width : 20%; 
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
    ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    font-weight : 300;
    margin-top : 10px;
    font-size : 30px;
    color : green;
    ${mobile({ marginBottom: "20px" })}
`;

const Summery = styled.div`
    border : 1px solid grey;
    padding : 20px;
    border-radius : 10px;
    height : 50vh;    
    width : 40%;
    margin : 20px 0px; 
    margin-left : 50%;
`;
const SummeryTitle = styled.h1`
    font-weight : 200;
`;
const SummeryItems = styled.div`
    margin : 30px 0px;
    display : flex;
    justify-content : space-between;
    border-bottom : 1px solid #042850;
    font-weight : ${props => props.type === "Total" && "500"};
    font-size : ${props => props.type === "Total" && "20px"};
`;
const SummeryItemText = styled.span`
    
`;
const SummeryItemPrice = styled.span`
    
`;
const Button = styled.button`
    padding : 10px;
    font-weight : 400;
    cursor : pointer;
    border:  none;
    background : linear-gradient(to right bottom, #01346e, #094887, #105da1, #1573bb, #198ad5);
    color:  grey:
    border-radius : 15px;;
    transition : ease 1s;

    &:hover{
        scale : 1.1;
        background : linear-gradient(to left bottom, #68016e, #603490, #4f54ad, #3870c4, #198ad5);
    }  
`;

const DeleteButton = styled.button`
    background : white;
    color : white :
    border : none;
    transition : ease 1s;
    margin : 20px 0px;
    font-size : 18px;
    border-radius : 20px;

    &:hover{
        scale : 1.1;
        background : crimson;
    }
`;

const DeliveryConatiner = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between; 
    margin-top : 10px;
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






const Cart = (props) => {
    const cart = useSelector((state) => state.cart);
    const [quantity, setQuantity] = useState(1);
    const [stripeToken, setStripeToken] = useState(null);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    // useEffect(() => {
    //     const fetchCart = async () => {
    //         try {
    //                 getCart(user._id, dispatch);

    //         } catch (error) {
    //             console.error('Error fetching cart:', error);
    //         }
    //     };
    //     fetchCart();
    // }, [user._id, dispatch])

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const orderData = {
                    userId: user._id, // Replace with actual user ID
                    products: cart.products.map(product => ({
                        productId: product._id,
                        quantity: product.quantity
                    })),
                    amount: cart.total,
                    address: user.addr
                };
                addOrder(orderData, dispatch);
                await userRequest.post(
                    "/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: cart.total,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer sk_test_51O1UZSSF34kTD6ffWL6gbjTrj4GGqoZeo3HLYxlIwC2tE3u367pWTSWfaviGvAjxFSCByv742d8mntG5xZtie5uP00fVIikfyF`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
            } catch (error) {
                console.error("Error in makeRequest:", error);
            }
        };
        stripeToken && makeRequest();
    });



    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleRemove = (ProductId) => {
        dispatch(removeProduct(ProductId));
    };


    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <Toptexts>
                        <Toptext>Shopping Bag (2) </Toptext>
                        <Toptext>Your WishList (0)</Toptext>
                    </Toptexts>
                    <Link to="/">
                        <TopButton>See More</TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDetails>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName>
                                            <b></b> {product.title}
                                        </ProductName>
                                        <ProductDesc>
                                            <b></b> {product.desc}
                                        </ProductDesc>
                                        <ProductColor color={product.color} />
                                        <ProductSize>
                                            <b>Size:</b> {product.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetails>
                                <DeliveryConatiner><DeliveryText>FREE Delivery</DeliveryText><DeliveryDate>|  {cart.date ? cart.date.toString() : "Delivery by 30 Dec, Monday"} </DeliveryDate>
                                </DeliveryConatiner>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Remove onClick={() => handleQuantity("dec")} />
                                        <Amount>{quantity}</Amount>
                                        <Add onClick={() => handleQuantity("inc")} />
                                    </AmountContainer>
                                    <ProductPrice>
                                        $ {product.price * product.quantity}
                                    </ProductPrice>
                                    <DeleteButton onClick={() => handleRemove(product._id)}><Delete /></DeleteButton>
                                </PriceDetail>
                            </Product>
                        ))}
                    </Info>
                    <Summery>
                        <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                        <SummeryItems>
                            <SummeryItemText>Subtotal</SummeryItemText>
                            <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                        </SummeryItems>
                        <SummeryItems>
                            <SummeryItemText>Estimated Shipping</SummeryItemText>
                            <SummeryItemPrice>$ 5.90</SummeryItemPrice>
                        </SummeryItems>
                        <SummeryItems>
                            <SummeryItemText>Shipping Discount</SummeryItemText>
                            <SummeryItemPrice>$ -5.90</SummeryItemPrice>
                        </SummeryItems>
                        <SummeryItems type="Total">
                            <SummeryItemText>Total</SummeryItemText>
                            <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                        </SummeryItems>
                        <StripeCheckout
                            name="LetsShop"
                            image="https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-shopping-cart-circle-icon.png"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey="pk_test_51O1UZSSF34kTD6ffeHCvnHRMCuHb3O04p5VSqbtzcAenec72CVN0wRUaNvMSavKM3vMezwFm0Fs0HVdsHQSYdAEi00OOKlIo6G"
                        >
                            <Button>PAY NOW</Button>
                        </StripeCheckout>
                    </Summery>
                </Bottom>
            </Wrapper>
        </Container>
    )
};

export default Cart;
