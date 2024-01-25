"use client";

import React, { useState } from "react";
import { Accordion, AccordionSummary } from "@mui/material";
import "../../globals.scss";

export default function GeneralKalkulator() {
  const [VektorA, OnChangeA] = useState(0);
  const [VektorB, OnChangeB] = useState(0);
  const [V11, ChangeV11] = useState(0);
  const [V12, ChangeV12] = useState(0);
  const [V13, ChangeV13] = useState(0);
  const [V21, ChangeV21] = useState(0);
  const [V22, ChangeV22] = useState(0);
  const [V23, ChangeV23] = useState(0);
  return (
    <div>
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
      <div>
        <div className="flex flex-row items-center w-100">
          <div className="flex flex-row space-evenly items-center w-fit">
            <h4>A = (</h4>
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
          <div div className="flex flex-row space-evenly items-center">
            <h4>B = (</h4>
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
          <div></div>
        </div>
        <div>
          <Accordion>
            <AccordionSummary>Riješenje</AccordionSummary>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
