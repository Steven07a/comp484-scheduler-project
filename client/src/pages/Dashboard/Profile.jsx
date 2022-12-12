import React, { useContext, useEffect } from "react";
import RosterTable from "./RosterTable/RosterTable";
import Input from "./Input/Input";
import "./Profile.css";
import "../../components/Navigation/Navbar.css";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

export default function SelectedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const {currentUser} = useContext(AuthContext)
  const open = Boolean(anchorEl);

  // input needs to tell me to refetch data
  const [characterList, setCharacterList] = React.useState([
    {
      name: "test",
      class: "pali",
      gearScore: 1738,
      server: "NAW",
    },
  ]);

  useEffect(() => {
    // make api call here
    const fetchData = async () => {
      console.log(currentUser)
      const res = await axios.post(
        "https://steven484.zhetus.com/api/userCharacters/getCharacters",
        currentUser
      );
      // const res = await axios.post(
      //   "http://localhost:3001/api/userCharacters/getCharacters",
      //   currentUser
      // );
      setCharacterList(res.data);
    }
    fetchData();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const createHandleClose = (index) => () => {
    setAnchorEl(null);
    if (typeof index === "number") {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <Input setCharacterList={setCharacterList} />
        <RosterTable characterList={characterList} />
      </div>
    </>
  );
}
