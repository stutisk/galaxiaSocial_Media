// import { ThemeProvider } from "@mui/system";
// import { theme } from "../../styes/theme/index";
import {
  Button,
  TextField,
  Grid,
  Box,
  Avatar,
  IconButton,
  Typography,
} from "../utils/material-ui/materialComponents";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
const CommentList = ({ comment, postId }) => {
  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.post);
  const {users} =useSelector((state) => state.user)
  const [inputComment, setInputComment] = useState();
  return (
    <>
      <Box
        sx={{
          m: 1,
        }}
      >
        <Grid container lg={12} item spacing={4}>
          <Grid item lg={1} sm={1} md={1}>
            <Avatar
              sx={{ width: 37, height: 37 }}
              alt="profile "
              src={user.profilePic}
            />
          </Grid>

          <Grid item lg={11} sm={11} md={11}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                backgroundColor: "#19191B",
                borderRadius: "10px",
                p: 1,
              }}
            >
              <Box>
                <Typography
                  variant="subtitle1"
                  mb="0"
                  component="div"
                  gutterBottom
                  sx={{ fontWeight: 900, letterSpacing: 1, lineHeight: 2 }}
                >
                  {user?.firstName}
                  {user?.lastName}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "border.main",
                  }}
                  component="div"
                  gutterBottom
                >
                  Yesss
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export { CommentList };
