import React from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import { Typography, Box } from "../../utils/material-ui/materialComponents";
import { FollowCard } from "../FollowCard/FollowCard";
import { useSelector } from "react-redux";
const SuggestedUsers = () => {
  const { users } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            bgcolor: "#18191A",
            zIndex: 2,
            paddingTop: 2,
               boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "common.white" }}>
            Follow People
          </Typography>
          {users.map((users) => (
            <FollowCard key={users._id} user={users} />
          ))}
        </Box>
      </ThemeProvider>
    </>
  );
};
export { SuggestedUsers };
