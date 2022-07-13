import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Button,
  TextField,
  Grid,
  Box,
  Avatar,
  IconButton,
  Typography,
} from "../../utils/material-ui/materialComponents";
import {
  BiLike,
  BiComment,
  BiBookmark,
  BiDotsVerticalRounded,
} from "../../utils/Icons/Icons";
import { useSelector} from "react-redux";
import React from "react";

const SinglePost = ({post}) => {
  
  const { user } = useSelector((state) => state.auth);
 
  // const { users } = useSelector((state) => state.user);

  const {
    firstName,
    lastName,
    content,
    username,
    _id,
    likes: { likeCount, likedBy },
    comments,
    createdAt,
    postImage,
    profilePic
  } = post;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            p: 1,
            backgroundColor:"#242526",
            m:2,
            borderRadius: '10px' 
          }}
        >
          <Grid container lg={12} item spacing={3}>
            <Grid item lg={1} sm={1} md={1}>
            
              <Avatar
                sx={{ width: 47, height: 47}}
                alt="profile "
                src={profilePic}
              />
              
            </Grid>
            <Grid item lg={2} sm={3} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="subtitle1"
                  mb="0"
                  component="div"
                  gutterBottom
                >
                  {firstName}
                  {lastName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "border.main",
                  }}
                  component="div"
                  gutterBottom
                >
                  {username}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={8} sm={7} md={8}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "border.main",
                }}
                component="div"
                gutterBottom
              >
               {createdAt}
              </Typography>
            </Grid>
            <Grid item lg={1} sm={1} md={1}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <BiDotsVerticalRounded />
              </IconButton>
            </Grid>
          </Grid>
          <Typography variant="subtitle1" mb="0" component="div" gutterBottom>
            {content}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 4,
              p: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1,
                p: 1,
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <BiLike />
              </IconButton>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1 }}
                component="div"
                gutterBottom
              >
                {likeCount}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1,
                p: 1,
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <BiComment />
              </IconButton>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1 }}
                component="div"
                gutterBottom
              >
                3
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 1,
                p: 1,
              }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <BiBookmark />
              </IconButton>
              <Typography
                variant="subtitle1"
                sx={{ mt: 1 }}
                component="div"
                gutterBottom
              >
                3
              </Typography>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { SinglePost };
