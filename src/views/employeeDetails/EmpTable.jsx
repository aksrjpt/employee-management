import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AddEditEmployee from "./AddEditEmployee";
import CommonTable from "../../components/table/CommonTable";
import "./employeesStyles.css";
import { useAllEmployeesQuery } from "../../services/employeesApi";
import DeleteEmployee from "./DeleteEmployee";
import { Paper, TablePagination, TextField } from "@mui/material";
import { EmployeePageConstant } from "../../app/applicationConstants";
import CircleLoader from "../../components/loader/CircleLoader";

export default function EmpTable({ isAdminUser }) {
  // const [searched, setSearched] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data, isLoading, isFetching, isSuccess } = useAllEmployeesQuery();

  let filteredRecord = data;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const requestSearch = (searchedVal) => {
  //   setSearched(searchedVal);
  //   filteredRecord = data.filter((row) => {
  //     return row.emailAddress.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  // };

  const tableHeaders = (
    <TableRow>
      <TableCell>{EmployeePageConstant.FIRST_NAME_FORM_LABLE}</TableCell>
      <TableCell>{EmployeePageConstant.LAST_NAME_FORM_LABLE}</TableCell>
      <TableCell>{EmployeePageConstant.GENDER_FORM_LABLE}</TableCell>
      <TableCell>{EmployeePageConstant.JOINING_DATE_FORM_LABLE}</TableCell>
      <TableCell>{EmployeePageConstant.EMAIL_FORM_LABLE}</TableCell>
      <TableCell align="right">
        {EmployeePageConstant.PHONE_NUMBER_FORM_LABLE}
      </TableCell>
      {isAdminUser && <TableCell align="center">Actions</TableCell>}
    </TableRow>
  );

  const tableBody =
    isSuccess &&
    filteredRecord
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((employee) => (
        <TableRow key={employee.id}>
          <TableCell>{employee.firstName}</TableCell>
          <TableCell>{employee.lastName}</TableCell>
          <TableCell>{employee.gender}</TableCell>
          <TableCell>{employee.joinedDate}</TableCell>
          <TableCell>{employee.emailAddress}</TableCell>
          <TableCell align="right">{employee.phoneNumber}</TableCell>
          {isAdminUser && (
            <TableCell align="center" className="actionIcons">
              <AddEditEmployee
                type={EmployeePageConstant.EDIT_TYPE}
                rowData={employee}
              />
              <DeleteEmployee
                type={EmployeePageConstant.DELETE_TYPE}
                rowID={employee.id}
              />
            </TableCell>
          )}
        </TableRow>
      ));

  return (
    <React.Fragment>
      {isFetching ? (
        <CircleLoader />
      ) : (
        <>
          {isAdminUser && <AddEditEmployee type={EmployeePageConstant.NEW_TYPE} /> }
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            {!isLoading && (
              <>
                {/* <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  value={searched}
                  onChange={(event) => requestSearch(event.target.value)}
                /> */}

                <CommonTable
                  tableHeaders={tableHeaders}
                  tableBody={tableBody}
                  size="small"
                />

                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={filteredRecord?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </>
            )}
          </Paper>{" "}
        </>
      )}
    </React.Fragment>
  );
}
