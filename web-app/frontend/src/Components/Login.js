import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Avatar, Link } from "@mui/material";
// import {Link} from 'react-router-dom'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const useStyle = makeStyles({
  heading: {
    fontFamily: "sans-serif",
    fontSize: "22px",
    lineHeight: "1",
    marginTop: "2px",
    marginBottom: "10px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "2px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#b6722d",
  },
  header: {
    marginBottom: "10px",
    textAlign: "start",
    marginLeft: "8px",
  },
  header2: {
    marginBottom: "20px",
    marginTop: "0px",
    textAlign: "start",
    marginLeft: "40px",
  },
  field: {
    "& label.Mui-focused": {
      color: "#15396A",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#15396A",
    },
  },
  buttomSet: {
    backgroundColor: "#15396A",
  },
  inputfeild: {
    padding: "20px 35px 20px 20px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  DivBorder: {
    border: "3px solid #b6722d",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
  },
});
const initialValue = {
  Email: "",
  FullName: "",
  password: "",
  confirmPassword: "",
  Country: "",
  Gender: "",
  MureedTalib: "",
  Sheikh: "",
  Message: "",
};

const Login = () => {
  const [user, setUser] = useState(initialValue);
  const OnChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const classes = useStyle();

  const {
    Email,
    FullName,
    password,
    confirmPassword,
    Country,
    Gender,
    MureedTalib,
    Sheikh,
    Message,
  } = user;

  return (
    <>
      <Box className={classes.inputfeild}>
        <Avatar sx={{ mb: 11, bgcolor: "#15396A" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Grid container form spacing={4}>
          <CssBaseline />
          
          <Grid item xs={12} sm={12}>
            <TextField
              className={classes.field}
              required
              id="Email"
              value={Email}
              name="Email"
              label="Email"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>

          <Grid item md={12} xs={12} sm={12}>
            <TextField
              className={classes.field}
              id="password"
              name="password"
              value={password}
              label="Password"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>
          <Grid mb={0} container justifyContent="flex-end">
              <Grid item>
                <Link color="#15396A" href="#" variant="body2">
                  forgot password
                </Link>
              </Grid>
            </Grid>

         

          <Grid item xs={12} md={12}>
            <Button
              style={{
                backgroundColor: "#15396A",
              }}
              className={classes.buttomSet}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {" "}
              Login
            </Button>
            <Grid mb={16} container justifyContent="flex-end">
              <Grid item>
                <Link color="#15396A" href="#" variant="body2">
                  
                </Link>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </Box>
    </>
  );
};

export default Login;
