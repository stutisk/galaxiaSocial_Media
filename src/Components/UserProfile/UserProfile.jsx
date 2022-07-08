import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Button,
  Typography,
  Grid,
  Box,
  Avatar,
  IconButton,
  Link,
  Toolbar,
} from "../../utils/material-ui/materialComponents";
import { BiLink, MdLogout } from "../../utils/Icons/Icons";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user} = useSelector((state) => state.auth);
  const{users} =useSelector((state) => state.user)
  console.log(users)
  return (
    <>
      <Box
          sx={{
            position: "sticky",
            top: 0,
            bgcolor: "#19191B",
            border: 1,
            borderTop: 0,
            borderColor: "border.main",
          }}
        >
          <Toolbar>
            <Typography variant="h6">Profile</Typography>
          </Toolbar>
        </Box>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            border: 1,
            borderColor: "border.main",
            p: 1,
          }}
        >
          <Grid container lg={12} item spacing={5}>
            <Grid item lg={2} xs={2}>
              <Avatar
                sx={{ width: 90, height: 90 }}
                alt="profile "
                src="https://stutikumari17.netlify.app/images/my.jpg"
              />
            </Grid>
            <Grid item lg={5} xs={5}>
              <Typography variant="h5" component="div" gutterBottom>
                {user.fullName}
              </Typography>
              <Typography variant="body2" component="div" gutterBottom>
             {user.username}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                Web Developer
              </Typography>
              <Link href="https://stutikumari17.netlify.app/" target="blank">
                {" "}
                <BiLink /> stutikumari17.netlify
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 2,
                  p: 1,
                }}
              ></Box>
            </Grid>
            <Grid item lg={5} xs={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                <Button
                  sx={{
                    width: "70%",
                    color: "common.white",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Edit Profile
                </Button>
                <IconButton
                  onClick={() => dispatch(logoutHandler())}
                  aria-label="delete"
                  sx={{
                    color: "primary.main",
                  }}
                >
                  <MdLogout />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 2,
              p: 1,
            }}
          >
            <Button
            
              sx={{
                color: "common.white",
                
              }}
              size="large"
            >
              10 Following
            </Button>
            <Button
              sx={{
                color: "common.white",
               
              }}
              variant="text"
              size="large"
            >
              10 Followers
            </Button>
            <Button
              sx={{
                color: "common.white",
                borderBottom: 1,
              }}
              variant="text"
              size="large"
            >
              0 Posts
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { UserProfile };
