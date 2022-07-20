import { UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector, useDispatch } from "react-redux";
import { getUserPostHandler } from "../../features/post/postSlice";
import { SinglePost } from "../../Components";
import { useParams } from "react-router-dom";
const Profilepage = () => {
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  const currentUser = users?.find((user) => user.username === username);
  const dispatch = useDispatch();
  const currentUserPosts = posts?.filter((post) => post.username === username);
  useEffect(() => {
    document.title = `${currentUser.username} || Galaxia`;
  }, [currentUser.username]);

  useEffect(() => {
    dispatch(getUserPostHandler(user.username));

  }, [dispatch, user.username]);

  return (
    <>
      <Box>
        {currentUser ? <UserProfile currentUser={currentUser} /> : null}
        <Box>
          {currentUserPosts.length > 0 ? (
            currentUserPosts.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <Box>No posts yet</Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export { Profilepage };
