import React from "react";
import Postupak from "./postupak";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import "../../globals.scss";

function page() {
  return (
    <>
      <Card className="flex flex-col items-center glassmorph">
        <div className="flex justify-center items-center p-2">
          <Typography variant="h5">f(x,y)=</Typography>
          <TextField variant="outlined" label="f(x,y)="></TextField>
        </div>
        <div className="flex flex-row p-2">
          <TextField
            variant="outlined"
            label="X"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Y"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </div>
      </Card>
    </>
  );
}

export default page;
