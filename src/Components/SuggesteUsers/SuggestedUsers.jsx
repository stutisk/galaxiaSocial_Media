import { Link } from "react-router-dom";
import { MdHome, MdExplore, MdBookmark,FaUserAlt,MdNotifications} from "../../utils/Icons/Icons";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import { Typography, List, ListItem, ListItemIcon, ListItemText,Box } from "../../utils/material-ui/materialComponents";

const SuggestedUsers = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box   sx={{
        position: "sticky",
        top: "1rem",
      }}>
        <Typography variant="myVariant" sx={{ color: "common.white" }}>
                Follow requests
                  </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};
export { SuggestedUsers };
