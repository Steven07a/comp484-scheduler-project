import React, { useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios"
import { AuthContext } from "../context/authContext";

import '../index.css';

function Home() {
  return (
    <>
      <div className="banner">
        <h1>Raid Finder and Scheduler</h1>
      </div>
    </>
  );
}

export default Home;