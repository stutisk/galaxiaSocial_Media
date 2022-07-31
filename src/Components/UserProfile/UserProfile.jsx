import React from "react";
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
import { useState, useEffect } from "react";
import { EditUserModal } from "../EditUserModal/EditUserModal";
import { getAllUsers } from "../../features/user/userSlice";
import { updateuserHandler } from "../../features/auth/authSlice";
import { followUnFollowUser } from "../../features/user/userSlice";
const UserProfile = ({ currentUser }) => {
  const [modal, setModal] = useState(false);

  const openmodal = () => {
    setModal((prev) => !prev);
  };
  const {
    id,
    username,
    // fullName,
    link = "",
    Bio = "",
    following,
    followers,
    profilePic,
    firstName,
    lastName,
  } = currentUser;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(updateuserHandler());
    dispatch(getAllUsers());
  }, []);
 
  const userBeingFollowed = followers?.find(
    (follower) => follower.username === user.username
  );

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#18191A",
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
            py: 4,
            px: 2,
            backgroundColor: "#242526",
            m: 2,
            borderRadius: "10px",
          }}
        >
          <Grid container lg={12} item spacing={5}>
            <Grid item lg={2} xs={2}>
              <Avatar
                sx={{ width: 90, height: 90 }}
                alt="profile "
                src={profilePic}
              />
            </Grid>
            <Grid item lg={5} xs={5}>
              <Typography variant="h5" component="div" gutterBottom>
                {firstName} {lastName}
              </Typography>
              <Typography variant="body2" component="div" gutterBottom>
                {username}
              </Typography>
              <Typography variant="body1" component="div" gutterBottom>
                {Bio}
              </Typography>
              <Link href={link} target="blank">
                {" "}
                <BiLink /> {link}
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

            {id === user.id ? (
              <>
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
              </>
            ) : (
              <>
                <Grid item lg={5} xs={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      gap: 1,
                    }}
                  >
                    
                    {userBeingFollowed? (  <Button
                      onClick={() =>
                        dispatch(
                          followUnFollowUser({
                            userId: currentUser._id,
                            dispatch: dispatch,
                            isFollow: false,
                          })
                        )
                      }
                      sx={{
                        width: "70%",
                        color: "common.white",
                      }}
                      variant="outlined"
                      size="large"
                    >
                      unFollow
                    </Button>):( <Button
                      onClick={() =>
                        dispatch(
                          followUnFollowUser({
                            userId: currentUser._id,
                            dispatch: dispatch,
                            isFollow: true,
                          })
                        )
                      }
                      sx={{
                        width: "70%",
                        color: "common.white",
                      }}
                      variant="outlined"
                      size="large"
                    >
                      Follow
                    </Button>)}
                  
                  </Box>
                </Grid>
              </>
            )}
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
              {following.length} following
            </Button>
            <Button
              sx={{
                color: "common.white",
              }}
              variant="text"
              size="large"
            >
              {followers.length} followers
            </Button>
          </Box>
        </Box>
        <EditUserModal modal={modal} setModal={setModal} />
      </ThemeProvider>
    </>
  );
};
export { UserProfile };
