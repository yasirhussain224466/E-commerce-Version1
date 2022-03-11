import React from "react";
import Carousel from "../Components/Slider";
import Ticker from "../Components/Ticker";
import FeaturedProduct from "../Components/FeaturedProduct";
import NavigationBar from "../Components/NavigationBar";
import MetaData from "../Header/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="Technofony"/>
      <NavigationBar />
      <Carousel />
      <Ticker />
      <FeaturedProduct />
    </>
  );
};

export default Home;
