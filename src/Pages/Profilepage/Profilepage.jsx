import { SinglePost, UserProfile } from "../../Components";
import React, { useEffect } from "react";
import { Box } from "../../utils/material-ui/materialComponents";
import { useSelector } from "react-redux";
import { PostsList } from "../../Components/PostList";

const Profilepage = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);

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
          {posts.length > 0 ? (
            posts.map((post) => <SinglePost key={post._id} post={post} />)
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
