import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Assets/CarouselPicture/img1.jpg";
import img2 from "../Assets/CarouselPicture/img2.jpg";
import img3 from "../Assets/CarouselPicture/img3.jpg";
import img4 from "../Assets/CarouselPicture/img4.jpg";
import { Grid, Typography, Box, Button } from "@mui/material";
import MouseTwoToneIcon from "@mui/icons-material/MouseTwoTone";
import { makeStyles } from "@mui/styles";
// import Product from "../Components/Product";
const useStyles = makeStyles({
  banner: {
    background:
      "linear-gradient(to right, #E2E2E2, #C9D6FF)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    height: "83.5vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#15396A",
    "&::before": {
      content: '"Some Content"',
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
      position: "absolute",
      top: "0%",
      left: "0%",
      maxWidth: "100%",
      clipPath: "polygon(100% 59%, 0 82%, 100% 80%)",
    },
  },
  H6: {
    fontWeight: "2px",
    letterSpacing: 1,
  },
  H4: {
    letterSpacing: 7,
  },

  product: {},
});
const CarouselSlider = () => {
  const classes = useStyles();
  return (
    <>
      <Box >
        <Carousel style={{}} fade={true} pause={false}>
          <Carousel.Item  interval={3000}>
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
      </Box>
      <Box sx={{ display: { md: "none", lg: "none", sm: "none", xs: "none" } }}>
        <Grid pt={8} className={classes.banner}>
          <Typography className={classes.H6} variant="h6">
            Welcome to QuickMart
          </Typography>
          <br />
          <Typography className={classes.H4} variant="h4">
            Find Amazing Product Below
          </Typography>{" "}
          <br />
          <br />
          <Box>
            <Button variant="text" sx={{ color: "#15396A" }}>
              {" "}
              Scroll <MouseTwoToneIcon />
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CarouselSlider;
