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
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <div className="col-start-1 row-start-1 col-end-1 row-end-1">
          <div className="container grid-span-2 ">
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
        <div className="flex-auto h-24">
          <Link href="/prvikolokvij" legacyBehavior>
            <a>
              <div className="glassy-background m-4">
                <CardContent>
                  <Typography variant="h4">Prvi Kolokvij</Typography>
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
        <div className="flex-auto h-24">
          <div className="glassy-background m-4">
            <CardContent>
              <Typography variant="h4">Drugi Kolokvijr</Typography>
              <Typography variant="p">
                Kalkulator namjenjem osnovnim operacijama kao što je
                deriviranje, riješavanje jednadžbi, vektorskim operacijama
                itd...
              </Typography>
            </CardContent>
            <CardActions>Gumbek</CardActions>
          </div>
        </div>
        <div className="flex-auto h-24">
          <div className="glassy-background m-4">
            <CardContent>
              <Typography variant="h4">Treći Kolokvij</Typography>
              <Typography variant="p">
                Kalkulator namjenjem osnovnim operacijama kao što je
                deriviranje, riješavanje jednadžbi, vektorskim operacijama
                itd...
              </Typography>
            </CardContent>
            <CardActions>Gumbek</CardActions>
          </div>
        </div>
        <div className="col-span-2">
          <Link href="/ispit" legacyBehavior>
            <a>
              <div className="glassy-background m-4">
                <CardContent>
                  <Typography variant="h4">Ispit</Typography>
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
    </>
  );
}
