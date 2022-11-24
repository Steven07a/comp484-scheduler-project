import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { spacing } from '@mui/system';


export default function SelectVariants() {
  const [classes, setClasses] = React.useState('');
  const [servers, setServers] = React.useState('');

  const handleChange = (event) => {
    setClasses(event.target.var);
    setServers(event.target.var)
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
      <FormControl variant="standard" sx={{mx: 'auto', minWidth: 100 }}>
        <InputLabel id="Class">Class</InputLabel>
        <Select
          labelId="Class-label"
          id="Class-pick"
          value={classes}
          onChange={handleChange}
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
          onChange={handleChange}
          label="Server"
        >
          <MenuItem value="NAE">North America East</MenuItem>
          <MenuItem value="NAW">North America West</MenuItem>
          <MenuItem value="EU">Europe</MenuItem>
          <MenuItem value="SA">South America</MenuItem>
        </Select>
      </FormControl>
      </div>
    </Box>
  );
}