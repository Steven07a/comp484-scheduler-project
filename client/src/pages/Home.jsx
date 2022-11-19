import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* shows how to link to different webpages refrences index.js to find the pages */}
      <div class="Links">
        <Link to={"Login"}>Go to Login</Link>
        <br></br>
        <br></br>
        <Link to={"Test"}>Go to test page</Link>
      </div>
    </>
  );
}

export default Home;