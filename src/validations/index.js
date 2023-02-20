import * as Yup from "yup";

export const employeeForm = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your First Name"),
  lastName: Yup.string().min(3).max(25).required("Please enter your Last Name"),
  phoneNumber: Yup.string()
    .min(8)
    .max(8)
    .required("Phone number should be 8 Digit"),
  gender: Yup.string().min(2).max(25).required("Please select the gender"),
  emailAddress: Yup.string().email().required("Please enter your email"),
  joinedDate: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your joining date"),
});
