import * as React from 'react';
import '../Dashboard.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Scheduler } from "@aldabil/react-scheduler";
import { Button } from "@mui/material";
import { createData } from '../RosterTable/RosterTable';
import Checkbox from '@mui/material/Checkbox';


export default function SelectVariants() {
  const [classes, setClasses] = React.useState("");
  const [servers, setServers] = React.useState("");
  const [time, setTime] = React.useState("");
  const [dayNames, setDayNames] = React.useState([]);
  const [hourTimes, setHours] = React.useState([]);
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};  

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const hours = [
  '00:00 - 04:00',
  '04:00 - 08:00',
  '08:00 - 12:00',
  '12:00 - 16:00',
  '16:00 - 20:00',
  '20:00 - 24:00',
];

  const handleChange1 = (event) => {
    setClasses(event.target.value);
  };
  const handleChange2 = (event) => {
    setServers(event.target.value);
  };
  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setHours(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setDayNames(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function getStyles(days, weekDays, theme) {
    return {
      fontWeight:
        dayNames.indexOf(days) === -1
    };
  }function getStyles(hours, theme) {
    return {
      fontWeight:
        hourTimes.indexOf(hours) === -1
    };
  }

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    autoComplete="off"
  >
    <div>
    <h3>Enter your Roster Information here.</h3>
    <TextField id="standard-basic" label="Character Name" variant="standard" />
      <FormControl variant="standard" sx={{mx: 'auto', minWidth: 120 }}>
        <InputLabel id="Class">Class</InputLabel>
        <Select
          labelId="Class-label"
          id="Class-pick"
          value={classes}
          onChange={handleChange1}
          label="Classes"
        >
          <MenuItem value="Paladin">Paladin</MenuItem>
          <MenuItem value="Gunlancer">Gunlancer</MenuItem>
          <MenuItem value="Destroyer">Destroyer</MenuItem>
          <MenuItem value="Berserker">Berserker</MenuItem>
          <MenuItem value="Bard">Bard</MenuItem>
          <MenuItem value="Sorceress">Sorceress</MenuItem>
          <MenuItem value="Arcanist">Arcanist</MenuItem>
          <MenuItem value="Deathblade">Deathblade</MenuItem>
          <MenuItem value="Shadowhunter">Shadowhunter</MenuItem>
          <MenuItem value="Reaper">Reaper</MenuItem>
          <MenuItem value="Artillerist">Artillerist</MenuItem>
          <MenuItem value="Deadeye">Deadeye</MenuItem>
          <MenuItem value="Gunslinger">Gunslinger</MenuItem>
          <MenuItem value="Sharpshooter">Sharpshooter</MenuItem>
          <MenuItem value="Glavier">Glavier</MenuItem>
          <MenuItem value="Scrapper">Scrapper</MenuItem>
          <MenuItem value="Striker">Striker</MenuItem>
          <MenuItem value="Wardancer">Wardancer</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Gear Score" variant="standard" />
      <FormControl variant="standard" sx={{minWidth: 100 }}>
        <InputLabel id="Server">Server</InputLabel>
        <Select
          labelId="Server-label"
          id="Server-pick"
          value={servers}
          onChange={handleChange2}
          label="Server"
        >
          <MenuItem value="NAE">North America East</MenuItem>
          <MenuItem value="NAW">North America West</MenuItem>
          <MenuItem value="EU">Europe</MenuItem>
          <MenuItem value="SA">South America</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div class="Time">
      <h3>Availability</h3>
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="hours-label">Hours</InputLabel>
      <Select
          labelId="multiple-hours"
          id="multiple-hours"
          multiple
          value={hourTimes}
          onChange={handleChange3}
          input={<OutlinedInput label="Days/Hours" />}
          MenuProps={MenuProps}
        >
          {hours.map((hours) => (
            <MenuItem
              key={hours}
              value={hours}
              style={getStyles(hours, hourTimes, theme)}
            >
              {hours}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="day-label">Days</InputLabel>
        <Select
          labelId="multiple-label"
          id="multiple-days"
          multiple
          value={dayNames}
          onChange={handleChange4}
          input={<OutlinedInput label="Days/Hours" />}
          MenuProps={MenuProps}
        >
          {days.map((days) => (
            <MenuItem
              key={days}
              value={days}
              style={getStyles(days, dayNames, theme)}
            >
              {days}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


     </div>
    </Box>
  )
}