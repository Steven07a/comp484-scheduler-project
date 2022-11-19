import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


function Home() {
  

  return (
    <>
      <div>Home</div>
      {/* shows how to link to different webpages refrences index.js to find the pages */}
      <Link to={"/Test"}>go to test page</Link>
    </>
  );
}

export default Home;
