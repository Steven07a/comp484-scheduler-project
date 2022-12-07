import axios from "axios";
import React, {useState} from "react";
import { useEffect } from "react";
import Table from "../../components/Tables/Tables"
import "./Raidfinder.css";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

export default function SelectedMenu() {
  const [party, setParty] = useState([]);
  const [possibleCharacters, setPossibleCharacters] = useState([]);
  function createData(
    user,
    name,
    characterclass,
    gearscore,
    server,
    timeslot
  ) {
    return { user, name, characterclass, gearscore, server, timeslot };
  }


  useEffect(() => {
    const fetchPossibleCharactersData = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/userCharacters/getAllCharacters");
        setPossibleCharacters(res.data);
      } catch (err) {
        console.log(err);
      }
    
    }
    fetchPossibleCharactersData();
  }, [])

  const row2=[];

  return (
    <div className="Raidsfinder">
      <div className="tables-container">
        <span className="CharactersTable">
          <h2>Characters</h2>
          <Table rows={possibleCharacters}/>
        </span>
        <span className="add-remove-buttons">
          <button>&rarr;</button>
          <button>&larr;</button>
        </span>
        <span className="PartyTable">
          <h2>Current Party</h2>
          <Table rows={row2}/>
        </span>
      </div>
      <button>Submit Party</button>
    </div>
  );
};
