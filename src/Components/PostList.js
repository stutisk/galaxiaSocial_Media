import React from 'react';
import { SinglePost } from './SinglePost/SinglePost';
import { useSelector } from 'react-redux';

const PostsList = () => {
    const { posts} = useSelector((state) => state.post);
   console.log(posts)
    return (
        <div className="w-full flex justify-center items-center gap-8 my-12 flex-col">
            {
                posts.map(post => <SinglePost key={post._id} post={post} />)
            }
        </div>
    )
}

export { PostsList }; 