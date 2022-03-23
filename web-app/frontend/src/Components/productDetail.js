import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getProductDetails, clearError } from "../Redux/Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Rating from "@mui/material/Rating";
import Loader from "./Loader";
import { Link } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles({
  gridContainer: {
    display: "flex",
    width: "100vw",
    maxWidth: "100%",
    padding: "3vmax 0vmax 3vmax 0vmax",
    justifyContent: "space-around",
    boxSizing: "border-box",
  },
  gridItem1: {
    width: "100%",
    boxSizing: "border-box",
  },
  gridItem2: {},
  productImage: {
    width: "100%",
    padding: "30px",
  },
  carousel: {
    boxSizing: "border-box",
    margin: "auto",
  },
  boxImage: {
    width: "auto",
    height: "auto",
  },
  Button1: {
    "&:hover": {
      backgroundColor: "#1A9CB7",
    },
  },
  Button2: {
    "&:hover": {
      backgroundColor: "#15396A",
    },
  },
});

const ProductDetail = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state) => state.productDetail
  );
  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error]);
  let initial = 1;
  const [val, setVal] = useState(initial);
  const [inc, setInc] = useState(false);

  const color = [
    "#ACDDDE",
    "#CAF1DE",
    "#E1F8DC",
    "#FEF8DD",
    "#FFE7C7",
    "#F7D8BA",
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              margin: "0px",
              display: { md: "block", lg: "block", sm: "none", xs: "none" },
            }}
          >
            {product.image &&
              product.image.map((item, i) => {
                return (
                  <Box
                    sx={{
                      width: "100px",
                      height: "100px",
                      border: `3px solid ${color[i]}`,
                      borderRadius: "9px",
                      opacity: "0.9",
                      margin: "9px",
                      marginRight:'0px',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img key={i} width="100%" src={item.url} alt={i} />
                  </Box>
                );
              })}
          </Box>
          <Grid className={classes.gridContainer} container sx={{}}>
            <Grid
              className={classes.gridItem1}
              md={4}
              xs={12}
              sm={12}
              lg={4}
              item
            >
              {" "}
              <Carousel className={classes.carousel}>
                {product.image &&
                  product.image.map((item, i) => {
                    return (
                      <Box className={classes.boxImage}>
                        <img
                          className={classes.productImage}
                          key={item.url}
                          src={item.url}
                          alt={i}
                        />
                      </Box>
                    );
                  })}
              </Carousel>
            </Grid>
            <Grid
              className={classes.gridItem2}
              md={4}
              xs={12}
              sm={12}
              lg={4}
              item
              sx={{ pl: "20px", pr: "20px" }}
            >
              <Box>
                <Typography
                  // className="line"
                  sx={{
                    // lineHeight: "15px",
                    color: "#212121",
                    pb: "14px",
                    fontSize: "22px",
                    fontFamily: "Roboto",
                  }}
                  variant="h5"
                >
                  {product.name}
                </Typography>
                <Typography
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ display: "flex" }}>
                    <Typography>
                      <Rating
                        name="read-only"
                        precision={0.5}
                        edit={false}
                        readOnly
                        size="small"
                        activeColor="tomato"
                        value={product.rating}
                      />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        pl: 1,
                        pr: 1,
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      <Link
                        sx={{ textDecoration: "none", color: "#1A9CB7" }}
                        href="#"
                      >
                        {`${product.noOfRatingReviews} `}
                        {product.noOfRatingReviews > 1 ? "Ratings" : "Rating"}
                      </Link>
                    </Typography>
                  </Typography>
                  <Typography>
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                  </Typography>
                </Typography>
                <Typography
                  sx={{ display: "flex", color: "#1A9CB7", mb: "15px" }}
                >
                  <Typography
                    sx={{ fontSize: "14px", color: "#9E9E9E", mr: "6px" }}
                  >
                    Brand
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      borderRight: "1px solid #9E9E9E",
                      pr: "4px",
                    }}
                  >
                    <Link
                      sx={{ textDecoration: "none", color: "#1A9CB7" }}
                      href=""
                    >
                      {" "}
                      {product.brand}
                    </Link>
                  </Typography>
                  <Typography sx={{ fontSize: "14px", pl: "4px" }}>
                    <Link
                      sx={{ textDecoration: "none", color: "#1A9CB7" }}
                      href=""
                    >{`More Items from ${product.brand}`}</Link>
                  </Typography>
                </Typography>
                <Divider />

                {product.discount ? (
                  <Typography
                    sx={{
                      color: "#f57224",
                      fontSize: "30px",
                      fontFamily: "Roboto",
                      mt: "14px",
                      mb: "14px",
                    }}
                    variant="h5"
                  >
                    {" "}
                    Rs:{" "}
                    {`${(1 - product.discount) * product.price}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      color: "#f57224",
                      fontSize: "30px",
                      mb: "14px",
                      mt: "14px",
                    }}
                    variant="h5"
                  >
                    Rs:{" "}
                    {`${product.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                )}

                {product.discount ? (
                  <Typography sx={{ display: "flex", mb: "14px" }}>
                    <Typography
                      sx={{
                        textDecorationLine: "line-through",
                        paddingRight: "8px",
                        color: "#9E9E9E",
                      }}
                    >
                      {`${product.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>

                    <Typography> {`-${product.discount * 100}%`}</Typography>
                  </Typography>
                ) : (
                  ""
                )}
                <Divider />
                <Divider />

                {product.isInstallment ? (
                  <Typography
                    sx={{
                      display: "flex",
                      mt: "14px",
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        pr: "10px",
                        color: "#9E9E9E",
                      }}
                    >
                      Installment
                    </Typography>{" "}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        pr: "10px",
                      }}
                    >
                      <Link
                        sx={{ textDecoration: "none", color: "#1A9CB7" }}
                        href="#"
                      >
                        12 months, as low as Rs.{" "}
                        {`${Math.round(product.price / 12)}`.replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        )}{" "}
                        per month
                      </Link>
                    </Typography>{" "}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography
                  sx={{ display: "flex", mt: "14px", alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      pr: "10px",
                      color: "#9E9E9E",
                    }}
                    mr="15px"
                  >
                    Quantity
                  </Typography>
                  <IconButton
                    onClick={() => {
                      if (val === 1) {
                        setInc(true);
                        console.log(inc);
                      }
                      if (val > 1) {
                        return setVal(val - 1);
                      }
                    }}
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "50px", color: "#1A9CB7" }}>
                      -
                    </Typography>
                  </IconButton>
                  <Box
                    sx={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid #1A9CB7",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ color: "#1A9CB7" }}>{val}</Box>
                  </Box>
                  <IconButton
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      console.log(product.stock);
                      if (val < product.stock) {
                        setVal(val + 1);
                      }
                    }}
                  >
                    <Typography sx={{ fontSize: "28px", color: "#1A9CB7" }}>
                      +
                    </Typography>
                  </IconButton>
                </Typography>
                <Grid
                  mt={3}
                  container
                  md={12}
                  sm={12}
                  xs={12}
                  lg={12}
                  spacing={0}
                >
                  <Grid p={1} item md={6} lg={6} sm={12} xs={12}>
                    <Button
                      className={classes.Button1}
                      sx={{ backgroundColor: "#1A9CB7" }}
                      type="submit"
                      fullWidth
                      variant="contained"
                    >
                      Buy now
                    </Button>
                  </Grid>
                  <Grid p={1} item md={6} lg={6} sm={12} xs={12}>
                    <Button
                      className={classes.Button2}
                      sx={{ backgroundColor: "#15396A" }}
                      type="submit"
                      fullWidth
                      variant="contained"
                    >
                      Add to Cart
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              className={classes.gridItem2}
              md={4}
              xs={12}
              sm={12}
              lg={4}
              item
              sx={{ pl: "20px", pr: "20px" }}
            >
              <Box >
                <Box>Dilivery</Box>
                <Box>
                  <Box><LocationOnIcon/></Box>
                  <Box></Box>
                  <Box>Change</Box>
                </Box>

              </Box>

            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ProductDetail;
