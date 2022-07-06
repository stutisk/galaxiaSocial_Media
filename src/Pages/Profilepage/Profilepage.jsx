import { Button } from "../../utils/material-ui/materialComponents";
import { logoutHandler } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
const Profilepage = () => {
    const dispatch = useDispatch();
    return(
        <>
     <div>its profile page </div>   
     <Button
     onClick={() => dispatch(logoutHandler())}
     sx={{
        mx: "auto",
        width: "15%",
        mb: 1,
        
      }}
      variant="contained"
      size="large">
    Logout</Button>
        </>
    )
}
export {Profilepage}