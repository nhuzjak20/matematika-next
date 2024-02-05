"use client";

import React from "react";
import { useState } from "react";
import "../../globals.scss";
import { Card, TextField, Typography } from "@mui/material";

function Page() {
  const [vSmjer1, PromjenivSmjer1] = useState(0);
  const [vSmjer2, PromjenivSmjer2] = useState(0);
  const [VTocka1, PromjeniVTocka1] = useState(0);
  const [VTocka2, PromjeniVTocka2] = useState(0);
  const [OrgTocka1, PromjeniOrgTocka1] = useState(0);
  const [orgTocka2, PromjeniOrgTocka2] = useState(0);
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
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <Typography variant="p">X</Typography>
              <TextField
                type="text"
                variant="filled"
                className="w-20"
              ></TextField>
            </div>
            <hr />
            <TextField type="text" variant="filled"></TextField>
          </div>
          <Typography variant="h5">=</Typography>
          <div>
            <Typography variant="p">Y</Typography>
            <TextField type="text" variant="filled"></TextField>
            <hr />
            <TextField type="text" variant="filled"></TextField>
          </div>
          <Typography variant="h5">=</Typography>
          <div>
            <Typography variant="p">Z</Typography>
            <TextField type="text" variant="filled"></TextField>
            <hr />
            <TextField type="text" variant="filled"></TextField>
          </div>
        </div>
        <div></div>
        <div></div>
      </Card>
    </>
  );
}

export default Page;
