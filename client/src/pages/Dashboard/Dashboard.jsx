import React from "react";
import RosterTable from "./RosterTable/RosterTable";
import Input from "./Input/Input"
import "./Dashboard.css";
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Apps from '@mui/icons-material/Apps';
import { Link } from "react-router-dom";

export default function SelectedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const createHandleClose = (index) => () => {
    setAnchorEl(null);
    if (typeof index === 'number') {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Input />
      <RosterTable />
    </div>
  );
};
