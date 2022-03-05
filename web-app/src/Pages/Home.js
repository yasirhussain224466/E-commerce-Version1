import React from "react";
import { Grid, Typography, Box, Button, Divider } from "@mui/material";
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
      clipPath: "polygon(100% 59%, 0 82%, 100% 80%)"
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

const Home = () => {
  const classes = useStyles();
  return (
    <>
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
      {/* <Grid>
        <Grid className={classes.FeaturedProduct}>
          <Typography
            sx={{ width: { lg: "20vw", md: "20vw", xs: "50vw", sm: "50vw" } }}
            className={classes.ProductHead}
            variant="h5"
          >
            Featured Product
          </Typography>
        </Grid>
        <Grid >
          <Box className={classes.product}>
            <Product />
          </Box>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Home;
