import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import math from "mathjs";

function pretvoriPIuBroj(str) {
  const piSymbol = "π";
  const piValue = Math.PI;

  // Zamijeni sve pojave simbola π u stringu s vrijednošću broja Math.PI
  const noviString = str.replace(new RegExp(piSymbol, "g"), piValue);
  console.log("Novi string je " + noviString);
  // Vrati novi string koji sadrži brojevnu vrijednost za simbol PI
  return noviString;
}

function Postupak({ tx, ty, eq }) {
  let xDerivacija = undefined;
  let yDerivacija = undefined;
  let TockaRijesenje1 = undefined;
  let TockaRijesenje2 = undefined;
  console.log("Dobar dan");
  try {
    xDerivacija = math.derivative(jednadba, "x").toString();
    yDerivacija = math.derivative(jednadba, "y").toString();
    const tockaPretvoreno = [
      pretvoriPIuBroj(tocka[0]),
      pretvoriPIuBroj(tocka[1]),
    ];
    TockaRijesenje1 = math.evaluate(xDerivacija, { x: tockaPretvoreno[0] });
    TockaRijesenje2 = math.evaluate(yDerivacija, { y: tockaPretvoreno[1] });
    console.log(tockaPretvoreno);
    console.log(TockaRijesenje1);
  } catch (e) {
    console.log("Error je izaso");
    console.log(e);
  }
  return (
    <>
      <Accordion>
        <AccordionSummary>Riješenje</AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </>
  );
}

export default Postupak;
