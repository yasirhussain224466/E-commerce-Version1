import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Assets/CarouselPicture/img1.jpg";
import img2 from "../Assets/CarouselPicture/img2.jpg";
import img3 from "../Assets/CarouselPicture/img3.jpg";
import img4 from "../Assets/CarouselPicture/img4.jpg";
const CarouselSlider = () => {
  return (
    <>
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img1} alt="First slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img2} alt="First slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img3} alt="First slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={img4} alt="First slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselSlider;
