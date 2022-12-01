import React from "react";
import Table from "../../components/Tables/Tables"
import "./Raidfinder.css";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

export default function SelectedMenu() {
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
  // all of this would be imported from db
  const row = [
    createData("Arts", "Artsaya", "Wardancer", 1480, "NAE", "Monday-Thurs 3+"),
    createData("Arts", "Areitsu", "Soulfist", 1445, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
    createData("bunbohue", "bomb", "Soulfist", 2, "NAE"),
  ];
  const row2=[];

  return (
    <div className="Raidsfinder">
      <div className="tables-container">
        <span className="CharactersTable">
          <h2>Characters</h2>
          <Table rows={row}/>
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
