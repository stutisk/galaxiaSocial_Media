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
import { useDispatch, useSelector } from "react-redux";
import { signUpHandler } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    token && navigate("/");
  }, [token, navigate]);

  
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    lastName: "",
  };

  const [Signup, setSignUp] = useState(initialValues);

  const signUp = () => {
    const { username, password, firstName, lastName } = Signup;
    if (username && password && firstName && lastName !== "") {
      (async () => {
        await dispatch(signUpHandler(Signup));
      })();
    }
  };

  const fillFormValue = (event, fieldName) => {
    console.log(event.target.value, [fieldName]);
    setSignUp((input) => ({ ...input, [fieldName]: event.target.value }));
  };

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
                <Box component="form">
                  <TextField
                    value={Signup.firstName}
                    onChange={(e) => fillFormValue(e, "firstName")}
                    sx={{
                      mb: 2,
                      input: { color: "common.white" },
                    }}
                    type="text"
                    required
                    label="FirstName"
                    fullWidth
                    focused
                  />
                  <TextField
                    value={Signup.lastName}
                    onChange={(e) => fillFormValue(e, "lastName")}
                    sx={{
                      mb: 2,
                      input: { color: "common.white" },
                    }}
                    type="text"
                    required
                    label="lastName"
                    fullWidth
                    focused
                  />
                  <TextField
                    value={Signup.username}
                    onChange={(e) => fillFormValue(e, "username")}
                    sx={{
                      mb: 2,
                      input: { color: "common.white" },
                    }}
                    type="username"
                    required
                    label="Username"
                    fullWidth
                    focused
                  />
                  <TextField
                    value={Signup.password}
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
                  <TextField
                    sx={{
                      input: { color: "common.white" },
                      mb: 2,
                    }}
                    onChange={(e) => fillFormValue(e, "confirmpassword")}
                    type="password"
                    required
                    label=" Confirm Password"
                    fullWidth
                    focused
                  />

                  <Button
                    sx={{
                      mx: "auto",
                      width: "100%",
                      mb: 1,
                    }}
                    onClick={() => signUp(Signup, setSignUp)}
                    variant="contained"
                    size="large"
                  >
                    Create New account
                  </Button>
                </Box>
                <Typography
                  align="center"
                  variant="subtitle1"
                  sx={{ color: "common.white" }}
                >
                  Allready have an account ?{" "}
                  <RouterLink to="/login">Login</RouterLink>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { Signup };
