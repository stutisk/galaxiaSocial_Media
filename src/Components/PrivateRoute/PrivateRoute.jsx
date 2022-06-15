import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index"
import { Grid} from "../../utils/material-ui/materialComponents";
import { Sidebar, SuggestedUsers } from "../index";
const PrivateRoute = () => {
  return (
    <>
      <Grid container spacing={3} className="App">
        <ThemeProvider theme={theme}>
          <Grid item  lg={3} xs={12}>
            <Sidebar />
          </Grid>
          <Grid item  lg={6} xs={12}>
            <Outlet />
          </Grid>
          <Grid item  lg={3} xs={12}>
            <SuggestedUsers />
          </Grid>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export { PrivateRoute };
