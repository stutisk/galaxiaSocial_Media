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
import { BiLink } from "../../utils/Icons/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../features/user/userSlice";
import { useParams } from "react-router-dom";
import { getAllPostHandler, getUserPostHandler } from "../../features/post/postSlice";

const SingleUserProfile = () => {
  const [modal, setModal] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const userId = useParams();
  const dispatch = useDispatch();
  const { user,token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { posts} = useSelector((state) => state.post);
console.log(users)

  useEffect(() => {
    setSingleUser(users.find((user) => user.username === userId));
  }, [users, userId]);

  useEffect(
    () =>
    //  setSingleUser(users.filter((ele) => ele.username  === userId)),
    console.log(users.find((ele) => ele.username === userId))
    // [
    //   (user, users)
    // ]
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(getUserPostHandler(singleUser?.username));
        return res;
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch,singleUser?.username]);

  return singleUser?.username ?(
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
                src={user.profilePic}
              />
            </Grid>
            <Grid item lg={5} xs={5}>
              <Typography variant="h5" component="div" gutterBottom>
                {singleUser.firstName} {user.lastName}
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
                  sx={{
                    width: "70%",
                    color: "common.white",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Follow User
                </Button>
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
          </Box>
        </Box>
      </ThemeProvider>
    </>
  ):(<></>)
};
export { SingleUserProfile };
