import { Link } from "react-router-dom";
import {
  MdHome,
  MdExplore,
  MdBookmark,
  FaUserAlt,
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
import { useSelector } from "react-redux";
const ReSidebar = () => {
  const [modalpost, setModalPost] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { users} = useSelector((state) => state.user);
  const currentUser = users.find((dbUser) => dbUser.username === user.username)
  const openmodal = () => {
    setModalPost((prev) => !prev);
  };
  // const currentUser = users.find((dbUser) => dbUser.username === user.username)
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
            <ListItem component={Link} to={`/profile/${currentUser?.username}`}>
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
            <ListItem c >
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
