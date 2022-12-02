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

  const currentDate = new Date().toLocaleDateString('en-US')

  function CreateMiniTable(row, raidinfoo, raidtimeslot) {
    return <MiniPartyTable rows={row} raidinfo={raidinfoo} raidtimeslot={raidtimeslot} />
  }

  return (
    <div className="CurrentParties">
      <h1>My Current Parties</h1>
      <div className="tables-container">
        <MiniPartyTable rows={row} raidinfo="Boss Monster Raid 1" raidtimeslot={currentDate} />
        <MiniPartyTable rows={row2} raidinfo="Epic angry Boss Monster Raid" raidtimeslot={currentDate} />
        <MiniPartyTable rows={row3} raidinfo="Gahlee" raidtimeslot={currentDate} />
        <MiniPartyTable rows={row4} raidinfo="Raid raid" raidtimeslot={currentDate} />
        <MiniPartyTable rows={row2} raidinfo="Epic angry Boss Monster Raid" raidtimeslot={currentDate} />
        <MiniPartyTable rows={row} raidinfo="Boss Monster Raid 2" raidtimeslot={currentDate} />
      </div>
    </div>
  );
};
