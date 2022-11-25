import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { createData } from '../RosterTable/RosterTable';
import Checkbox from '@mui/material/Checkbox';


export default function SelectVariants() {
  const [classes, setClasses] = React.useState("");
  const [servers, setServers] = React.useState("");
  const [time, setTime] = React.useState("");

  const handleChange1 = (event) => {
    setClasses(event.target.value);
  };
  const handleChange2 = (event) => {
    setServers(event.target.value);
  };
  const handleChange3 = (event) => {
    setTime(event.target.value);
  };

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    autoComplete="off"
  >
    <div>
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
      <h3>Time Availability</h3>
      <FormControl variant="standard" sx={{minWidth: 200 }}>
        <Select
          labelId="Time-label"
          id="Time-pick"
          value={time}
          onChange={handleChange3}
          label="Time"
        >
          <MenuItem value="1">00:00 - 04:00</MenuItem>
          <MenuItem value="2">04:00 - 08:00</MenuItem>
          <MenuItem value="3">08:00 - 12:00</MenuItem>
          <MenuItem value="4">12:00 - 16:00</MenuItem>
          <MenuItem value="5">16:00 - 20:00</MenuItem>
          <MenuItem value="6">20:00 - 00:00</MenuItem>
        </Select>
      </FormControl>
     </div>
    </Box>
  )
}
