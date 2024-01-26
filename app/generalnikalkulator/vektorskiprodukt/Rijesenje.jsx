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

function Rijesenje(props) {
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
  console.log("Dobar dan");
  var x = nerdamer(returnUmnozak()).evaluate();
  var Vektor = linearAlgebra.Vector;
  return (
    <>
      <div>
        <h4>
          AB = ({x[0]},{x[1]},{x[2]})
        </h4>
      </div>
    </>
  );
}

export default Rijesenje;
