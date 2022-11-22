import React from 'react';
import './Post.css'
const Post = ({name,price,description,delivery}) => {
    return (
        <div className='post'>
        <button> X </button>
        <b id='name'>{name}</b> <br/>
        <p id='price'> Price: {price}</p>
        <p id='details'>Details: {description}</p>
        <p id='delivery'>Delivery: {delivery}</p>
        
        </div>
    );
};

export default Post;