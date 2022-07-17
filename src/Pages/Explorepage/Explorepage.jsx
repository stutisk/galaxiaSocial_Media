import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Toolbar,
} from "../../utils/material-ui/materialComponents";
import { SinglePost } from "../../Components";
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

      {
     posts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ),).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      }
    </Box>
  );
};

export { Explorepage };
