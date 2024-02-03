import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Typography, Switch } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

function MyAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="glassy-background-new" position="static">
          <Toolbar>
            <Typography variant="h6" color="white">
              Professional mod
            </Typography>
            <Switch></Switch>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MyAppBar;
