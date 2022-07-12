import React from 'react';
import { SinglePost } from './SinglePost/SinglePost';
import { useSelector } from 'react-redux';

const PostsList = () => {
    const { allPosts} = useSelector((state) => state.post);
    return (
        <div className="w-full flex justify-center items-center gap-8 my-12 flex-col">
            {
                allPosts.map(post => <SinglePost key={post._id} post={post} />)
            }
        </div>
    )
}

export { PostsList }; 