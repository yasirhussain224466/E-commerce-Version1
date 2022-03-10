import React from "react";
import { AppBar, Toolbar, Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

const useStyles = makeStyles({
  Toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#15396A",
    paddingBottom: "15px",
  },
  AppBar: {
    backgroundColor: "white",
    height: "50px",
    borderTop: "3px solid #f4f4f4",
    borderBottom: "3px solid #f4f4f4",
    marginTop:'13px',
    marginBottom:'13px',
    boxShadow:'none'
    
  },
  Typography: {
    paddingLeft:'9px'
  },
  Box: {
    display: "flex",
  },
});

const Ticker = () => {
  const classes = useStyles();

  return (
    <>
    <Container maxWidth="xl">
      <AppBar className={classes.AppBar} position="static">
        <Toolbar className={classes.Toolbar}>
          <Box className={classes.Box}>
            <LocalShippingRoundedIcon />
            <Typography className={classes.Typography}>
              Super Fast Delivery
            </Typography>
          </Box>
          <Box className={classes.Box}>
            <CachedRoundedIcon />
            <Typography className={classes.Typography}>15 days Return</Typography>
          </Box>
          <Box className={classes.Box}>
            <VerifiedUserRoundedIcon />
            <Typography className={classes.Typography}>1 Year Warrenty</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      </Container>
    </>
  );
};

export default Ticker;
