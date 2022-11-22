import React from 'react';
import Post from './Post';

const PostList = ({postList}) => {
    return (
        <div>{
             postList.map((data, index) => {
    return (
        <p key={index}>
            <Post name={data.name} price={data.price} description={data.description} delivery={data.delivery} />
        </p>
    );
})}
        </div>
    );
};

export default PostList;