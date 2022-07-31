import {
  Typography,
  Grid,
  Button,
  TextField,
  Avatar,
  Badge,
  IconButton,
} from "../../utils/material-ui/materialComponents";
import { useState, useEffect } from "react";
import { MdPhotoCamera } from "../../utils/Icons/Icons";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { updateuserHandler } from "../../features/auth/authSlice";
import React from "react";
const EditUserModal = ({ modal, setModal }) => {
  
  const initialValue = {
    firstName: "",
    lastName: "",
    username: "",
    Bio: "",
    link: "",
  };

  const [form, setForm] = useState(initialValue);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const fillFormValue = (event, fieldName) => {
    console.log(event.target.value, [fieldName]);
    setForm((input) => ({ ...input, [fieldName]: event.target.value }));
  };

  const updateHandler = () => {
    (async () => {
      await dispatch(updateuserHandler({ ...form }));
    })();
    setModal(false);
  };

  useEffect(() => {
    setForm(user);
  }, [user]);

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
                  onClick={() => updateHandler()}
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
            <form>
              <Badge
                sx={{
                  mb: 2,
                }}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <label htmlFor="icon-button-file">
                    <input
                      hidden
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                    />
                    <IconButton
                      sx={{
                        color: "common.white",
                      }}
                      aria-label="upload picture"
                      component="span"
                    >
                      <MdPhotoCamera color="common.white" />
                    </IconButton>
                  </label>
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
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </Avatar>
              </Badge>

              <TextField
                sx={{
                  mb: 2,
                  input: { color: "common.white" },
                }}
                name="firstName"
                value={form.firstName}
                onChange={(e) => fillFormValue(e, "firstName")}
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
                name="lastName"
                value={form.lastName}
                onChange={(e) => fillFormValue(e, "lastName")}
                type="text"
                label="lastName"
                fullWidth
                focused
              />
              <TextField
                sx={{
                  mb: 2,
                  input: { color: "common.white" },
                }}
                value={form.username}
                onChange={(e) => fillFormValue(e, "username")}
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
                value={form.Bio}
                onChange={(e) => fillFormValue(e, "Bio")}
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
                value={form.link}
                onChange={(e) => fillFormValue(e, "link")}
                type="url"
                label="website"
                fullWidth
                focused
              />
            </form>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
export { EditUserModal };
