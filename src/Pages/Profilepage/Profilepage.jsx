import { UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostHandler } from "../../features/post/postSlice";
import { SinglePost } from "../../Components";
import { useParams } from "react-router-dom";
import { getAllUsers } from "../../features/user/userSlice";
const Profilepage = () => {
  const { username } = useParams();
  const { users } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  const currentUser = users?.find((user) => user.username === username);
  const dispatch = useDispatch();
  const currentUserPosts = posts?.filter((post) => post.username === username);

  useEffect(() => {
    document.title = "Profile || Galaxia";
  }, []);

  useEffect(() => {
    dispatch(getAllPostHandler());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <Box>
        {currentUser ? <UserProfile currentUser={currentUser} /> : null}
        <Box>
          {currentUserPosts.length  ? (
            currentUserPosts.map((post) => (
              <SinglePost key={post._id} post={post} />
            ))
          ) : (
            <Box>No posts yet</Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export { Profilepage };
