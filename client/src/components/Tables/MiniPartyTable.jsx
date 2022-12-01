import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";


export default function BasicTable(props, raidInfo) {
    //const [checked, setChecked] = React.useState(false);
    const menuItems = [{}];

    return (
        <Container fixed>
            <div className="miniTable">
                <div>{raidInfo}</div>
                <TableContainer
                    component={Container}
                    style={{
                        boxShadow: "10px 13px 20px 0px #80808029",
                        borderColor: "green",
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: "20px", fontStyle: "italic" }}>
                                    User
                                </TableCell>
                                <TableCell sx={{ fontSize: "20px", fontStyle: "italic" }}>
                                    Character
                                </TableCell>
                                <TableCell
                                    sx={{ fontSize: "20px", fontStyle: "italic", align: "left" }}
                                >
                                    Class
                                </TableCell>
                                <TableCell
                                    sx={{ fontSize: "20px", fontStyle: "italic", align: "left" }}
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
                                            sx={{ component: "th", scope: "row", fontSize: "20px" }}
                                        >
                                            {row.user}
                                        </TableCell>
                                        <TableCell
                                            sx={{ component: "th", scope: "row", fontSize: "20px" }}
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: "20px", align: "left" }}>
                                            {row.characterclass}
                                        </TableCell>
                                        <TableCell sx={{ fontSize: "20px", align: "left" }}>
                                            {row.gearscore}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
}
