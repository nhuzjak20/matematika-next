"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import { useState } from "react";
import Postupak from "./postupak";
import Link from "next/link";
import {
  Card,
  TextField,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";

import "../../globals.scss";

function Page() {
  const [eq, ChangeEq] = useState("");
  const [tX, ChangeTX] = useState(0);
  const [tY, ChangeTY] = useState(0);
  const [rijeseno, Prepravi] = useState(false);
  return (
    <>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <Card className="flex flex-col items-center glassy-background-white w-fit p-4 m-auto my-24">
        <div className="flex justify-center items-center p-2">
          <Typography variant="h5" color="black">
            f(x,y)= π
          </Typography>
          <TextField
            variant="filled"
            label="f(x,y)="
            className="w-64"
            onChange={(e) => ChangeEq(e.target.value)}
          ></TextField>
        </div>
        <div className="flex flex-row p-2 gap-2 justify-center">
          <TextField
            variant="filled"
            label="X"
            type="text"
            className=""
            InputLabelProps={{
              shrink: true,
              color: "primary",
            }}
            inputProps={{
              color: "white",
            }}
            onChange={(e) => ChangeTX(e.target.value)}
          ></TextField>
          <TextField
            variant="filled"
            label="Y"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => ChangeTY(e.target.value)}
          ></TextField>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <ButtonGroup>
            <Button
              onClick={() => {
                () => Prepravi(true);
              }}
            >
              Riješi
            </Button>
            <Button>Obriši</Button>
          </ButtonGroup>
          <div className="flex justify-between w-full gap-6">
            <Link href="/">
              <Button>Početna Stranica</Button>
            </Link>
            <Link href="/ispit">
              <Button>Ispitni Zadaci</Button>
            </Link>
          </div>
        </div>
        {rijeseno ? (
          <Postupak props={{ tx: tX, ty: tY, eq: eq }}></Postupak>
        ) : (
          <Typography variant="h3">
            {tX}, {tY}, {eq}
          </Typography>
        )}
      </Card>
    </>
  );
}

export default Page;
