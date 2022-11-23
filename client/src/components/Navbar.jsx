import React, { useContext } from "react";
import { AuthContext, logout } from "../context/authContext";

function Navbar() {
  // data + function being pulled from authContext which. user info is pulled from local storage
  const { currentUser, logout } = useContext(AuthContext)
  
  return (
    <>
      <div>
        Navbar
        {currentUser?.email && (
          <>
            <br />
            <button onClick={logout}>logout</button>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
