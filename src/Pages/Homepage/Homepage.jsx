import React, { useEffect } from "react";
import { Box,Typography,Toolbar, } from "../../utils/material-ui/materialComponents";
import { CreatePost,SinglePost } from "../../Components";
import { PostsList } from "../../Components/PostList";
const Homepage = () => {
  useEffect(() => {
    document.title = "Galaxia  ";
  }, []);

  return (
    <Box
    sx={{
      border: 1,
      
      borderColor: "border.main",
    }} >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#19191B",
          border: 1,
          borderTop: 0,
          borderColor: "border.main",
          zIndex: 2
          
        }}
      >
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </Box>
      <CreatePost/>
     {/* <SinglePost/> */}
     <PostsList/>
    
      
    </Box>
  );
};
export { Homepage };
