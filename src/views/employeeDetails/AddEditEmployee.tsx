import React, { useState } from "react";
import CommonDialog from "../../components/dialog/CommonDialog";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
} from "../../services/employeesApi";
import { useFormik } from "formik";
import { employeeForm } from "../../validations";
import { Employee } from "../../models/employees.model";
import { Add, Edit } from "@mui/icons-material";
import "./employeesStyles.css";
import InputField from "../../components/formElements/InputField";
import CommonDatePicker from "../../components/formElements/CommonDatePicker";
import CommonEmailInput from "../../components/formElements/CommonEmailInput";
import CommonPhoneInput from "../../components/formElements/CommonPhoneInput";

const theme = createTheme();

function AddEditEmployee(props: any) {
  const { type, rowData } = props;
  const [open, setOpen] = useState(false);
  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  const initialValues: Employee = {
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
      validationSchema: employeeForm,
      onSubmit: (values: Employee, action) => {
        if (type === "new") {
          createEmployee(values);
        } else {
          updateEmployee(values);
          handleClickClose();
        }
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
      {type === "edit" ? (
        <Button color="primary" onClick={handleClickOpen}>
          <Edit />
        </Button>
      ) : (
        <div className="add-new-buttom">
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            endIcon={<Add />}
          >
            Add New Employee
          </Button>
        </div>
      )}
      <CommonDialog
        modalTitle={type === "new" ? "Add New Employee" : "Edit Employee"}
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
                  <InputField
                    value={values.firstName}
                    blurFun={handleBlur}
                    changeFunc={handleChange}
                    nameID="firstName"
                    label={"First Name"}
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="form-error">{errors.firstName}</p>
                  ) : null}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <InputField
                    value={values.lastName}
                    blurFun={handleBlur}
                    changeFunc={handleChange}
                    nameID="lastName"
                    label={"Last Name"}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="form-error">{errors.lastName}</p>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      id="gender"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                  {errors.gender && touched.gender ? (
                    <p className="form-error">{errors.gender}</p>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CommonDatePicker
                    value={values.joinedDate}
                    blurFun={handleBlur}
                    changeFunc={handleChange}
                    nameID="joinedDate"
                    label={"Joining Date"}
                  />
                  {errors.joinedDate && touched.joinedDate ? (
                    <p className="form-error">Please enter Date</p>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <CommonEmailInput
                    value={values.emailAddress}
                    blurFun={handleBlur}
                    changeFunc={handleChange}
                    nameID="emailAddress"
                    label={"Email Address"}
                  />
                  {errors.emailAddress && touched.emailAddress ? (
                    <p className="form-error">{errors.emailAddress}</p>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <CommonPhoneInput
                    value={values.phoneNumber}
                    blurFun={handleBlur}
                    changeFunc={handleChange}
                    nameID="phoneNumber"
                    label={"Phone Number"}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <p className="form-error">{errors.phoneNumber}</p>
                  ) : null}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </CommonDialog>
    </>
  );
}

export default AddEditEmployee;
