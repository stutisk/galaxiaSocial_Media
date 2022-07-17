import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Toolbar,
} from "../../utils/material-ui/materialComponents";

import { PostsList } from "../../Components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostHandler } from "../../features/post/postSlice";
const Explorepage = () => {
  useEffect(() => {
    document.title = "Explore | Galaxia ";
  }, []);
  const { token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(getAllPostHandler(token));
        return res;
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch,token]);
  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#18191A",
          zIndex: 2,
        }}
      >
        <Toolbar>
          <Typography variant="h6">Explore</Typography>
        </Toolbar>
      </Box>

      <PostsList posts={posts} />
    </Box>
  );
};

export { Explorepage };
