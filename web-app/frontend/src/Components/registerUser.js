import * as React from "react";
import { Modal } from "react-bootstrap";
import { IconButton, Tabs, Tab, Typography, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Signup from "./Signup";
import Login from "./Login";
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

const LoginSignup = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

  return (
    <>
      <IconButton color="inherit" edge="end" onClick={handleShow}>
        <AccountCircle />
      </IconButton>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ padding: "0px", color: "f5f5f5" }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          {/* <LinearIndeterminate /> */}

        <Box
          sx={{
            padding: "0px",
            marginLeft: "8px",
            marginTop: "7px",
            marginBottom: "7px",

            width: "100%",
            borderLeft: "3px solid #15396A",
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
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
              <Login handleClose={handleClose} />
            </TabPanel>
            <TabPanel
              sx={{ color: "#15396A", margin: "0px", padding: "0px" }}
              value={value}
              index={1}
            >
              <Signup handleClose={handleClose} />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Modal>
    </>
  );
};
export default LoginSignup;
