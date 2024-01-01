import React from "react"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import SliderBox from "../components/Slider";
import Categeries from "../components/Categeries";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CartSlider from "../components/CartSlider";
import CategoryPick from "../components/CategoryPick";

 
const Home = (props) => {
  return (
    <div>
        <Announcement /> 
        <Navbar />
        <SliderBox />
        <CategoryPick />
        <Products />
        <Categeries />
        <CartSlider />
        <Newsletter />
        <Footer />
    </div>
  )
};

export default  Home;
