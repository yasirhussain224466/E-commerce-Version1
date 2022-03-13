import React, { useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Product from "./ProductCard";
import { getProduct } from "../Redux/Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  FeaturedProduct: {
    paddingTop: "20px",
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
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);
  const limit = 10;
  useEffect(() => {
    dispatch(getProduct(limit));
  }, [dispatch]);

  const classes = useStyles();
  return (
    <>
      <Box sx={{ backgroundColor: "#f4f4f4" }}>
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
                  fontSize: { md: "26px", xs: "25px" },
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
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              {products &&
                products.map((currElem) => <Product product={currElem} />)}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturedProduct;
