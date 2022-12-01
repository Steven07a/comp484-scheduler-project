import React from "react";
import Table from "../../components/Tables/Tables"
import MiniPartyTable from "../../components/Tables/MiniPartyTable"
import "./CurrentParties.css";

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
    createData("Arts", "Artsaya", "Wardancer", 1480),
    createData("Arts", "Areitsu", "Soulfist", 1445),
    createData("Arts", "Areitsu", "Soulfist", 1445),
    createData("bunbohue", "bomb", "Soulfist", 2),
    createData("bunbohue", "bomb", "Soulfist", 2),
    createData("bunbohue", "bomb", "Soulfist", 2)
  ];
  const row2 = [
    createData("Arts", "Artsaya", "Wardancer", 1480),
    createData("Arts", "Areitsu", "Soulfist", 1445),
    createData("bunbohue", "bomb", "Soulfist", 2),
    createData("bunbohue", "bomb", "Soulfist", 2)
  ];
  const row3 = [
    createData("Arts", "Artsaya", "Wardancer", 1480),
    createData("Arts", "Areitsu", "Soulfist", 1445),
    createData("bunbohue", "bomb", "Soulfist", 2),
    createData("bunbohue", "bomb", "Soulfist", 2)
  ];
  const row4 = [
    createData("Arts", "Artsaya", "Wardancer", 1480),
    createData("Arts", "Areitsu", "Soulfist", 1445)
  ];

  return (
    <div className="CurrentParties">
      <h1>My Current Parties</h1>
      <div className="tables-container">
        <span className="CharactersTable">
          <Table rows={row} />
          <Table rows={row2} />
          <Table rows={row3} />
          <Table rows={row4} />
        </span>
      </div>
      <button>Submit Party</button>
    </div>
  );
};
