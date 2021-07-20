/*eslint-disable*/
import React from "react";

import { ThemeProvider, Grid } from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Header from "./Components/Header";
import theme from "./Theme/theme";
import FormExample from "./Pages/FormExample";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          {/* Components goes here. */}

          <FormExample />
        </Grid>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
