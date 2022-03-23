import * as React from "react";

import {
  Badge,
  InputBase,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SwipeableTemporaryDrawer from "./AppDrawer";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import LoginSignup from "./registerUser";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  color: "#15396A",
  marginRight: theme.spacing(0),
  marginLeft: theme.spacing(0),
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(0),
    width: "100%",
    height: "37px",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "50%",
    height: "37px",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#15396B",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        mt: 5,
        mr: 0,
        padding: 90,
      }}
    >
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#15396A" }}>
          <Toolbar sx={{ height: 30 }}>
            <SwipeableTemporaryDrawer />

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "flex", sm: "flex" } }}
            >
              Technofony{" "}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Search sx={{ display: { md: "block", xs: "none", sm: "block" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ width: { md: "40vw", xs: "100%" } }}
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecorationLine: "none",
                  color: "white",
                }}
              >
                <Box p={0}>
                  <Button sx={{ color: "white" }} to="#">
                    Signup
                  </Button>
                </Box>
                <Box p={0}>
                  <Button sx={{ color: "white" }} to="#">
                    {" "}
                    Login
                  </Button>
                </Box>
              </Box> */}
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={2} color="error">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </IconButton>

              <Link style={{color:'white'}} to="/loginsignup">
                {" "}
                <IconButton
                  size="large"
                  edge="end"
                  // aria-label="account of current user"
                  // aria-controls={menuId}
                  // aria-haspopup="true"
                  // onClick={handleProfileMenuOpen}
                  // color="white"
                  backgroundColor="white" color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
              {/* <LoginSignup/> */}
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box
        position="sticky"
        top={0}
        sx={{
          backgroundColor: "#15396A",
          zIndex: 1,
          margin: "0px",
          padding: "9px",
          overflowY: "auto",
          // height:'40px',
          // position: '-webkit-sticky',
          display: { md: "none", lg: "none", xs: "block", sm: "none" },
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </>
  );
}
