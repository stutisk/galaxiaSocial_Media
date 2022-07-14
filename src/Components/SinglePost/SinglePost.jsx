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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "../../utils/material-ui/materialComponents";
import {
  BiLike,
  BiBookmark,
  BiDotsVerticalRounded,
  BsPencilSquare, MdDeleteOutline 
} from "../../utils/Icons/Icons";
import { CommentList } from "../index";
import { useSelector } from "react-redux";
import React from "react";
import { useState } from "react";
import { deletePostHandler } from "../../features/post/postSlice";
import { useDispatch } from "react-redux";

const SinglePost = ({ post }) => {
  const { users } = useSelector((state) => state.user);
  const { user} = useSelector((state) => state.auth);
  const {
    content,
    username,
    _id,
    likes: { likeCount, likedBy },
    comments,
    createdAt,
  } = post;
  const dispatch = useDispatch();

  const currentUser =
    users && users?.find((user) => user.username === username);

  const [modal, setModal] = useState(false);

  const openmodal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            p: 1,
            backgroundColor: "#242526",
            m: 2,
            borderRadius: "10px",
          }}
        >
          <Grid container lg={12} item>
            <Grid item lg={1} sm={1} md={1}>
              <Avatar
                sx={{ width: 47, height: 47 }}
                alt="profile "
                src={currentUser?.profilePic}
              />
            </Grid>
            <Grid item lg={3} sm={4} md={3}>
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
                  sx={{ fontWeight: 900, letterSpacing: 1, lineHeight: 2 }}
                >
                  {currentUser?.firstName} {""}
                  {currentUser?.lastName}
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
            <Grid item lg={4} sm={4} md={4}>
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

            <Grid item lg={3} sm={2} md={2}>
              {modal ? (
                <Box
                  sx={{
                    borderRadius: 3,

                    width: "8rem",

                    // py: 2,
                    zIndex: 3,
                    position: "absolute",
                    gap: 2,
                    bgcolor: "#19191B",
                  }}
                >
                  <List>
                    <ListItem to="/">
                      <ListItemIcon sx={{ color: "primary.main" }}>
                        <BsPencilSquare size={20} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            sx={{ color: "common.white", cursor: "pointer" }}
                          >
                            Edit
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem to="/">
                      <ListItemIcon sx={{ color: "primary.main" }}>
                        <MdDeleteOutline size={25} />
                      </ListItemIcon>
                      <ListItemText
                        onClick={() => dispatch(deletePostHandler(_id))}
                        primary={
                          <Typography
                            variant="body1"
                            sx={{ color: "common.white", cursor: "pointer" }}
                          >
                            Delete
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              ) : null}
            </Grid>
            <Grid item lg={1} sm={1} md={1}>
              {user.username === username ? (
                <IconButton
                  sx={{ position: "absolute" }}
                  onClick={openmodal}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <BiDotsVerticalRounded />
                </IconButton>
              ) : <></>}
            </Grid>
          </Grid>

          <Typography
            sx={{
              pl: 1,
            }}
            variant="subtitle1"
            mb="0"
            component="div"
            gutterBottom
          >
            {content}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 4,
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

          <CommentList />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 1,
              p: 1,
            }}
          >
            <Grid container lg={12} item spacing={2}>
              <Grid item lg={1} sm={1} md={1}>
                <Avatar
                  sx={{ width: 37, height: 37 }}
                  alt="profile "
                  src={user.profilePic}
                />
              </Grid>
              <Grid item lg={9} sm={9} md={9}>
                <TextField
                  inputProps={{ style: { color: "white" } }}
                  multiline
                  rows={1}
                  fullWidth
                  placeholder="Write a Comment...."
                ></TextField>
              </Grid>
              <Grid item lg={1} sm={1} md={1}>
                <Button variant="text" sx={{ padding: 2 }}>
                  Reply
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { SinglePost };
