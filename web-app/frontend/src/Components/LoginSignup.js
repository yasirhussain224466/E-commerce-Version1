import React, { useEffect } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Signup from "./Signup";
import Login from "./Login";
import { useSelector } from "react-redux";
import LinearIndeterminate from "./Loader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginSignup = ({ history }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === true) {
      history.push("/");
    }
  }, [isAuthenticated, history]);


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <LinearIndeterminate />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: { md: "90vh", lg: "90vh", sm: "82vh", xs: "85vh" },
          }}
        >
          <Box
            sx={{
              padding: "0px",
              height: "100%",
              width: { md: "35%", lg: "30%", sm: "90%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderColor: "divider",
                color: "#15396A",
                margin: "0px",
                padding: "0px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
                textColor="inherit"
              >
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Signup" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChange}
              sx={{ color: "#15396A", margin: "0px", padding: "0px" }}
            >
              <TabPanel
                sx={{ color: "#15396A", margin: "0px", padding: "0px" }}
                value={value}
                index={0}
              >
                <Login />
              </TabPanel>
              <TabPanel
                sx={{ color: "#15396A", margin: "0px", padding: "0px" }}
                value={value}
                index={1}
              >
                <Signup />
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Box>
      )}
    </>
  );
};
export default LoginSignup;
