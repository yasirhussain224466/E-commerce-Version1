import React from "react";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Box } from "@mui/material";
import NavigationBar from "./Components/NavigationBar";
import Carousel from "./Components/Slider";
import Ticker from "./Components/Ticker";
import FeaturedProduct from "./Components/FeaturedProduct";

function App() {
  return (
    <>
      <Box sx={{backgroundColor:'#f4f4f4'}}>
        <Appbar />
        <NavigationBar />
        <Carousel />
        <Ticker />
        <FeaturedProduct />
        <Footer />
      </Box>
    </>
  );
}

export default App;
