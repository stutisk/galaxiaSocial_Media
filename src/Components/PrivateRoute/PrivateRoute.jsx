import { Outlet ,Navigate ,useLocation} from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index"
import { Grid} from "../../utils/material-ui/materialComponents";
import { Sidebar, SuggestedUsers } from "../index";
import { useSelector } from "react-redux";
import React  from 'react';
const PrivateRoute = () => {

  const {token } = useSelector((state)=> state.auth)
  const location = useLocation();
 
  return  token ? (
    
    <>

      <Grid container spacing={1} className="App">
        <ThemeProvider theme={theme}>
          <Grid item  lg={3} xs={12}>
            <Sidebar />
          </Grid>
          <Grid item  lg={7} xs={12}>
            <Outlet />
          </Grid>
          <Grid item  lg={2} xs={12}>
            <SuggestedUsers />
          </Grid>
        </ThemeProvider>
      </Grid>
    </>
  ):(
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
