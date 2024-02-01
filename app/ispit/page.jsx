import React from "react";
import "../globals.scss";
import MyCard from "./MyCard";

function page() {
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
      <div>
        <MyCard
          props={{
            title: "Gradijent Funkcije",
            href: "/ispit/gradijentfunkcije",
            desc: "Zadana je funkcija f(x,y)=[neka funkcija] i točka T(x,y). Odredi gradijent funkcije f u točki T, odredi usmjerenu derivaciju derivaciju funkcije u točki T duž određenog Vektora",
          }}
        ></MyCard>
        <MyCard
          props={{
            title: "Globalni Minimum i maksimum dužine",
            href: "/ispit/globminmax",
            desc: "Zadana je funkcija f(x,y)=[neka funkcija]i točke A([x1,y1]) i B(x2,y2). Odredite globalne ekstreme funkcije f na dužini AB",
          }}
        ></MyCard>
        <MyCard
          props={{
            title: "Zadana je ploha r(u,v)=...",
            href: "/ispit/zadanajeploha",
            desc: "Zadana je ploha r(u,v)=(nešto v&&u, nešto v&&u, nešto v&&u) i točka T(x,y,z) koja se nalazi na zadanoj plohi. Neka je  Π  tangencijalna ravnina na zadanu plohu u točki T ",
          }}
        ></MyCard>
        <MyCard
          props={{
            title: "Dva Mimoilazna pravca",
            href: "/ispit/mimosmjernipravci",
            desc: "Zadana su dva mimosmjerna pravca P1 i P2. Neka je pravac n njihova zajednička normala. Odredi koordinate točke N1 koja je presjek pravca n i P1. Odredi koordinate točke N2 koja je presjek pravca n i P2",
          }}
        ></MyCard>
      </div>
    </>
  );
}

export default page;
