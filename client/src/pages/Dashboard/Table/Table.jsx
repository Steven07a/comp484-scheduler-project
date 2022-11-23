import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container"
import "./Table.css";

function createData(name, characterclass, gearscore, server) {
  return { name, characterclass, gearscore, server };
}

const rows = [
  createData("Artsaya", "Wardancer", 1480, "NAE-Regulus"),
  createData("Areitsu", "Soulfist", 1445, "NAE-Regulus"),
  createData("bomb", "Soulfist", 2, "NAE-Regulus")
];


export default function BasicTable() {
  return (
    <Container fixed>
      <div className="Table">
         <h3>User Profile</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "10px 13px 20px 0px #80808029", borderColor: 'green' }}
        >
          <Table sx={{ minWidth: 650, minHeight:300, backgroundColor: '#BDBBFF',}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize: "30px", fontStyle: "italic"}}>Character List</TableCell>
                <TableCell sx={{fontSize: "30px", fontStyle: "italic", align:"left"}}>Class</TableCell>
                <TableCell sx={{fontSize: "30px", fontStyle: "italic", align:"left"}}>Gear Score</TableCell>
                <TableCell sx={{fontSize: "30px", fontStyle: "italic", align:"left"}}>Server</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
                >
                  <TableCell sx={{component:"th", scope:"row", fontSize: "30px" }}>
                    {row.name}
                  </TableCell>
                  <TableCell sx={{fontSize: "30px", align:"left"}}>{row.characterclass}</TableCell>
                  <TableCell sx={{fontSize: "30px", align:"left"}}>{row.gearscore}</TableCell>
                  <TableCell sx={{fontSize: "30px", align:"left"}}>{row.server}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
     </Container> 
  );
}