import { Link } from "react-router-dom";
import {
  MdHome,
  MdExplore,
  MdBookmark,
  FaUserAlt,
  MdNotifications,
  BsPlusLg,
} from "../../utils/Icons/Icons";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from "../../utils/material-ui/materialComponents";
import React, { useState } from "react";
import { Modalpost } from "../Modalpost/Modalpost";

const Dsidebar = () => {
  const [modalpost, setModalPost] = useState(false);

  const openmodal = () => {
    setModalPost((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "sticky",
            top: "1rem",
          }}
        >
          <List>
            <ListItem component={Link} to="/">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <img
                  src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_83/v1655102354/Social_Builders_1_stx0ww.png"
                  alt="galaxia-logo"
                ></img>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="myVariant2"
                    sx={{ color: "common.white" }}
                  >
                    Galax!a
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="/">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <MdHome size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="myVariant"
                    sx={{ color: "common.white" }}
                  >
                    Home
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="bookmarks">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <MdBookmark size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="myVariant"
                    sx={{ color: "common.white" }}
                  >
                    Bookmarks
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="explore">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <MdExplore size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="myVariant"
                    sx={{ color: "common.white" }}
                  >
                    Explore
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="notifications">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <MdNotifications size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="myVariant"
                    sx={{ color: "common.white" }}
                  >
                    Notification
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="profile">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <FaUserAlt size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="myVariant"
                    sx={{ color: "common.white" }}
                  >
                    Profile
                  </Typography>
                }
              />
            </ListItem>
            <ListItem >
              <Button
                onClick={openmodal}
                variant="outlined"
                sx={{
                  color: "common.white",
                  borderRadius: "100px",
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {" "}
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <BsPlusLg size={22} />
                </ListItemIcon>
                Post{" "}
              </Button>

            </ListItem>
          </List>
        </Box>
        <Modalpost modalpost={modalpost} setModalPost={setModalPost}/>
      </ThemeProvider>
    </>
  );
};
export { Dsidebar };
