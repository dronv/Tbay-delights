import { Link} from "react-router-dom";
import React from 'react';


function Navbar() {
  
    return (
      <div>
        <Link to ="/" activeClassName="active"> Home </Link> <br/>
        <Link to ="CreatePost" activeClassName="active">Thinking to Start your own service? </Link> <br/>
        <Link to= "PostList" activeClassName="active">Find Tiffins Services in Tbay </Link>
        </div>
    );
  }
  export default Navbar;
  