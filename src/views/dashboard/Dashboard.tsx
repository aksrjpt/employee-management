import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import EmployeeCount from "../charts/EmployeeCount";
import EmpTable from "../employeeDetails/EmpTable";
import Navbar from "../navbar/Navbar";
import LeftDrawer from "./LeftDrawer";
import { useUserDataQuery } from "../../services/usersApi";
import NoAccessPage from "../NoAccessPage";

const mdTheme = createTheme();

const sessionUser: any = sessionStorage.getItem("user");

const Dashboard = () => {
  if (sessionUser === null) {
    window.location.reload();
  }

  const [open, setOpen] = React.useState(false);
  let isAdmin = false;
  const { data, isSuccess } = useUserDataQuery(sessionUser);

  if (data && isSuccess) {
    isAdmin = data.isAdmin;
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <Navbar open={open} toggleFunc={toggleDrawer} />
        <LeftDrawer
          open={open}
          toggleFunc={toggleDrawer}
          isAdminUser={isAdmin}
        />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
            <Routes>
              <Route
                path="/"
                element={isAdmin ? <EmployeeCount /> : <NoAccessPage />}
              />
              <Route index element={<EmpTable isAdminUser={isAdmin} />} />
              <Route
                path="chart"
                element={isAdmin ? <EmployeeCount /> : <NoAccessPage />}
              />
              <Route path="*" element={<NoAccessPage />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
