import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import product1 from "../Assets/MobilePhones/iphone-12.png";
import ReactStar from "react-rating-stars-component";
import "../Style/LineClamp.css";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  value: 2.5,
  isHalf: true,
};

const Product = ({ product }) => {
  return (
    <>
      <Grid
        md={1.9}
        sm={3}
        xs={5.65}
        // classname={classes.ProductContainer}
        sx={{
          backgroundColor: "white",
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "7px",
          transition: "all 0.2s",
          "&:hover": {
            transform: "translateY(-1vmax)",
          },
        }}
      >
        <Box sx={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <Box>
            <img style={{ width: "100%" }} src={product.imgs[0].url} alt="" />
          </Box>
        </Box>
        <Box>
          <Box
            className="line"
            sx={{ lineHeight: "16px", fontSize: "13px", fontFamily: "Roboto" }}
          >
            {product.name}
          </Box>
          <Box
            sx={{
              color: "#f57224",
              fontSize: "17px",
              lineHeight: "20px",
              fontFamily: "Roboto",
            }}
          >
            Rs: {product.price}
          </Box>
          <Box
            sx={{
              color: "#0CB5CB",
              height: "20px",
              lineHeight: "20px",
              fontSize: "10px",
              fontFamily: "Roboto",
            }}
          >
            {product.isInstallment}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", color: "#9e9e9e", fontSize: "13px" }}>
              <ReactStar {...options} />
              <span>(256)</span>
            </Box>
            <Box
              sx={{
                lineHeight: "20px",
                color: "#9e9e9e",
                fontSize: "10px",
                fontFamily: "Roboto",
              }}
            >
              Pakistan
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Product;
