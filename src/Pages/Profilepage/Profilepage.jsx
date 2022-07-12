import { SinglePost, UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector } from "react-redux";

const Profilepage = () => {
  const { user } = useSelector((state) => state.auth);
  const { newuserPost, allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    document.title = `${user.firstName} ${user.lastName} || Galaxia`;
  }, [user.firstName, user.lastName]);

  return (
    <>
      <Box
        sx={{
          border: 1,
          borderColor: "border.main",
        }}
      >
        <UserProfile />
        <Box
          sx={{
            border: 1,
            borderColor: "border.main",
          }}
        >
          {newuserPost.length > 0 ? (
            newuserPost.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <Box
              
            >
              No posts yet
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export { Profilepage };
