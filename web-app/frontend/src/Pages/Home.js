import React from "react";
import Carousel from "../Components/Slider";
import Ticker from "../Components/Ticker";
import FeaturedProduct from "../Components/FeaturedProduct";
import NavigationBar from "../Components/NavigationBar";
import MetaData from "../Header/MetaData";
import { Box } from "@mui/material";
import Footer from '../Components/Footer'
const Home = () => {
  
  return (
    <>
      <MetaData title="Technofony" />
    
        <Box>
          <NavigationBar />
          <Carousel />
          <Ticker />
          <FeaturedProduct />
          <Footer/>
        </Box>
    </>
  );
};

export default Home;
