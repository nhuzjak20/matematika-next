"use client";
import React from "react";
import CardContent from "@mui/material/CardContent";
import VektorskiProduktModal from "./VektorskiProduktModal";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import "../globals.scss";
import BasicModal from "./BasicModal";

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
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        <div className="grid row-span-1">
          <div class="container grid-span-2 ">
            <div className="glassy-background m-4">
              <CardContent>
                <Typography variant="h4">Vektorski Produkt</Typography>
                <Typography variant="p">
                  Računanje vektorskog produkta dvaju trodimenzionalnih vektora
                </Typography>
              </CardContent>
              <div className="flex flex-row justify-between m-3">
                <div>
                  <BasicModal
                    title="Vektorski Produkt"
                    content={<VektorskiProduktModal></VektorskiProduktModal>}
                  ></BasicModal>
                </div>
                <div>
                  <Link
                    href="/generalnikalkulator/vektorskiprodukt"
                    legacyBehavior
                  >
                    <a>
                      <Button>Tekst</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid row-span-2">
          <VektorskiProduktModal></VektorskiProduktModal>
        </div>
        <div className="grid row-span-3">c</div>
      </div>
    </>
  );
}

export default page;
