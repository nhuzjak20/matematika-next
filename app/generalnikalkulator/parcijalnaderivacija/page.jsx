"use client";

import React from "react";
import MyAppBar from "@/app/MyAppBar";

import {
  TextField,
  Button,
  IconButton,
  CloseIcon,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Rijesenje from "./Rijesenje";

function Page() {
  const [open, changeOpen] = useState(false);
  const [variable, changeVar] = useState("");
  const [eq, changeEq] = useState("");
  const [izracunato, promjeniIzracunato] = useState(false);
  const result = () => {
    return <Rijesenje eq={eq} varijabla={variable}></Rijesenje>;
  };
  const action = (
    <>
      <Typography variant="h5">
        Varijabla
        {variable}
        ne postoji u jednadžbi
      </Typography>
    </>
  );

  return (
    <>
      <MyAppBar></MyAppBar>
      <div className="glassy-background-white w-1/2 p-3 m-auto my-48 w-fit">
        <div className="flex flex-col items-center m-auto justify-evenly justify-items-center ">
          <div className="flex flex-row ">
            <TextField
              className="basis-1/5 m-2"
              label="Varijabla"
              onChange={(e) => changeVar(e.target.value)}
            ></TextField>
            <TextField
              label="Jednadžba"
              className="basis-4/5 m-2"
              onChange={(e) => changeEq(e.target.value)}
            ></TextField>
          </div>
          <div>
            <Button
              variant="outlined"
              onClick={() => {
                if (eq.includes(variable)) {
                  promjeniIzracunato(true);
                } else {
                  changeOpen(true);
                }
              }}
            >
              Izračunaj
            </Button>
          </div>
          <div className="flex flex-row justify-center">
            {izracunato ? (
              <Rijesenje eq={eq} varijabla={variable}></Rijesenje>
            ) : null}
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={300} action={action}></Snackbar>
    </>
  );
}

export default Page;
