import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Button,
  TextField,
  Grid,
  Box,
  Avatar,
  IconButton,
} from "../../utils/material-ui/materialComponents";
import { MdPhotoCamera } from "../../utils/Icons/Icons";
import { useSelector,useDispatch } from "react-redux";
import React from "react";
import { createNewPost } from "../../features/post/postSlice";
import { useState } from "react";




const CreatePost = () => {
  
  const [postData, setPostData] = useState("");
  const dispatch = useDispatch();
  const { user,token } = useSelector((state) => state.auth);
  const {posts} = useSelector((state) => state.post )

 
    
  // };
  const postHandler = async (event) => {
		event.preventDefault();
		try {
			const response = await dispatch(
				createNewPost({ token, postData: { content: postData } })
			);
          
		} catch (error) {
			console.log(error)
		}
	};




  const fillFormValue = (event) => {
    console.log(event.target.value);
    setPostData( event.target.value );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            border: 1,
            borderColor: "border.main",
            p: 1,
          }}
        >
          <Grid container lg={12} item spacing={4}>
            <Grid item lg={1} xs={1}>
              {/* <Avatar sx={{ bgcolor: "primary.main", fontSize: 20 }}>
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </Avatar> */}
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="profile "
                src={user.profilePic}
              />
            </Grid>
            <Grid item lg={11} xs={11}>
              <TextField
              value={postData}
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
            <label htmlFor="icon-button-file">
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
            </label>
            <Button
              onClick={ postHandler}
              variant="contained"
              sx={{ borderRadius: "100px" }}
            >
              Post
            </Button>

          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { CreatePost };
