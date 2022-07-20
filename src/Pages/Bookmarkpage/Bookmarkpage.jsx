import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Toolbar,
} from "../../utils/material-ui/materialComponents";
import { SinglePost } from "../../Components";
import { useSelector } from "react-redux";
import { useState } from "react";
const Bookmarkpage = () => {
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = "Bookmarks | Galaxia ";
  }, []);

  const [bookmark, setBookmark] = useState(posts);

  useEffect(() => {
    setBookmark(
      posts.filter(
        (post) =>
          post.bookmark.some(
            (bookmarkPost) => bookmarkPost.username === user.username
          ) === true
      )
    );
    console.log(
      posts.filter(
        (post) =>
          post.bookmark.some(
            (bookmarkPost) => bookmarkPost.username === user.username
          ) === true
      )
    );
  }, [posts, user.username]);

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
          <Typography variant="h6">Bookmark</Typography>
        </Toolbar>
      </Box>

      {bookmark.length > 0 ? (
        bookmark.map((post) => <SinglePost key={post._id} post={post} />)
      ) : (
        <Typography sx={{ fontSize: 30, textAlign: "center", lineHeight: 20 }}>
          Save Posts For Later{" "}
          <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_38/v1658181283/skwj0r1lnsqrfu5we7bx.png" alt="bookamrk" />
        </Typography>
      )}
    </Box>
  );
};

export { Bookmarkpage };
