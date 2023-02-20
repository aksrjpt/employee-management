import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
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
      <Button color="secondary" onClick={handleClickOpen}>
        <Delete />
      </Button>
      <CommonDialog
        modalTitle="Delete"
        modalStatus={open}
        modalCloseFunc={handleClickClose}
      >
        Are you sure, you want to delete
        <Button variant="outlined" onClick={deleteEmployeeHandle}>
          Delete
        </Button>
      </CommonDialog>
    </>
  );
}

export default DeleteEmployee;
