import {
  Typography,
  Grid,
  Button,
  TextField,
  Avatar,
  Badge,
  IconButton,
} from "../../utils/material-ui/materialComponents";

import { MdPhotoCamera } from "../../utils/Icons/Icons";
import { Box } from "@mui/system";

const EditUserModal = ({ modal,setModal }) => {
  const closemodal = () => {
    setModal(false);
  };
  return (
    <>
      {modal ? (
        <Box
          sx={{
            border: 1,
            borderRadius: 3,
            borderColor: "border.main",
            width: "25rem",
            p: 3,
            zIndex: 3,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#19191B",
            boxShadow: 24,
          }}
        >
          <Grid
            container
            lg={12}
            item
            spacing={5}
            sx={{
              mb: 2,
            }}
          >
            <Grid item lg={6} xs={6}>
              <Typography variant="h5" sx={{ color: "common.white" }}>
                Edit Profile
              </Typography>
            </Grid>
            <Grid item lg={6} xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                <Button
                  sx={{
                    mx: "auto",
                    width: "50%",
                  }}
                  variant="contained"
                  size="large"
                >
                  Save
                </Button>
                <Button
                onClick={closemodal}
                  sx={{
                    mx: "auto",
                    width: "50%",

                    color: "common.white",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Badge
              sx={{
                mb: 2,
              }}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton
                  sx={{
                    color: "common.white",
                  }}
                >
                  {" "}
                  <MdPhotoCamera size={22} />
                </IconButton>
              }
            >
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 90,
                  height: 90,
                  fontSize: 50,
                }}
              >
                Sk
              </Avatar>
            </Badge>

            <TextField
              sx={{
                mb: 2,
                input: { color: "common.white" },
              }}
              type="text"
              label="FirstName"
              fullWidth
              focused
            />
            <TextField
              sx={{
                mb: 2,
                input: { color: "common.white" },
              }}
              type="text"
              label="userName"
              fullWidth
              focused
            />
            <TextField
              sx={{
                mb: 2,
                input: { color: "common.white" },
              }}
              type="text"
              label="Bio"
              fullWidth
              focused
            />
            <TextField
              sx={{
                mb: 2,
                input: { color: "common.white" },
              }}
              type="text"
              label="website"
              fullWidth
              focused
            />
          </Box>
        </Box>
      ) : null}
    </>
  );
};
export { EditUserModal };
