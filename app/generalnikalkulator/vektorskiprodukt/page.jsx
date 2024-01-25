"use client";

import React, { useState } from "react";

function GeneralKalkulator() {
  const [VektorA, OnChangeA] = useState(0);
  const [VektorB, OnChangeB] = useState(0);
  return (
    <div>
      <input
        type="number"
        name="vektori"
        id="vektorA"
        value={VektorA}
        onChange={(e) => OnChangeA(e.target.value)}
      ></input>
      <input
        type="number"
        name="vektori"
        id="vektorB"
        value={VektorB}
        onChange={(e) => OnChangeB(e.target.value)}
      ></input>
    </div>
  );
}

export default GeneralKalkulator;
