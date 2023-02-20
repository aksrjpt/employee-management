import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { EmployeePageConstant } from "../../app/applicationConstants";
import CommonDialog from "../../components/dialog/CommonDialog";
import { useDeleteEmployeeMutation } from "../../services/employeesApi";

function DeleteEmployee({ type, rowID }) {
  const [open, setOpen] = useState(false);
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const deleteEmployeeHandle = () => {
    deleteEmployee(rowID);
  };

  return (
    <>
      <Button className="delete-icon" onClick={handleClickOpen}>
        <Delete />
      </Button>
      <CommonDialog
        modalTitle={EmployeePageConstant.DELETE_EMPLOYEE_TITLE}
        modalStatus={open}
        modalCloseFunc={handleClickClose}
      >
        {EmployeePageConstant.DELETE_EMPLOYE_ALERT}
        <div className="delete-button">
          <Button variant="outlined" onClick={deleteEmployeeHandle}>
            Delete
          </Button>
        </div>
      </CommonDialog>
    </>
  );
}

export default DeleteEmployee;
