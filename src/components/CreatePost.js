import React, { useState } from 'react';
import Post from './Post';
const CreatePost = ({setPostList}) => {
    const [postData, setPostData] = useState({
        name:'',
        delivery:'',
        price:'',
        description:''
    })
    const handleChange=e=>{
        setPostData({...postData,[e.target.name]:e.target.value});
        console.log(`${e.target.value}`);

    }

    const handleSubmit=()=>{
        setPostList(prevState => [...prevState,postData] );
        setPostData({
            name:'',
            delivery:'',
            price:'',
            description:''
        })
    }
    return (
    <div>
        <input placeholder='TBay Delights Tiffin Service' name='name' value={postData.name} onChange={e => handleChange(e)} type='text'/>
        <input placeholder='$250 / Month' name='price' value={postData.price} onChange={e => handleChange(e)} type='text'/>
        <div value={postData.delivery} onChange={e => handleChange(e)}>
            <input type="radio" value="Delivery Available" name="delivery"/> Delivery Available
            <input type="radio" value="No Delivery Available" name="delivery"/> No Delivery Available
        </div>
        <textarea row='200pt' col='200' value={postData.description} onChange={e => handleChange(e)} name='description' placeholder='Description'/>  
        <button onClick={handleSubmit}> Post </button>    
    </div>  
    );
};

export default CreatePost;