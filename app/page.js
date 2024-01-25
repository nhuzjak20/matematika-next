import Link from "next/link";
import "./globals.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

export default function Home() {
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
            <Link href="/generalnikalkulator" legacyBehavior>
              <a>
                <div className="glassy-background m-4">
                  <CardContent>
                    <Typography variant="h4">Generalni Kalkulator</Typography>
                    <Typography variant="p">
                      Kalkulator namjenjem osnovnim operacijama kao što je
                      deriviranje, riješavanje jednadžbi, vektorskim operacijama
                      itd...
                    </Typography>
                  </CardContent>
                  <CardActions>Gumbek</CardActions>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid row-span-3">c</div>
      </div>
    </>
  );
}
