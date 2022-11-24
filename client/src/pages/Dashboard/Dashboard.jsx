import React from "react";
import RosterTable from "./RosterTable/RosterTable";
import Input from "./Input/Input"
import "./Dashboard.css";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <br></br>
      <br></br>
      <h2>Enter your Roster Information here.</h2>
      <Input />
      <RosterTable />
    </div>
  );
};

export default Dashboard;