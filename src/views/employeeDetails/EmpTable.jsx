import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
// import { useSelector, useDispatch } from "react-redux";
import AddEditEmployee from "./AddEditEmployee";
import CommonTable from "../../components/table/CommonTable";
import "./employeesStyles.css";

import {
  useEmployeeQuery,
  useAllEmployeesQuery,
} from "../../services/employeesApi";
import DeleteEmployee from "./DeleteEmployee";
import { employeeForm } from "../../validations";
import { Paper } from "@mui/material";
// import Title from '../charts/Title

export default function EmpTable({ isAdminUser }) {
  const { data, error, isLoading, isFetching, isSuccess } =
    useAllEmployeesQuery();

  const tableHeaders = (
    <TableRow>
      <TableCell>First Name</TableCell>
      <TableCell>Last Name</TableCell>
      <TableCell>Gender</TableCell>
      <TableCell>Joining Date</TableCell>
      <TableCell>Email</TableCell>
      <TableCell align="right">Phone</TableCell>
      {isAdminUser && <TableCell align="center">Actions</TableCell>}
    </TableRow>
  );

  const tableBody =
    isSuccess &&
    data.map((employee) => (
      <TableRow key={employee.id}>
        <TableCell>{employee.firstName}</TableCell>
        <TableCell>{employee.lastName}</TableCell>
        <TableCell>{employee.gender}</TableCell>
        <TableCell>{employee.joinedDate}</TableCell>
        <TableCell>{employee.emailAddress}</TableCell>
        <TableCell align="right">{employee.phoneNumber}</TableCell>
        {isAdminUser && (
          <TableCell align="center" className="actionIcons">
            <AddEditEmployee type="edit" rowData={employee} />
            <DeleteEmployee type="delete" rowID={employee.id} />
          </TableCell>
        )}
      </TableRow>
    ));

  return (
    <React.Fragment>
      <AddEditEmployee type="new" />
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        {!isLoading && (
          <CommonTable
            tableHeaders={tableHeaders}
            tableBody={tableBody}
            size="small"
          />
        )}
      </Paper>
    </React.Fragment>
  );
}
