import React from "react";

import Router from "./Router";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App(props) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router />
      </LocalizationProvider>
    </>
  );
}

export default App;
