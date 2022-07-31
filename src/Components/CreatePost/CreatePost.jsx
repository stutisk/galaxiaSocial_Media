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
import { createNewPost } from "../../features/post/postSlice";
import { useState, useRef } from "react";

const CreatePost = () => {
  const [postData, setPostData] = useState("");
  const textInput = useRef(null);
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const postHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await dispatch(
        createNewPost({ token, postData: { content: postData } })
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    textInput.current.value = "";
  };

  const fillFormValue = (event) => {
    setPostData(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <form id="postData" onSubmit={postHandler}>
          <Box
            sx={{
              borderColor: "border.main",
              py: 4,
              px: 2,
              backgroundColor: "#242526",
              m: 2,
              borderRadius: "10px",
            }}
          >
            <Grid container lg={12} item spacing={6}>
              <Grid item lg={1} xs={1}>
                <Avatar
                  sx={{ width: 47, height: 47 }}
                  alt="profile "
                  src={user.profilePic}
                />
              </Grid>
              <Grid item lg={11} xs={11}>
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
                sx={{ borderRadius: "10px" }}
              >
                Post
              </Button>
            </Box>
          </Box>
        </form>
      </ThemeProvider>
    </>
  );
};
export { CreatePost };
