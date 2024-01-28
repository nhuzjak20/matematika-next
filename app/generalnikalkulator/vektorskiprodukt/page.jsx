"use client";

import React, { useState } from "react";
import { Accordion, AccordionSummary, AppBar } from "@mui/material";
import "../../globals.scss";
import Link from "next/link";
import Rijesenje from "./Rijesenje";
import { Button, Menu } from "@mui/material";

export default function GeneralKalkulator() {
  const [rijesenje, PromjeniRijesenje] = useState(0);
  const [V11, ChangeV11] = useState(0);
  const [V12, ChangeV12] = useState(0);
  const [V13, ChangeV13] = useState(0);
  const [V21, ChangeV21] = useState(0);
  const [V22, ChangeV22] = useState(0);
  const [V23, ChangeV23] = useState(0);
  let vektori = {
    v11: V11,
    v12: V12,
    v13: V13,
    v21: V21,
    v22: V22,
    v23: V23,
    rijesenje: rijesenje,
  };

  return (
    <div>
      <AppBar position="static" className="flex flex-row justify-evenly">
        <Link href="/generalnikalkulator">
          <Button variant="contained">Nazad</Button>
        </Link>
        <Link href="/">
          <Button variant="contained">Početna Stranica</Button>
        </Link>
      </AppBar>
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
      <div className="glassy-background w-1/2 p-3 m-auto my-48">
        <div className="flex flex-col items-center m-auto justify-evenly justify-items-center">
          <div className="flex flex-row space-evenly items-center justify-center ">
            <h4>Vektor A = (</h4>
            <input
              type="number"
              value={V11}
              onChange={(e) => ChangeV11(e.target.value)}
              name="VektorA"
              id=""
            />
            <h4>,</h4>
            <input
              type="number"
              value={V12}
              onChange={(e) => ChangeV12(e.target.value)}
              name="VektorA"
              id=""
            />
            <h4>,</h4>
            <input
              type="number"
              value={V13}
              onChange={(e) => ChangeV13(e.target.value)}
              name="VektorA"
              id=""
            />
            <h4>)</h4>
          </div>
          <div className="flex flex-row space-evenly items-center justify-center ">
            <h4>Vektor B = (</h4>
            <input
              type="number"
              value={V21}
              onChange={(e) => ChangeV21(e.target.value)}
              name="VektorB"
              id=""
            />
            <h4>,</h4>
            <input
              color="black"
              type="number"
              value={V22}
              onChange={(e) => {
                ChangeV22(e.target.value);
              }}
              name="VektorB"
              id=""
            />
            <h4>,</h4>
            <input
              type="number"
              value={V23}
              onChange={(e) => ChangeV23(e.target.value)}
              name="VektorB"
              id=""
            />
            <h4>)</h4>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                PromjeniRijesenje(0);
                PromjeniRijesenje(1);
              }}
            >
              Izračunaj
            </Button>
          </div>
        </div>

        <div className=" m-auto">
          <Accordion>
            <AccordionSummary>
              {rijesenje ? <p>Riješenje</p> : <p>Unesi riješenje</p>}
            </AccordionSummary>
            {rijesenje ? (
              <Rijesenje
                props={{
                  v11: V11,
                  v12: V12,
                  v13: V13,
                  v21: V21,
                  v22: V22,
                  v23: V23,
                  rijesenje: rijesenje,
                }}
              ></Rijesenje>
            ) : (
              ""
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
