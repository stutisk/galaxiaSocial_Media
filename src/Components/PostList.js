import React from 'react';
import { SinglePost } from './SinglePost/SinglePost';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';

const PostsList = () => {
    const { posts} = useSelector((state) => state.post);
  
    return (
       <Box>
            {
                posts.map(post => <SinglePost key={post._id} post={post} />)
            }
       </Box>
    )
}

export { PostsList }; 