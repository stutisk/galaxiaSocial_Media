import {
  Grid,
  Box,
  Avatar,
  Typography,
} from "../utils/material-ui/materialComponents";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
const Comment = ({ comment }) => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const userInfo =
    users &&
    users?.find((commentUser) => comment.username === commentUser.username);

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
            onClick={() =>
              comment.username === user.username
                ? navigate("/profile")
                : navigate(`/users-profile/${userInfo?.firstName}`)
            }
              sx={{ width: 37, height: 37 }}
              alt="profile "
              src={userInfo?.profilePic}
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
                  {userInfo?.firstName}
                  {userInfo?.lastName}
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
                  {comment.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export { Comment };
