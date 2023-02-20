import React, { useState } from "react";
import "./loginForm.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";

const theme = createTheme();

function LoginForm() {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payLoad = {
      user: data.get("userName"),
      password: data.get("password"),
    };

    fetch("http://localhost:5004/users/" + payLoad.user)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //console.log(resp)
        if (Object.keys(resp).length === 0) {
          setIsError(true);
          setErrorMessage("User Not Found");
        } else {
          if (resp.password === payLoad.password) {
            setIsError(false);
            setErrorMessage("");
            sessionStorage.setItem("user", resp.id);
            window.location.reload();
          } else {
            setIsError(true);
            setErrorMessage("Please Enter valid credentials");
          }
        }
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage("Login Failed due to :" + err.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isError && <Alert severity="error">{errorMessage}</Alert>}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Email Address"
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm;
