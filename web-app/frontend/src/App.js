import React from "react";
import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";

import RouteScreen from "./RouteScreen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#f4f4f4" }}>
          <Appbar />
          <RouteScreen />
          <Footer />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
