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
    <Box
      sx={{
        border: 1,

        borderColor: "border.main",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#19191B",
          border: 1,
          borderTop: 0,
          borderColor: "border.main",
          zIndex: 2,
        }}
      >
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </Box>
      <CreatePost />

      <PostsList posts={posts} />
    </Box>
  );
};
export { Homepage };
