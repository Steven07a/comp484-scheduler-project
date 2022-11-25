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
       <Button
        sx={{ml: 'auto', minWidth: 100 }}
        id="menu-button"
        aria-controls={open ? 'selected-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="primary"
        onClick={handleClick}
        startDecorator={<Apps />}
      >
        Menu
      </Button>
      <Menu
        id="selected-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={createHandleClose()}
        aria-labelledby="menu-button"
      >
        <MenuItem
          {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(0)}
        >
          Party Finder
        </MenuItem>
        <MenuItem
          {...(selectedIndex === 1 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(1)}
        >
          Roster Profile
        </MenuItem>
        <MenuItem
          {...(selectedIndex === 2 && { selected: true, variant: 'soft' })}
          onClick={createHandleClose(2)}
        >
          Log Out
        </MenuItem>
      </Menu>
      <h1>Dashboard</h1>
      <br></br>
      <br></br>
      <h2>Enter your Roster Information here.</h2>
      <Input />
      <RosterTable />
    </div>
  );
};
