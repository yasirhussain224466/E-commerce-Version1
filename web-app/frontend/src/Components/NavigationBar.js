import React, { useState } from "react";
import { Link } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Typography,
  Fade,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  AppBar: {
    background: "white",
    height: 50,
    borderBottom: "3px solid #f4f4f4",
  },
  Toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 100px 10px 100px",
  },
  Link: {
    color: "#15396A",
    textDecoration: "none",
    fontSize: "14px",
    "&:hover": {
      color: "#15396A",
    },
  },
  submenu: {
    display: "none",
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
  },
  submenuItem: {
    lineHeight: 0,
    margin: 0,
  },

  menuItems: {
    "&:hover": {
      submenuItem: {
        display: "block",
      },
    },
  },
});

const NavigationBar = () => {
  const [anchorE1, setAnchorE1] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [anchorE4, setAnchorE4] = React.useState(null);
  const open1 = Boolean(anchorE1);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);
  const open4 = Boolean(anchorE4);

  const handleClick1 = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClick4 = (event) => {
    setAnchorE4(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorE1(null);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const handleClose4 = () => {
    setAnchorE4(null);
  };

  const handleOut1 = () => {
    setAnchorE1(null);
  };

  const handleOut2 = () => {
    setAnchorE2(null);
  };

  const handleOut3 = () => {
    setAnchorE3(null);
  };

  const handleOut4 = () => {
    setAnchorE4(null);
  };
  // const handleMouseOut = () => {
  //   setAnchorEl(null);
  // };

  const classes = useStyles();
  return (
    <>
      <AppBar
        sx={{ display: { sm: "none", xs: "none", md: "flex" } }}
        className={classes.AppBar}
        position="static"
      >
        <Toolbar className={classes.Toolbar}>
          <Box>
            <Typography className={classes.Link} id="menu1"
              aria-controls={open1 ? "menu1" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
              >
              ALL CATEGORIES <KeyboardArrowDownIcon />
            </Typography>
            <Menu
              id="menu1"
              MenuListProps={{
                "aria-labelledby": "menu1",
                fontSize: "1px",
              }}
              anchorEl={anchorE1}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
              onMouseLeave={handleOut1}
              PaperProps={{
                elevation: 0,
                sx: {
                  transform: "translateX(-2%) translateY(0%)",
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    zIndex: 0,
                  },
                },
              }}
            >
              <MenuItem onClick={handleClose1}>Smart Phones</MenuItem>
              <MenuItem onClick={handleClose1}>Bar Phones</MenuItem>
              <MenuItem onClick={handleClose1}>Tablets</MenuItem>
              <MenuItem onClick={handleClose1}>
                Mobile Phone Cases & Protector
              </MenuItem>
            </Menu>
          </Box>
          <Box className={classes.menuItems}>
            <Typography
              
              className={classes.Link}
            >
              Mobile Phones & Tablets
            </Typography>

            
          </Box>
          <Box>
            <Typography
              className={classes.Link}
            >
              TV and Home Theater 
            </Typography>
           
          </Box>
          <Box>
            <Typography
              className={classes.Link}
            >
              Photography
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.Link}>Gaming</Typography>
          </Box>
          <Box>
            <Typography className={classes.Link}>Computers & Laptops</Typography>
          </Box>
          <Box>
            <Typography className={classes.Link}>Wearables</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
