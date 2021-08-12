import React from "react";
import { imageURL } from "../../concens/data";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  wraper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
  help: {
    [theme.breakpoints.down("md")]: {
      objectFit:"cover",
      height:140
    },
  },
}));

const Midsection = () => {
  const clasess = useStyles();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid
        container
        lg={12}
        sm={12}
        md={12}
        xs={12}
        className={clasess.wraper}
      >
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>

      <img
        src={coronaURL}
        className={clsx(clasess.wraper, clasess.help)}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default Midsection;
