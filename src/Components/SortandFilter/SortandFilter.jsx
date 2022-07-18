// import { ThemeProvider } from "@mui/system";
// import { theme } from "../../styes/theme/index";
// import {
//   Button,
//   Box,
//   IconButton,
// } from "../../utils/material-ui/materialComponents";
// import {
//   BsSliders,
//   AiOutlineFire,
//   AiOutlineArrowUp,
// } from "../../utils/Icons/Icons";
// import { useState,useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// const SortandFilter = () => {
// const dispatch = useDispatch();
//   const [trendPost, setTrendPost] = useState({ isTrend: false, posts: [] });
//   const [feedPost, setFeedPost] = useState([]);
//   const { posts } = useSelector((state) => state.post);
//   console.log(posts)
//   const { user } = useSelector((state) => state.auth);
//   const [modal, setModal] = useState(false);
//   const openmodal = () => {
//     setModal((prev) => !prev);
//   };

//   useEffect(() => {
//     if (posts) {
//       setFeedPost(
//         posts
//           ?.filter(
//             (post) =>
//               post?.username === user?.username ||
//               user?.following?.find((ele) => post?.username === ele?.username)
//           )
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//       );
    
//     }
//   }, [user, posts]);

//   // const trendingHandler = () => {

//   //   setTrendPost((prev) => ({ ...prev, isTrend: true }));
//   //   setTrendPost((prev) => ({
//   //     ...prev,
//   //     posts: [...feedPost]
//   //       ?.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
//   //       ?.filter((post) => post.likes.likeCount > 0),
//   //   }));

//   // };

//   const trendingHandler = () => {

//   posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

//   };

  

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "flex-end",
//             gap: 2,
//             p: 1,
//           }}
//         >
//           {modal ? (
//             <Box
//               sx={{
//                 border: 1,
//                 borderRadius: 3,
//                 borderColor: "border.main",
//                 width: "25rem",
//                 p: 1,
//                 zIndex: 3,
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 bgcolor: "#19191B",
//                 boxShadow: 24,
//                 textAlign: "center",
//               }}
//             >
//               <Button onClick={() => trendingHandler()}
//               type="submit" variant="text" size="medium">
//                 trending
//                 <AiOutlineFire />
//               </Button>

//               <Button type="submit" variant="text" size="medium">
//                 Latest
//                 <AiOutlineArrowUp />
//               </Button>
//             </Box>
//           ) : null}
//           <IconButton
//             onClick={openmodal}
//             color="primary"
//             aria-label="upload picture"
//             component="span"
//             sx={{
//               p: 2,
//             }}
//           >
//             <BsSliders />
//           </IconButton>
//         </Box>
//       </ThemeProvider>
//     </>
//   );
// };

// export { SortandFilter };
