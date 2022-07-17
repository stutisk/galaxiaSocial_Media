import React from "react";
import { ThemeProvider } from "@mui/system";
import { theme } from "../../styes/theme/index";

import {
  Button,
  Grid,
  Box,
  Avatar,
  Typography,
} from "../../utils/material-ui/materialComponents";
import { useSelector } from "react-redux";
const FollowCard = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);

  return (
    <>
      <Box
        sx={{
          p: 1,

          borderRadius: "10px",
        }}
      >
        <Grid container lg={12} item spacing={6}>
          <Grid item lg={3} sm={1} md={1}>
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt="profile "
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1657787764/y7yiyiogvkanju8hyzwq.jpg"
            />
          </Grid>
          <Grid item lg={3} sm={4} md={3}>
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
                sx={{ fontWeight: 900, letterSpacing: 1, lineHeight: 2 }}
              >
                {/* {currentUser?.firstName} {""}
                {currentUser?.lastName} */}
                stuti
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "border.main",
                }}
                component="div"
                gutterBottom
              >
                {/* {username} */}
                @sk
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} sm={4} md={4}>
            <Button
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
    </>
  );
};
export { FollowCard };
