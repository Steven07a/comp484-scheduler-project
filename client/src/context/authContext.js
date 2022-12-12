import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = async (inputs) => {
    const res = await axios.post(
      "https://steven484.zhetus.com/api/user/login",
      inputs
    );
    // const res = await axios.post(
    //   "http://localhost:3001/api/user/login",
    //   inputs
    // );
    setCurrentUser(res.data);
    console.log(res.data);
  };

  const logout = async () => {
    await axios.post("https://steven484.zhetus.com/api/user/logout");
    // await axios.post(
    //   "http://localhost:3001/api/user/logout"
    // );
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
