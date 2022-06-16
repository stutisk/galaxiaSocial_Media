import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Input,
  Button,
  TextField,
  Grid,
  Box,
  Avatar,
  IconButton,
} from "../../utils/material-ui/materialComponents";
import { MdPhotoCamera } from "../../utils/Icons/Icons";
const CreatePost = () => {
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
              <Avatar
                alt="Remy Sharp"
                src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1652635707/w-1_c_mev7zg.jpg"
              />
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
