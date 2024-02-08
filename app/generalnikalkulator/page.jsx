"use client";
import React from "react";
import CardContent from "@mui/material/CardContent";
import VektorskiProduktModal from "./VektorskiProduktModal";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import "../globals.scss";
import BasicModal from "./BasicModal";
import MyCard from "@/app/ispit/MyCard";

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
      <div className="flex flex-col">
        <MyCard
          props={{
            title: "Parcijalna derivacija",
            href: "/generalnikalkulator/parcijalnaderivacija",
            desc: "Parcijalna derivacija u n dimenzija je koncept koji se koristi u višedimenzionalnom prostoru kako bi se odredila stopa promjene funkcije u smjeru određene varijable, dok se ostale varijable drže konstantnim. Ovaj kalkulator računa parcijalnu derivaciju po nekoj varijabli(x,y,z)",
          }}
        ></MyCard>
        <MyCard
          props={{
            title: "Vektorski Produkt",
            href: "/generalnikalkulator/vektorskiprodukt",
            desc: "Kalkulator za računanje vektorskog produkta",
          }}
        ></MyCard>
        <div className=""></div>
      </div>
    </>
  );
}

export default page;
