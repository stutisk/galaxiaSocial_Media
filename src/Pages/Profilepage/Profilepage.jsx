import { SinglePost, UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector ,useDispatch} from "react-redux";
import { getUserPostHandler } from "../../features/post/postSlice";


const Profilepage = () => {
  const { user } = useSelector((state) => state.auth);
  const {userPosts } = useSelector((state) => state.post);

const dispatch =useDispatch();

  useEffect(() => {
    document.title = `${user.firstName} ${user.lastName} || Galaxia`;
  }, [user.firstName, user.lastName]);

  useEffect(() => {
    dispatch(getUserPostHandler (user.username));
  }, [dispatch,user.username]);

  return (
    <>
      <Box>
        <UserProfile />
        <Box>
          {userPosts.length > 0 ? (
            userPosts.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <Box>No posts yet</Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export { Profilepage };
