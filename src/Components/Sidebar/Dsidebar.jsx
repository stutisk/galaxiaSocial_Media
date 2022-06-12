import { Link } from "react-router-dom";
import { VscHome, MdOutlineExplore, BsBookmark } from "../../utils/Icons/Icons";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import { Typography, List, ListItem, ListItemIcon, ListItemText,Box } from "../../utils/material-ui/materialComponents";

const Dsidebar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box m-0 bgcolor="#19191B">
          <List>
            <ListItem component={Link} to="/">
              <ListItemIcon>
                <VscHome />
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
              <ListItemIcon>
                <BsBookmark />
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
              <ListItemIcon>
                <MdOutlineExplore />
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
              <ListItemIcon>
                <MdOutlineExplore />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="myVariant" sx={{ color: "common.white" }}>
                    Notification
                  </Typography>
                }
              />
            </ListItem>
            <ListItem component={Link} to="explore">
              <ListItemIcon>
                <MdOutlineExplore />
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
export { Dsidebar };
