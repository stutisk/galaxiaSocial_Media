import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Typography,
  Button,
  Link,
} from "../../utils/material-ui/materialComponents";
import TextField from "@mui/material/TextField";

const Login = () => {
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
                <TextField
               
                  sx={{
                    mb: 2,
                    input: { color: "common.white"},
                
                  }}
                  type="email"
                  required
                  label="Email"
                  fullWidth
                  focused
                />
                <TextField
                  sx={{
                    input: { color: "common.white"},
                    mb: 2,
                  }}
                  type="password"
                  required
                  label="Password"
                  fullWidth
                  focused
                />

                <Button
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
                  sx={{
                    mx: "auto",
                    width: "100%",
                    mb: 1,
                    color: "common.white",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Login As Guest
                </Button>
                <Typography
                  align="center"
                  variant="subtitle1"
                  sx={{ color: "common.white" }}
                >
                  Dont have an account ? 
                  <Link href="signup" underline="none">
                    {'SignUp'}
                  </Link>
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
