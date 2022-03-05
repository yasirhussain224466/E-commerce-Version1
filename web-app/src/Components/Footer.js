import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  Button,
  Divider,
  Container,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import AppStore from "../Assets/PNG Image/AppStore.png";
import PlayStore from "../Assets/PNG Image/playStore.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    backgroundColor: "rgb(49, 46, 46)",
    color: "white",
    textAlign: "center",
    justifyContent: "space-around",
    marginTop: "0vh",
    padding: "2px",
    paddingTop: "100px",
    paddingBottom: "5px",
  },
  leftFooter: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "50px",
  },
  rightFooter: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "70px",
  },
  midFooter: {
    display: "flex",
    flexDirection: "column",
    paddingTop:'0px',
    paddingBottom: "50px",
  },
});

const Hello = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.footer} container>
        <Grid xs={12} sm={12} md={4} item className={classes.leftFooter}>
          <Typography variant="h4">Download Our App</Typography>
          <Typography variant="p">
            Download App for Android and IOS Phone
          </Typography>
          <br />
          <Box sx={{ display: "flex" }}>
            <Box pr={2}>
              <img width="50px" src={PlayStore} alt="Play Store" />
            </Box>
            <Box>
              <img width="50px" src={AppStore} alt="App Store" />
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={4} item className={classes.midFooter}>
          <Typography variant="h3">QuickMart</Typography>
          <br />
          
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
            }}
          >
            <Typography variant="p">
              High quality is our first priority{" "}
            </Typography>
            <Typography variant="p">
              Copyright 2022 &copy; M.Yasir.Hussain
            </Typography>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={4} item className={classes.rightFooter}>
          <Typography variant="h4">Follow Us</Typography>
          <br />
          
          <Box sx={{ textDecoration: "none" }}>
            <Button><FacebookTwoToneIcon/></Button>
            <Button><FacebookTwoToneIcon/></Button>
            <Button><FacebookTwoToneIcon/></Button>
            <Button><FacebookTwoToneIcon/></Button>
          </Box>
        </Grid>
        <Grid>
        <Box
          sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
        >
          <Typography variant="p">
            High quality is our first priority{" "}
          </Typography>
          <Typography  variant="p">
            Copyright 2022 &copy; M.Yasir.Hussain
          </Typography>
        </Box>
      </Grid>
      </Grid>
      
      {/* </Container> */}
    </>
  );
};

export default Hello;
