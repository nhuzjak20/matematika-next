import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
var math = require("mathjs");

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
  const tocka = [tx, ty];
  console.log(tx, ty, eq);
  const jednadba = eq;
  let xDerivacija = undefined;
  let yDerivacija = undefined;
  let TockaRijesenje1 = undefined;
  let TockaRijesenje2 = undefined;
  //nije string, ako ispisujes moras napisat .toString()
  xDerivacija = math.derivative(jednadba, "x");
  yDerivacija = math.derivative(jednadba, "y");
  var tockaPretvoreno = false;
  TockaRijesenje1 = math.evaluate(xDerivacija.toString(), { x: tocka[0] });
  TockaRijesenje2 = math.evaluate(yDerivacija.toString(), { y: tocka[1] });
  console.log(TockaRijesenje1, TockaRijesenje2);
  //if (tx.toString().includes("π") || ty.toString().includes("π")) {
  //console.log("Postoji pi");
  //tockaPretvoreno = [pretvoriPIuBroj(tocka[0]), pretvoriPIuBroj(tocka[1])];

  //} else console.log("Ne postoji Pi");

  return (
    <div>
      {xDerivacija.toString()} || {yDerivacija.toString()}
      <br />
      xDerivacija je{xDerivacija}
      <br />
      yDerivacija je {yDerivacija}
      <br />
      TockaRijesenje 1 je {TockaRijesenje1}
      <br />
      TockaRijesenje 2 je {TockaRijesenje2}
    </div>
  );
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
