import React, { useState } from "react";

import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Avatar, Link } from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Actions/UserAction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SmsFailedRoundedIcon from "@mui/icons-material/SmsFailedRounded";

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
    padding: "0px 0px 0px 0px",
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
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState(initialValue);
  const { isAuthenticated } = useDispatch((state) => state.user);
  const OnChangeUser = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  const classes = useStyle();

  const { email, password } = loginUser;

  const addData = (e) => {
    if (email && password) {
      e.preventDefault();
      dispatch(login(email, password));

      setLoginUser({
        email: "",
        password: "",
      });
    } else {
      console.log("Provide valid");
    }
  };

  return (
    <>
      <Box sx={{ p: 0, mb: 13 }} className={classes.inputfeild}>
        <Avatar
          sx={{
            height: "50px",
            width: "50px",
            mt: 8,
            mb: 7,
            bgcolor: "#15396A",
          }}
        >
          {isAuthenticated ? (
            isAuthenticated ? (
              <TaskAltIcon />
            ) : (
              <SmsFailedRoundedIcon />
            )
          ) : (
            <LockOutlinedIcon />
          )}
        </Avatar>
        <Grid container form spacing={3}>
          <CssBaseline />

          <Grid item xs={12} sm={12}>
            <TextField
              required
              className={classes.field}
              id="email"
              value={email}
              name="email"
              type="email"
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
              type="password"
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
              sx={{ mt: 2, mb: 2 }}
              onClick={(e) => addData(e)}
            >
              {" "}
              Login
            </Button>
            <Grid mb={0} container justifyContent="flex-end">
              <Grid item>
                <Link color="#15396A" href="#" variant="body2"></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
