import React  from 'react';
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
import { useState ,useEffect} from "react";
import { EditUserModal } from "../EditUserModal/EditUserModal";
import { getAllUsers, updateuserHandler } from "../../features/user/userSlice";
const UserProfile = () => {
  const [modal, setModal] = useState(false);

  const openmodal = () => {
    setModal((prev) => !prev);
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {users} =useSelector((state) => state.user)
 
  const{posts} = useSelector((state)=> state.post)

  useEffect(() => {
    dispatch(updateuserHandler(user.username));
  }, [users,dispatch,user.username]);

  useEffect( () => {
    dispatch(getAllUsers())
  },[dispatch])


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
          zIndex: 2,
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
                src={user.profilePic}
              />
              
              {/* <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 90,
                  height: 90,
                  fontSize: 50,
                }}
              >
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)} */}
              {/* </Avatar> */}
            </Grid>
            <Grid item lg={5} xs={5}>
              <Typography variant="h5" component="div" gutterBottom>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2" component="div" gutterBottom>
                {user.username}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
               {user.Bio}
              </Typography>
              <Link href={user.link} target="blank">
                {" "}
                <BiLink /> {user.link}
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
                  onClick={openmodal}
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
              {user.following.length} following
            </Button>
            <Button
              sx={{
                color: "common.white",
              }}
              variant="text"
              size="large"
            >
              {user.followers.length} followers
            </Button>
            <Button
              sx={{
                color: "common.white",
             
              }}
              variant="text"
              size="large"
            >
              {posts.length} Posts
            </Button>
           
          </Box>
        </Box>
        <EditUserModal modal={modal} setModal={setModal}/>
        
      </ThemeProvider>
    </>
  );
};
export { UserProfile };
