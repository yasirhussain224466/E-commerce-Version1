import React from "react";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import RouteScreen from "./RouteScreen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    < >
      <BrowserRouter style={{backgroundColor: "#f4f4f4"}}>
        <Box sx={{ margin:"0px", padding:'0px' }}>
          <Appbar />
          <RouteScreen />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
