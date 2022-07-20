import React, { useState } from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";
import {
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
} from "../../utils/material-ui/materialComponents";
// import { FollowCard } from "../FollowCard/FollowCard";
import { followUnFollowUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuggestedUsers = () => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [suggestedusers, setSuggestedusers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    () =>
      setSuggestedusers(
        users
          .filter((ele) => ele.username !== user.username)
          .filter((ele) => !user.following.find((ele2) => ele2._id === ele._id))
      ),
    [user, users]
  );

  console.log(suggestedusers);

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
            // boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "common.white" }}>
            Follow People
          </Typography>
          {suggestedusers.length > 0 ? (
            suggestedusers.map((suggestedUser) => (
              <Box
                sx={{
                  p: 1,

                  borderRadius: "10px",
                }}
                key={suggestedUser._id}
              >
                <Grid container lg={12} item spacing={6}>
                  <Grid item lg={2} sm={1} md={1}>
                    <Avatar
                      onClick={() =>
                        navigate(`/profile/${suggestedUser?.username}`)
                      }
                      sx={{ width: 40, height: 40 }}
                      alt="profile "
                      src={suggestedUser.profilePic}
                    />
                  </Grid>
                  <Grid item lg={4} sm={4} md={3}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        mb="0"
                        component="div"
                        gutterBottom
                        sx={{
                          fontWeight: 900,
                          letterSpacing: 1,
                          lineHeight: 2,
                        }}
                      >
                        {suggestedUser?.firstName} {""}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "border.main",
                        }}
                        component="div"
                        gutterBottom
                      >
                        @{suggestedUser.username}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={4} sm={4} md={4}>
                    <Button
                      onClick={() =>
                        dispatch(
                          followUnFollowUser({
                            userId: suggestedUser._id,
                            dispatch: dispatch,
                            isFollow: true,
                          })
                        )
                      }
                      type="submit"
                      variant="text"
                      sx={{ padding: 1 }}
                      // disabled
                    >
                      FOLLOW
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ))
          ) : (
            <>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "border.main",
                }}
                component="div"
                gutterBottom
              >
             NO users to Follow
              </Typography>
            </>
          )}
        </Box>
      </ThemeProvider>
    </>
  );
};
export { SuggestedUsers };
