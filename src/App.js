import React, { useState } from "react";
import {Routes ,Route} from 'react-router-dom';
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App(){
    const [postList, setPostList] = useState([]);
    return(
        <div>
        <b> TBAY Delights</b>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/CreatePost" element={<CreatePost setPostList={setPostList}/>}/>
            <Route exact path="/PostList" element={< PostList postList={postList}/>}/>
        </Routes>
            
        </div>
    );
}
export default App;