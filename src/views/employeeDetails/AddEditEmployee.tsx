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
import Title from "../charts/Title";
import {
  EmployeeFormInitialValues,
  EmployeePageConstant,
} from "../../app/applicationConstants";

const theme = createTheme();

function AddEditEmployee(props: any) {
  const { type, rowData } = props;
  const [open, setOpen] = useState(false);
  const [createEmployee] = useCreateEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  const initialValues: Employee = EmployeeFormInitialValues(type, rowData);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: employeeForm,
      onSubmit: (values: Employee, action) => {
        if (type === "new") {
          createEmployee(values);
          handleClickClose();
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
          <Title>{EmployeePageConstant.PAGE_TITLE}</Title>
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
        modalTitle={
          type === EmployeePageConstant.NEW_TYPE
            ? EmployeePageConstant.ADD_NEW_EMPLOYEE_TITLE
            : EmployeePageConstant.EDIT_EMPLOYEE_TITLE
        }
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
                    label={EmployeePageConstant.FIRST_NAME_FORM_LABLE}
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
                    label={EmployeePageConstant.LAST_NAME_FORM_LABLE}
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="form-error">{errors.lastName}</p>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    {/* <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel> */}
                    <RadioGroup
                      row
                      id="gender"
                      name="gender"
                      defaultValue="male"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio size="small" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio size="small" />}
                        label="Female"
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
                    label={EmployeePageConstant.JOINING_DATE_FORM_LABLE}
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
                    label={EmployeePageConstant.EMAIL_FORM_LABLE}
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
                    label={EmployeePageConstant.PHONE_NUMBER_FORM_LABLE}
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
