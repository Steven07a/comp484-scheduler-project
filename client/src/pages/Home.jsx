import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../components/styles.css";
import axios from "axios"
import { AuthContext } from "../context/authContext";

const Home = () => {
  // displays how to get user info from local storage
  const { currentUser, logout } = useContext(AuthContext)
  
  
  return (
    <>
      <h1>Home</h1>
      {/* shows how to link to different webpages refrences index.js to find the pages */}
      <div class="Links">
        <Link to={"/Login"}>Go to Login </Link>
        <br></br>
        <br></br>
        <Link to={"/Test"}>Go to test page </Link>
        <br></br>
        <br></br>
        <Link to={"Maindash"}>Go to Dashboard</Link>
      </div>
    </>
  );
}

export default Home;