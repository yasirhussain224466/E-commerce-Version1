import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Product from "./Product";
import ImgNo1 from "../Assets/MobilePhones/iphone-12.png";

const productApi = {
  name: "Apple iPhone 13 Pro Max 128GB (Official Warranty Mercantile) (Both Sim PTA Approved) (Non Active)",
  price: "230,000",
  _id: "01",
  imgs: [{ url: ImgNo1 }],
  location: "Pakistan",
  isInstallment: "Installment Available",
};

const useStyles = makeStyles({
  FeaturedProduct: {
    paddingTop: "30px",
    paddingBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ProductHead: {
    textAlign: "center",
    borderBottom: "1px solid rgba(21,21,21,0.5)",
    fontWeight: "bold",
    color: "#15396A",
    letterSpacing: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const FeaturedProduct = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ backgroundColor: "#f4f4f4", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            {" "}
            <Grid className={classes.FeaturedProduct}>
              <Typography
                sx={{
                  width: { lg: "20vw", md: "20vw", xs: "50vw", sm: "50vw" },
                }}
                className={classes.ProductHead}
                variant="h5"
              >
                Featured Product
              </Typography>
            </Grid>
          </Box>
        </Box>
        <Container maxWidth="xl">
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Product product={productApi} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturedProduct;
