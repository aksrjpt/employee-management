import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getEmployees } from "../../redux/features/employeSlice";
// import { useSelector, useDispatch } from "react-redux";
import AddEditEmployee from "./AddEditEmployee";
import CommonTable from "../../components/table/CommonTable";

import {
  useEmployeeQuery,
  useAllEmployeesQuery,
} from "../../services/employeesApi";
import DeleteEmployee from "./DeleteEmployee";
import { employeeForm } from "../../validations";
// import Title from '../charts/Title

export default function EmpTable() {
  const { data, error, isLoading, isFetching, isSuccess } =
    useAllEmployeesQuery();

  // const { loading, employees } = useSelector((state) => ({ ...state.app }));
  // const dispatch = useDispatch();

  const tableHeaders = (
    <TableRow>
      <TableCell>First Name</TableCell>
      <TableCell>Last Name</TableCell>
      <TableCell>Gender</TableCell>
      <TableCell>Joining Date</TableCell>
      <TableCell>Email</TableCell>
      <TableCell align="right">Phone</TableCell>
      <TableCell align="center">Actions</TableCell>
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
        <TableCell align="center">
          <AddEditEmployee type="edit" rowData={employee} />
          <DeleteEmployee type="delete" rowID={employee.id} />
        </TableCell>
      </TableRow>
    ));

  return (
    <React.Fragment>
      <AddEditEmployee type="new" />
      {!isLoading && (
        <CommonTable
          tableHeaders={tableHeaders}
          tableBody={tableBody}
          size="small"
        />
      )}
    </React.Fragment>
  );
}
