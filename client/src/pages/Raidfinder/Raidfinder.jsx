import React from "react";
import CharactersTable from "./CharactersTable";
import "./Raidfinder.css";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"


const dummyCharacters = {
  players: [
      { id: "0", name: "bob" },
      { id: "1", name: "bob" },
      { id: "2", name: "bob" },
      { id: "3", name: "bob" },
      { id: "4", name: "bob" },
      { id: "5", name: "bob" }
  ],
  columns: {
      Characters: {
          id: "Characters",
          title: "Characters",
          taskIds: [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5"
          ]
      },
      Party: {
          id: "Party",
          title: "Party",
          taskIds: []
      }
  },
  columnIds: ["Characters", "Party"]
};

export default function SelectedMenu() {
  return (
    <div className="Raidsfinder">
      <div className="tables-container">
        <span className="CharactersTable">
          <h2>Characters</h2>
          <CharactersTable />
        </span>
        <span className="PartyTable">
          <h2>Current Party</h2>
          <CharactersTable />
        </span>
      </div>
      <button>Submit Party</button>
    </div>
  );
};
