import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Toolbar,
} from "../../utils/material-ui/materialComponents";
import { CreatePost, SinglePost } from "../../Components";
import { PostsList } from "../../Components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostHandler } from "../../features/post/postSlice";
import { getAllUsers } from "../../features/user/userSlice";
import { SortandFilter } from "../../Components/SortandFilter/SortandFilter";
const Homepage = () => {
  useEffect(() => {
    document.title = "Galaxia  ";
  }, []);
  const { token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const { users} = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(getAllPostHandler(token));
        return res
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect( () => {
    dispatch(getAllUsers())
  },[dispatch])

  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#18191A",
          zIndex: 2,
          display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        
        </Toolbar>
        
        <SortandFilter/>
      </Box>
      <CreatePost />
     

      <PostsList posts={posts} />
    </Box>
  );
};
export { Homepage };
