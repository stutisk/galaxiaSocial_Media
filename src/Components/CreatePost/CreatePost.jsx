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
import { useSelector } from "react-redux";
import React  from 'react';

const CreatePost = () => {
  const {user} = useSelector((state)=> state.auth)
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
            <Avatar sx={{ bgcolor: "primary.main" ,fontSize:20}}>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</Avatar>
            </Grid>
            <Grid item lg={11} xs={11}>
              <TextField
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
            <Button variant="contained">Post</Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { CreatePost };