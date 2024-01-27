import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import linearAlgebra from "linear-algebra/";
import nerdamer from "nerdamer";

/*function PrijeRijesenja() {
  return (
    <>
      <Typography variant="h3">
        Unesi vektore <b>A</b> i <b>B</b>
      </Typography>
    </>
  );
}*/

function Rijesenje({ props }) {
  const [rijesenje, PromjeniRijesenje] = useState(0);
  function returnUmnozak() {
    var text = "cross([" + props.v11;
    text += "," + props.v12;
    text += "," + props.v13 + "],[";
    text += props.v21 + "," + props.v22;
    text += "," + props.v23 + "])";
    console.log(text);
    return text;
  }
  var rezultat = returnUmnozak();
  console.log(props[0], "Dobar dan");
  var x = nerdamer(rezultat).evaluate();
  console.log(x.toString());
  return (
    <>
      <div>
        <div>
          <h4>
            A=({props.v11}, {props.v12}, {props.v13}) <b>X</b> B={props.v21},{" "}
            {props.v22},{props.v23}) = AB
          </h4>
        </div>
        <h4>AB = ({nerdamer(returnUmnozak()).evaluate().toString()})</h4>
      </div>
    </>
  );
}

export default Rijesenje;
