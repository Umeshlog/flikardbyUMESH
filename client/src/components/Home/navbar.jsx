import React from "react";
import { navData } from "../../concens/data";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
   
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
}));

const Navbar = () => {
  const clasess = useStyles();
  return (
    <>
      <Box className={clasess.component}>
        {navData.map((data) => (
          <Box className={clasess.container}>
            <img src={data.url} alt="" className={clasess.image} />
            <Typography className={clasess.text}>{data.text}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Navbar;
