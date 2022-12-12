import React, { useEffect, useState, useContext } from "react";
import {AuthContext} from "../../context/authContext"
import MiniPartyTable from "../../components/Tables/MiniPartyTable"
import axios from "axios";
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

  const [Parties, setParties] = useState();
  const currentDate = new Date().toLocaleDateString('en-US')
  const { currentUser } = useContext(AuthContext);
  function CreateMiniTable(row, raidinfoo, raidtimeslot) {
    return <MiniPartyTable rows={row} raidinfo={raidinfoo} raidtimeslot={raidtimeslot} />
  }

  useEffect(() => {
    const getAllParties = async () => {
      console.log(currentUser.user);
      const res = await axios.post(
        "https://steven484.zhetus.com/api/parties/getAllParties",
        currentUser
      );
      // const res = await axios.post(
      //   "http://localhost:3001/api/parties/getAllParties",
      //   currentUser
      // );
      setParties(res.data);
    };

    getAllParties();
  }, [])

  // loops through all the parties returned to us and creates tables of those parties
  const renderParties = () => {
   console.log(Parties)
    return Parties.map((party, index) => (
      <>
      <MiniPartyTable rows={party.characters} raidinfo={party.partyName} raidtimeslot={currentDate}/>
      </>
    ))
  }

  return (
    <div className="CurrentParties">
      <h1>My Current Parties</h1>
      <div className="tables-container">
        {Parties && renderParties()}
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
