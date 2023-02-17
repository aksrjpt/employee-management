import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function CommonTable(props) {
  return (
    <>
      <Table size={props.size}>
        <TableHead>{props.tableHeaders}</TableHead>
        <TableBody>{props.tableBody}</TableBody>
      </Table>
    </>
  );
}

export default CommonTable;
