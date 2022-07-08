import { EditUserModal, UserProfile } from "../../Components";
import {
  Box,
  Typography,
  Toolbar,
 
} from "../../utils/material-ui/materialComponents";
const Profilepage = () => {
  return (
    <>
    <Box
    sx={{
      border: 1,    
      borderColor: "border.main",
    }} >
        <UserProfile />
      
      <p>loreWhy do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        her Contrary to popular belief, Lorem Ipsum
        is not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
   s, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is
        v
        </p>
        <EditUserModal></EditUserModal>
      </Box>

     
    </>
  );
};
export { Profilepage };
