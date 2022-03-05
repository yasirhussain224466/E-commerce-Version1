import React from "react";
import { Carousel } from "react-bootstrap";
import Home from "../Pages/Home";
import secondSlide from '../Assets/CarouselPicture/1st.png' 

const CarouselSlider = () => {
  return (
    <>
      <Carousel style={{}} fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={secondSlide} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item interval={2000}>
          <img className="d-block w-100" alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={secondSlide} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
