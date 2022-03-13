import React from "react";
import { Box, Grid } from "@mui/material";
import ReactStar from "react-rating-stars-component";
import "../Style/LineClamp.css";

const Product = ({ product }) => {
  console.log(product);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.rating,
    isHalf: true,
  };
  return (
    <>
      <Grid
        md={1.9}
        sm={3}
        xs={5.65}
        sx={{
          marginLeft: { lg: "10px", md: "10px", sm: "0px", xs: "0px" },
          marginRight: { lg: "10px", md: "10px", sm: "0px", xs: "0px" },
          marginTop: { lga: "25px", md: "25px", sm: "7px", xs: "7px" },
          marginBottom: { lg: "25px", md: "25px", sm: "7px", xs: "7px" },
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "7px",
          transition: "all 0.2s",
          "&:hover": {
            transform: "translateY(-1vmax)",
          },
        }}
      >
        <Box
          sx={{
            paddingTop: "5px",
            paddingBottom: "10px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          <Box>
            <img style={{ width: "100%" }} src={product.image[0].url} alt="" />
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
            {/* {product.isInstallment}
             */}
            {product.isInstallment
              ? "Installment Available"
              : "Installment not Available"}
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
              <span>({product.noOfRatingReviews})</span>
            </Box>
            <Box
              sx={{
                lineHeight: "20px",
                color: "#9e9e9e",
                fontSize: "10px",
                fontFamily: "Roboto",
              }}
            >
              {product.country}
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Product;
