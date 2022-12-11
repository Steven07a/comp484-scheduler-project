import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";


export default function BasicTable(props) {
    //const [checked, setChecked] = React.useState(false);
    const menuItems = [{}];
    console.log(props);

    return (
            <div className="miniTable">
                <TableContainer
                    component={Container}
                    style={{
                        boxShadow: "10px 13px 20px 0px #80808029",
                        borderColor: "black",}}>
                    <div className="raidinfo">{props.raidinfo}</div>
                    <div className="raidtimeslot">{props.raidtimeslot}</div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell >
                                    User
                                </TableCell>
                                <TableCell >
                                    Character
                                </TableCell>
                                <TableCell
                                >
                                    Class
                                </TableCell>
                                <TableCell
                                >
                                    Gear Score
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ color: "white" }}>
                            {props.rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell
                                    >
                                        {row.user}
                                    </TableCell>
                                    <TableCell
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell >
                                        {row.characterclass}
                                    </TableCell>
                                    <TableCell >
                                        {row.gearscore}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <button>Edit Party</button>
                </TableContainer>
            </div>
    );
}
