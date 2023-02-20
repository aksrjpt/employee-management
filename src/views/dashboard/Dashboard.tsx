import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import EmployeeCount from "../charts/EmployeeCount";
// import Deposits from './Deposits';
import EmpTable from "../employeeDetails/EmpTable";
import Navbar from "../navbar/Navbar";
import LeftDrawer from "./LeftDrawer";
import CommonBarChart from "../../components/charts/CommonBarChart";
import { useUserDataQuery } from "../../services/usersApi";
import { useSelector } from "react-redux";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mdTheme = createTheme();

const sessionUser: any = sessionStorage.getItem("user");

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [isAdminUser, setIsAdminUser] = React.useState(false);
  let isAdmin = false;
  const { data, error, isLoading, isFetching, isSuccess } =
    useUserDataQuery(sessionUser);

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
              <Route path="/" element={<EmployeeCount />} />
              <Route index element={<EmpTable isAdminUser={isAdmin} />} />
              <Route path="chart" element={<EmployeeCount />} />
              <Route path="*" element={<EmployeeCount />} />
            </Routes>
          </Container>
          {/* 
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <EmployeeCount />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                </Paper>
              </Grid>
              <CommonBarChart />
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <EmpTable />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
