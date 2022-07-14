// import {
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
// } from "../../utils/material-ui/materialComponents";
// import { useState, useEffect } from "react";
// import { BsPencilSquare, MdDeleteOutline } from "../../utils/Icons/Icons";
// import { Box } from "@mui/system";
// import { useSelector, useDispatch } from "react-redux";

// import { deletePostHandler } from "../../features/post/postSlice";
// import React from "react";
// const PostModal = ({  post, modal, setModal}) => {

//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.user);
//   const { user,token } = useSelector((state) => state.auth);
//   const { posts} = useSelector((state) => state.post);

//   // const { _id } = post;
 

//   const handleDeletePost = async (event) => {
// 		event.stopPropagation();
// 		try {
// 			const response = await dispatch(
// 				deletePostHandler({ token, postId: _id })
// 			);
		
		
// 		} catch (error) {
		
// 		}
// 	};


//   const closemodal = () => {
//     setModal(false);
//   };

//   return (
//     <>
//       {modal ? (
//         <Box
//           sx={{
//             borderRadius: 3,

//             width: "8rem",

//             // py: 2,
//             zIndex: 3,
//             position: "absolute",
//             gap: 2,
//             bgcolor: "#19191B",
//           }}
//         >
//           <List>
//             <ListItem to="/">
//               <ListItemIcon sx={{ color: "primary.main" }}>
//                 <BsPencilSquare size={20} />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography
//                     variant="body1"
//                     sx={{ color: "common.white", cursor: "pointer" }}
//                   >
//                     Edit
//                   </Typography>
//                 }
//               />
//             </ListItem>
//             <ListItem to="/">
//               <ListItemIcon
//                 sx={{ color: "primary.main" }}
//                 // onClick={handleDeletePost}
//               >
//                 <MdDeleteOutline size={25} />
//               </ListItemIcon>
//               <ListItemText
//                 primary={
//                   <Typography
//                     variant="body1"
//                     sx={{ color: "common.white", cursor: "pointer" }}
//                   >
//                     Delete
//                   </Typography>
//                 }
//               />
//             </ListItem>
//           </List>
//         </Box>
//       ) : null}
//     </>
//   );
// };
// export { PostModal };
