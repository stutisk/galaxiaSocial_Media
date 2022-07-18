import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Toolbar,
  Button,
  IconButton,
} from "../../utils/material-ui/materialComponents";

import {
  BsSliders,
  AiOutlineFire,
  AiOutlineArrowUp,
} from "../../utils/Icons/Icons";
import { CreatePost } from "../../Components";

import { useSelector, useDispatch } from "react-redux";
import { getAllPostHandler } from "../../features/post/postSlice";
import { getAllUsers } from "../../features/user/userSlice";

import { SinglePost } from "../../Components";
import { useState, useRef } from "react";

const Homepage = () => {
  useEffect(() => {
    document.title = "Galaxia  ";
  }, []);
  const { token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const [show, setShow] = useState("");
  const [modal, setModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [sortPost, setSortPost] = useState({ isSort: false, posts: [] });
  const [feedPost, setFeedPost] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (posts) {
      setFeedPost(
        posts
          ?.filter(
            (post) =>
              post?.username === user?.username ||
              user?.following?.find((db) => post?.username === db?.username)
          )
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [user, posts]);

  // useEffect(() => {

  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(getAllPostHandler(user.username));
        return res;
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, token, user.username]);

  const openmodal = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const trendingHandler = () => {
    setSortPost((prev) => ({ ...prev, isSort: true }));
    setSortPost((prev) => ({
      ...prev,
      posts: [...feedPost]
        ?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        ?.filter((post) => post.likes.likeCount > 0),
    }));
    setModal(false);
    setShow(<Typography sx={{ fontSize: 20 }}>Trending Posts</Typography>);
  };

  const sortByDate = () => {
    setSortPost((prev) => ({ ...prev, isSort: false }));
    setModal(false);
    setShow(<Typography sx={{ fontSize: 20 }}>Latest Posts</Typography>);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: "#18191A",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <Typography variant="h6">Home </Typography>
        </Toolbar>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 2,
            p: 1,
          }}
        >
          {modal ? (
            <Box
              sx={{
                border: 1,
                borderRadius: 3,
                borderColor: "border.main",
                width: "25rem",
                p: 1,
                zIndex: 3,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#19191B",
                boxShadow: 24,
                textAlign: "center",
              }}
            >
              <Button
                onClick={() => trendingHandler()}
                type="submit"
                variant="text"
                size="medium"
              >
                trending
                <AiOutlineFire />
              </Button>

              <Button
                onClick={() => sortByDate()}
                type="submit"
                variant="text"
                size="medium"
              >
                Latest
                <AiOutlineArrowUp />
              </Button>
            </Box>
          ) : null}
          <Typography
            sx={{
              p: 1,
            }}
          >
            {show}{" "}
          </Typography>
          <IconButton
            onClick={openmodal}
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{
              p: 2,
            }}
          >
            <BsSliders />
          </IconButton>
        </Box>
      </Box>
      <CreatePost />

      {sortPost.isSort ? (
        <>
          {sortPost.posts.length !== 0 ? (
            [...sortPost.posts].map((post) => (
              <SinglePost key={post._id} post={post} />
            ))
          ) : (
            <Typography sx={{ fontSize: 20 ,textAlign: 'center',lineHeight: 10 }}>OOps!! you haven't liked any post 😿</Typography>
          )}
        </>
      ) : (
        <>
          {feedPost.length !== 0 ? (
            
            feedPost.map((post) => <SinglePost key={post._id} post={post} />)
          ) : (
            <></>
          )}
          <Typography sx={{ fontSize: 20,textAlign: 'center' }}>Connect with more Users  🤝</Typography>
        </>
      )}
    </Box>
  );
};
export { Homepage };
