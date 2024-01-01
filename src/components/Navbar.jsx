import { AccountCircleOutlined, AdminPanelSettings, AppRegistration, Logout, SearchOutlined, ShoppingCart } from "@mui/icons-material";
import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {


  const [cat, setCat] = useState([]);
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const [isUserContainerVisible, setIsUserContainerVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleCat = (e) => {
    setCat(e.target.value.split(","));

    console.log(cat); // Log the previous value
  }



  const handleSignOut = () => {

  }

  const handleLogOut = () => {
    logout(user, dispatch);
    navigate("/login");
  }

  const handleClick = () => {
    setIsUserContainerVisible(!isUserContainerVisible);
  };

  useEffect(() => {
    // Set a timer to hide the UserContainer after 10 seconds
    const timerId = setTimeout(() => {
      setIsUserContainerVisible(false);
    }, 30000);

    // Clean up the timer when the component unmounts or when isUserContainerVisible changes
    return () => clearTimeout(timerId);
  }, [isUserContainerVisible]);





  

  // Styled component
  const Container = styled.div`
    ${mobile({ height: "20vh" })};
    background-image: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
    border-bottom : 1px solid #042850;

  `

  const Wrapper = styled.div`
      padding : 10px 20px;
      display : flex;
      justify-content : space-between;
      font-family : Arial;
      align-items : center;
      ${mobile({ margin: "5px 0px" })};
  `

  const Left = styled.div`
       
      flex:1;
      display : flex;
      align-items : center;
  `

  const SearchContainer = styled.div`
       
      align-items : center;
      display : flex;
      margin-left : 25px;
      border : 1px solid white;
      color : grey;
      padding : 3px 5% 3px 1%;
      max-width : fit-content;
      border-radius : 10px;
      background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
  `

  const Input = styled.input`
      border : grey;
      font-size : 17px;
      color : white;
      margin-right : 10px;
      background-color: #0000;
      background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
      ${mobile({ width: "50px" })};
  `

  const Center = styled.div`
       
      flex:1;
      align-items : center;
  `
  const Logo = styled.h1`
      font-family: Arial;
      font-weight : bold;
      color : #F6770A;
      display : flex;
      align-items : center;
      ${mobile({ fontSize: "20px" })};
  `

  const Rigth = styled.div`
       
      flex:1;
      display : flex;
      align-items : center;
      justify-content :  end;
      margin-left : 25px;
      ${mobile({ justifyContent: "center", flex: "2" })};
  `
  const MenuItems = styled.div`
      cursor : pointer;
      display: flex;
      margin-left : 25px;
      font-size : 25px;
      color : white;
      ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  `;

  const UserLogo = styled.span`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `



  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
`;

  const UserContainer = styled.div`
     
    display: ${isUserContainerVisible ? "block" : "none"};
    transition: opacity 1s ease-in-out;
    position : absolute;
    translate : -70% 70%;
    border-radius : 10px;
    z-index : 3;
`

  const UserItems = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    padding : 20px;
    background: linear-gradient(to right, #010d18, #030e1f, #080f25, #100f2b, #190d2e);
`

  const UserButton = styled.button`
    background: linear-gradient(to right, #051937, #0f1940, #1f1647, #31104b, #43014c);
    color : grey;
    padding: 3px 10px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin : 3px 0px;
    curson : pointer;
    border-radius : 10px;
    &:hover {
      background-color: crimson;
      transform: scale(1.1);
    }
`

  return (
    <Container>
      <Wrapper>
         <Center><Link to="/"><Logo><img src="https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-shopping-cart-circle-icon.png" alt="img" width="70px" />LetsShop</Logo></Link></Center> 
        <Left>
          <SearchContainer><Input name="categories" type="text" placeholder="Search for tshirt, jacket, jeans, dress" onChange={handleCat} /><SearchOutlined /></SearchContainer>
        </Left>
        <Rigth>
          <UserContainer>
            <UserItems>
              <Link to="/user"><UserButton><AccountCircleOutlined />ACCOUNT</UserButton></Link>
              <Link to="/register"><UserButton><AppRegistration />New Account</UserButton></Link>
              <UserButton onClick={handleSignOut}><AdminPanelSettings />Admin Panel</UserButton>
              <UserButton onClick={handleLogOut}><Logout />SignOut</UserButton>
            </UserItems>
          </UserContainer>
          <MenuItems><UserLogo onClick={handleClick}><AccountCircleOutlined /></UserLogo></MenuItems>
          <Link to="/cart">
            <MenuItems>
              <Icon>
                <ShoppingCart />
                <h4>{quantity}</h4>
              </Icon>
            </MenuItems>
          </Link>
        </Rigth>
      </Wrapper>
    </Container>
  )
};

export default Navbar;