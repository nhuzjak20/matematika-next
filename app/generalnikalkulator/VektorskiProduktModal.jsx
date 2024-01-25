"use client";

import React from "react";

function VektorskiProduktModal() {
  return (
    <div className="flex flex-column space-evenly">
      <p style={{ color: "black", textJustify: "inter-character" }}>
        Vektorski produkt, također poznat kao krizni ili vektorski umnožak, je
        matematička operacija koja se primjenjuje na dva vektora u
        trodimenzionalnom prostoru. Rezultat vektorskog produkta je također
        vektor. Za dva vektora
        <b className="p-2">
          A = (A<sub>1</sub>,A<sub>1</sub>,A<sub>1</sub>)
        </b>
        i
        <b className="p-2">
          B = (B<sub>1</sub>,B<sub>1</sub>,B<sub>1</sub>)
        </b>
        vektorski produkt <b>A X B</b> je definiran kao:
        <br />
        Geometrijska interpretacija vektorskog produkta povezana je s
        geometrijom i orijentacijom vektora. Rezultantni vektor A X B je normala
        na ravninu koju tvore vektori A i B, a njegova duljina predstavlja
        površinu parallelograma koji su formirani tim vektorima. Smjer
        rezultantnog vektora određuje orijentaciju ravnine (lijevo ili desno
        pravilo).
      </p>
      <h3></h3>
    </div>
  );
}

export default VektorskiProduktModal;
