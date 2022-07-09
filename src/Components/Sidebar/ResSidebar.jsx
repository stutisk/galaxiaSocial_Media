import { Link } from "react-router-dom";
import { MdHome, MdExplore, MdBookmark,FaUserAlt,MdNotifications} from "../../utils/Icons/Icons";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import { Typography, List, ListItem, ListItemIcon, ListItemText,Box } from "../../utils/material-ui/materialComponents";

const ReSidebar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box m-0 bgcolor="#19191B">
          <List>
          <ListItem component={Link} to="/">
              <ListItemIcon  sx={{ color: "primary.main" }}>
               <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_93/v1655102525/Social_Builders_2_nym7yl.png" alt="galaxia-logo"></img>
              </ListItemIcon>
            
            </ListItem>
            <ListItem component={Link} to="/">
              <ListItemIcon  sx={{ color: "primary.main" }}>
                <MdHome  size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="myVariant" sx={{ color: "common.white" }}>
                   Home
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="bookmarks">
              <ListItemIcon  sx={{ color: "primary.main" }}>
                <MdBookmark size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="myVariant" sx={{ color: "common.white" }}>
                    Bookmarks
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="explore">
              <ListItemIcon  sx={{ color: "primary.main" }}>
                <MdExplore size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="myVariant" sx={{ color: "common.white" }}>
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
                  <Typography variant="myVariant" sx={{ color: "common.white" }}>
                    Notification
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="profile">
              <ListItemIcon  sx={{ color: "primary.main" }}>
                <FaUserAlt size={30} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="myVariant" sx={{ color: "common.white" }}>
                   Profile
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { ReSidebar };
