import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import User from "./pages/user/User";
import { useSelector } from "react-redux";
import "./App.css";
import NewUser from "./pages/newuser/NewUser";

function App() {
  const user = useSelector((state) => state.user.currentUser);
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<NewUser />} />
      </Routes>
    </Router>
  )
}

export default App;
