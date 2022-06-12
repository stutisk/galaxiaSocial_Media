import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {Colors} from "../../styes/theme/index"
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
const Dsidebar = () => {
  return (
    <>
      <Box  m-0 bgcolor="#19191B" >
        <List>
          <ListItem component={Link} to="/">
            <ListItemIcon></ListItemIcon>
            <ListItemText color="Colors.primary" primary="Home"></ListItemText>
          </ListItem>
          <ListItem component={Link} to="explore">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Explore"></ListItemText>
          </ListItem>
          <ListItem component={Link} to="bookmarks">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Bookmarks"></ListItemText>
          </ListItem>
         
        </List>
      </Box>
    </>
  );
};
export { Dsidebar };
