import React, { useState } from "react";
import CommonDialog from "../../components/dialog/CommonDialog";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
} from "../../services/employeesApi";
import { useFormik } from "formik";
import { employeeForm } from "../../validations";

const theme = createTheme();

function AddEditEmployee({ type, rowData }) {
  const [open, setOpen] = useState(false);
  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  const initialValues = {
    firstName: type === "edit" ? rowData?.firstName : "",
    lastName: "edit" ? rowData?.lastName : "",
    phoneNumber: "edit" ? rowData?.phoneNumber : "",
    gender: "edit" ? rowData?.gender : "",
    emailAddress: "edit" ? rowData?.emailAddress : "",
    joinedDate: "edit" ? rowData?.joinedDate : "",
    userId: "edit" ? rowData?.userId : "",
    id: "edit" ? rowData?.id : "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      //   validationSchema: employeeForm,
      onSubmit: (values, action) => {
        if (type === "new") {
          delete values.id;
          delete values.userId;
          createEmployee(values);
        } else {
          updateEmployee(values);
          handleClickClose();
        }

        // action.resetForm();
      },
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {type === "edit" ? "Edit Employee" : "Add New"}
      </Button>
      <CommonDialog
        modalTitle={type}
        modalStatus={open}
        modalCloseFunc={handleClickClose}
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="form-error">{errors.firstName}</p>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoComplete="gender"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={values.joinedDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="joiningDate"
                    label="Joining Date"
                    name="joinedDate"
                    autoComplete="Joining-Date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={values.emailAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="emailAddress"
                    label="Email Address"
                    name="emailAddress"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    id="phoneNumber"
                    autoComplete="Phone Number"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </CommonDialog>
    </>
  );
}

export default AddEditEmployee;
