import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Table from "../../components/Tables/Tables";
import { AuthContext } from "../../context/authContext";
import "./Raidfinder.css";
import { useNavigate } from "react-router-dom";

export default function SelectedMenu() {
  const [party, setParty] = useState([]);
  const [possibleCharacters, setPossibleCharacters] = useState([]);
  const [currentlySelected, setCurrentlySelected] = useState();
  const [partyName, setPartyName] = useState("");
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();

  // on page load get all characters and add them to a list
  useEffect(() => {
    const fetchPossibleCharactersData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/userCharacters/getAllCharacters"
        );
        setPossibleCharacters(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPossibleCharactersData();
  }, []);

  const handleChange = (e) => {
    setPartyName(e.target.value);
  }

  // on submit refreshes page if pushing party is possible
  const handleSubmit = async (e) => {
    e.preventDefault();
    let PartyInfo = {
      partyName: partyName,
      characters: [
        ...party
      ]
    }
    try {
      const res = await axios.post("http://localhost:3001/api/parties/makeParty", PartyInfo);
      navigate(0);
    } catch (err) {
      console.log(err)
    }
  }


  const moveToParty = async () => {
    // sets the party to be all characters currently selected
    setParty((current) => [
      ...current,
      ...possibleCharacters.filter((item) => currentlySelected.includes(item.name))
    ]
    );
    // sets possible characters to all characters except for those just moved
    setPossibleCharacters(
      possibleCharacters.filter(
        (item) => !currentlySelected.includes(item.name)
      )
    );

    // resets the currently selected characters
    setCurrentlySelected([]);
  };

  const moveOutOfParty = () => {
    // adds our current character list plus whatever characters are supposed to move back to possible characters list
    setPossibleCharacters((current) => [
      ...current,
      ...party.filter((item) => currentlySelected.includes(item.name)),
    ]);

    // whatever was not selected stays in the current party table
    setParty(party.filter((item) => !currentlySelected.includes(item.name)));

    // resets the currently selected characters
    setCurrentlySelected([]);
  };

  return (
    <div className="Raidsfinder">
      <div className="tables-container">
        <span className="CharactersTable">
          <h2>Characters</h2>
          <Table
            rows={possibleCharacters}
            setCurrentlySelected={setCurrentlySelected}
          />
        </span>
        <span className="add-remove-buttons">
          <button onClick={moveToParty}>&rarr;</button>
          <button onClick={moveOutOfParty}>&larr;</button>
        </span>
        <span className="PartyTable">
          <h2>Current Party</h2>
          <Table rows={party} setCurrentlySelected={setCurrentlySelected} />
        </span>
      </div>
      <div className="inputAndSubmit">
        <input onChange={handleChange} className="partyName" placeholder="Party name"></input>
        <button onClick={handleSubmit} className="submitButton">Submit Party</button>
      </div>
    </div>
  );
}
