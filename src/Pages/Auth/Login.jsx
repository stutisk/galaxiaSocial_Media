import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Typography,
  Button,
  RouterLink,
} from "../../utils/material-ui/materialComponents";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { loginHandler } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Login = () => {
  const initialValue = {
    username: "",
    password: "",
  };

  const [login, setLogin] = useState(initialValue);
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestLogin = () => {
    setLogin((input) => ({
      ...input,
      username: "stutiSk",
      password: "StutiSk123",
    }));
  };

  const LoginHandler = () => {
    const { username, password } = login;
    if (username && password !== "") {
      (async () => {
        await dispatch(loginHandler(login));
      })();
    }
  };
  

  const fillFormValue = (event, fieldName) => {
    // console.log(event.target.value, [fieldName]);
    setLogin((input) => ({ ...input, [fieldName]: event.target.value }));
  };

  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Grid container lg={12} item spacing={7}>
            <Grid item lg={6} xs={12}>
              <Typography
                variant="myVariant3"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                Galax!a
              </Typography>
              <p>
                <Typography variant="myVariant" sx={{ color: "common.white" }}>
                  Galax!a helps you connect and share with the people in your
                  life.
                </Typography>
              </p>
            </Grid>
            <Grid item lg={6} xs={12}>
            
              <Box
                sx={{
                  border: 1,
                  borderRadius: 1,
                  borderColor: "border.main",
                  width: "25rem",
                  p: 3,
                }}
              >
                <form id="login"  onSubmit={LoginHandler(login,setLogin)}>
                <TextField
                  value={login.username}
                  onChange={(e) => fillFormValue(e, "username")}
                
                  sx={{
                    mb: 2,
                    input: { color: "common.white" },
                  }}
                  type="text"
                  required
                  label="username"
                  fullWidth
                  focused
                />
                <TextField
                  value={login.password}
                  onChange={(e) => fillFormValue(e, "password")}
                  sx={{
                    input: { color: "common.white" },
                    mb: 2,
                  }}
                  type="password"
                  required
                  label="Password"
                  fullWidth
                  focused
                />

                <Button
                
                  type="submit"
                  sx={{
                    mx: "auto",
                    width: "100%",
                    mb: 1,
                  }}
                  variant="contained"
                  size="large"
                >
                  Login
                </Button>
                <Button
                  onClick={() => guestLogin()}
                  sx={{
                    mx: "auto",
                    width: "100%",
                    mb: 1,
                    color: "common.white",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Fill With Test Details
                </Button>
                </form>
                <Typography
                  align="center"
                  variant="subtitle1"
                  sx={{ color: "common.white" }}
                >
                  Dont have an account ?{" "}
                  <RouterLink color="common.white" to="/signup">
                    SignUp
                  </RouterLink>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { Login };
