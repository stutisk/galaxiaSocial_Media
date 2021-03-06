import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Button,
  TextField,
  Grid,
  Box,
  Avatar,
} from "../../utils/material-ui/materialComponents";

import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useState, useRef } from "react";
import { createNewPost, editPostHandler } from "../../features/post/postSlice";

const Modalpost = ({ modalpost, setModalPost, post }) => {
  const [postData, setPostData] = useState("");

  const textInput = useRef(null);
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const postHandler = async (event) => {
    event.preventDefault();

    if (post) {
      dispatch(editPostHandler({ token, postData: { content: postData } }));
    } else {
      dispatch(createNewPost({ token, postData: { content: postData } }));
    }
    setModalPost(false);
  };

  const fillFormValue = (event) => {
    setPostData(event.target.value);
  };

  return (
    <Box>
      {modalpost ? (
        <ThemeProvider theme={theme}>
          <form id="postData" onSubmit={postHandler}>
            <Box
              sx={{
                border: 1,
                borderRadius: 3,
                borderColor: "border.main",
                position: "fixed",
                zIndex: 1,
                top: "50%",

                p: 3,

                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#19191B",
                boxShadow: 24,
                width: "35rem",
              }}
            >
              <Grid container lg={12} item spacing={1}>
                <Grid item lg={1} xs={1}>
                  <Avatar
                    sx={{ width: 47, height: 47 }}
                    alt="profile "
                    src={user.profilePic}
                  />
                </Grid>
                <Grid item lg={11} xs={10}>
                  <TextField
                    inputRef={textInput}
                    onChange={fillFormValue}
                    inputProps={{ style: { color: "white" } }}
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Whats on your mind ?"
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 2,
                  p: 1,
                }}
              >
                {/* <label htmlFor="icon-button-file">
                  <input
                    hidden
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <MdPhotoCamera />
                  </IconButton>
                </label> */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ borderRadius: "100px" }}
                >
                  {post ? "Update" : "Post"}
                </Button>
              </Box>
            </Box>
          </form>
        </ThemeProvider>
      ) : null}
    </Box>
  );
};
export { Modalpost };
