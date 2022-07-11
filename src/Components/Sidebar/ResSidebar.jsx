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
const ReSidebar = () => {
  const [modalpost, setModalPost] = useState(false);

  const openmodal = () => {
    setModalPost((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box m-0 bgcolor="#19191B">
          <List>
            <ListItem component={Link} to="/">
              <ListItemIcon sx={{ color: "primary.main" }}>
                <img
                  src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_93/v1655102525/Social_Builders_2_nym7yl.png"
                  alt="galaxia-logo"
                ></img>
              </ListItemIcon>
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
            <ListItem component={Link} to="explore">
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
            <ListItem component={Link} to="profile">
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
        <Modalpost modalpost={modalpost} setModalPost={setModalPost} />
      </ThemeProvider>
    </>
  );
};
export { ReSidebar };
