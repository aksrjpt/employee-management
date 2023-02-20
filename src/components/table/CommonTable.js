import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

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
