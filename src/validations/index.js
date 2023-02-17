import * as Yup from "yup";

export const employeeForm = Yup.object({
  firstName: Yup.string().min(3).max(25).required("Please enter your name"),
  lastName: Yup.string().min(3).max(25).required("Please enter your name"),
  phoneNumber: Yup.number().min(3).max(25).required("Please enter your name"),
  gender: Yup.string().min(2).max(25).required("Please enter your name"),
  emailAddress: Yup.string().email().required("Please enter your email"),
  joinedDate: Yup.string().min(3).max(25).required("Please enter your name"),
});
