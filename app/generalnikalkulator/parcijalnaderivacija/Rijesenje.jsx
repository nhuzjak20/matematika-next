import React from "react";

import MyAppBar from "@/app/MyAppBar";

import { Typography } from "@mui/material";
var nerdamer = require("nerdamer");
require("nerdamer/Calculus");

function Rijesenje({ eq, varijabla }) {
  var rezultat = "";
  //console.log(nerdamer.diff(eq, varijabla).toString());
  try {
    rezultat = nerdamer.diff(eq, varijabla).toString();
  } catch (error) {
    console.log("Error je", error);
  }
  return (
    <>
      <Typography variant="h5" color={"black"}>
        {rezultat}
      </Typography>
    </>
  );
}

export default Rijesenje;
