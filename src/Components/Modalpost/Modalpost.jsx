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
import React from "react";

const Modalpost = ({ modalpost, setModalpost }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {modalpost ? (
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              border: 1,
            borderRadius: 3,
            borderColor: "border.main",
           
            p: 3,
            zIndex: 3,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#19191B",
            boxShadow: 24,
              width: "35rem",
             
          
            }}
          >
            <Grid container lg={12} item spacing={1}>
              <Grid item lg={1} xs={1}>
                <Avatar sx={{ bgcolor: "primary.main", fontSize: 20 }}>
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item lg={11} xs={10}>
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
              <Button variant="contained" sx={{ borderRadius: "100px" }}>
                Post
              </Button>
            </Box>
          </Box>
        </ThemeProvider>
      ) : null}
    </>
  );
};
export { Modalpost };
