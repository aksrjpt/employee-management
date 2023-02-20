export const EmployeeFormInitialValues = (type, rowData) => ({
  firstName: type === "edit" ? rowData?.firstName : "",
  lastName: type === "edit" ? rowData?.lastName : "",
  phoneNumber: type === "edit" ? rowData?.phoneNumber : "",
  gender: type === "edit" ? rowData?.gender : "male",
  emailAddress: type === "edit" ? rowData?.emailAddress : "",
  joinedDate: type === "edit" ? rowData?.joinedDate : "",
  userId: type === "edit" ? rowData?.userId : "",
  id: type === "edit" ? rowData?.id : "",
});

export class EmployeePageConstant {
  static PAGE_TITLE = "Employees List";

  static EDIT_TYPE = "edit";
  static NEW_TYPE = "new";
  static DELETE_TYPE = "delete";

  //   Titles
  static ADD_NEW_EMPLOYEE_TITLE = "Add New Employee";
  static EDIT_EMPLOYEE_TITLE = "Edit Employee";
  static DELETE_EMPLOYEE_TITLE = "Delete Employe";

  // Warrning or Notification Messages
  static DELETE_EMPLOYE_ALERT = "Are you sure, you want to Delete ?";

  //   Form Lables
  static FIRST_NAME_FORM_LABLE = "First Name";
  static LAST_NAME_FORM_LABLE = "Last Name";
  static GENDER_FORM_LABLE = "Gender";
  static PHONE_NUMBER_FORM_LABLE = "Phone Number";
  static EMAIL_FORM_LABLE = "Email Address";
  static JOINING_DATE_FORM_LABLE = "Joining Date";
}

export class ChartPageConstants {
  static PAGE_TITLE = "Employees joined in last 10 years";
}
