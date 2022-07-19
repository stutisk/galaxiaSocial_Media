import { SinglePost, UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector ,useDispatch} from "react-redux";
import { getUserPostHandler } from "../../features/post/postSlice";

import { useParams } from "react-router-dom";
const Profilepage = () => {
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const {userPosts } = useSelector((state) => state.post);
  const currentUser = users?.find((user) => user.username === username);
const dispatch =useDispatch();

  useEffect(() => {
    document.title = `${currentUser.username} || Galaxia`;
  }, [currentUser.username]);

  useEffect(() => {
    dispatch(getUserPostHandler (user.username));
  }, [dispatch,user.username]);

  return (
    <>
      <Box>
 
      {currentUser ? <UserProfile currentUser={currentUser} /> : null}
        {/* <Box>
          {userPosts.length > 0 ? (
            userPosts.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <Box>No posts yet</Box>
          )}
        </Box> */}
      </Box>
    </>
  );
};
export { Profilepage };
