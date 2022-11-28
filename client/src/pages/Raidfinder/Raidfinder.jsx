import React from "react";
import CharactersTable from "./CharactersTable";
import PartyTable from "./PartyTable";
import "./Raidfinder.css";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

export default function SelectedMenu() {
  return (
    <div className="Raidsfinder">
      <div className="tables-container">
        <span className="CharactersTable">
          <h2>Characters</h2>
          <CharactersTable />
        </span>
        <span className="add-remove-buttons">
          <button>&rarr;</button>
          <button>&larr;</button>
        </span>
        <span className="PartyTable">
          <h2>Current Party</h2>
          <PartyTable />
        </span>
      </div>
      <button>Submit Party</button>
    </div>
  );
};
