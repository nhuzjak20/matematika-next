import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Link from "next/link";
import "../globals.scss";

function MyCard({ props }) {
  return (
    <Link href={props.href}>
      <div className="">
        <Card className="glassy-background m-4">
          <CardContent>
            <Typography color="white" variant="h4">
              {props.title}
            </Typography>
            <Typography color="white" variant="p">
              {props.desc}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}

export default MyCard;
