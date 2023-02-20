import React from "react";
import Dashboard from "./views/dashboard/Dashboard";
import LoginForm from "./views/loginScreen/LoginForm";

function App() {
  console.log(sessionStorage.getItem("user"));
  return (
    // <SampleCounter/>
    <>{sessionStorage.getItem("user") ? <Dashboard /> : <LoginForm />}</>
  );
}

export default App;
