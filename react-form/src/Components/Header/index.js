import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">React Form</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
