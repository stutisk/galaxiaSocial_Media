import { SinglePost, UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector ,useDispatch} from "react-redux";
import { getUserPostHandler } from "../../features/post/postSlice";
import { PostsList } from "../../Components/PostList";

const Profilepage = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts, userPosts } = useSelector((state) => state.post);

const dispatch =useDispatch();

  useEffect(() => {
    document.title = `${user.firstName} ${user.lastName} || Galaxia`;
  }, [user.firstName, user.lastName]);

  useEffect(() => {
    dispatch(getUserPostHandler (user.username));
  }, []);

  return (
    <>
      <Box>
        <UserProfile />
        <Box>
          {userPosts .length > 0 ? (
            userPosts .map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <Box>No posts yet</Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export { Profilepage };
