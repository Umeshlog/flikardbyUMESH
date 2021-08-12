import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  component: {
    margin: "80px 140px",
    width: "80%",
    background: "#fff",
    height: "65vh",
    [theme.breakpoints.down("sm")]: {
      // textAlign:"center"
      margin: "80px 50px",
    },
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
    "& > *": {
      marginTop: 10,
      fontSize: 14,
    },
  },
  button: {
    marginTop: 20,
    padding: "12px 70px",
    borderRadius: 2,
    fontSize: 14,
    background: "#2874f0",
    color: "white",
  },
}));

const EmptyCart = () => {
  const history = useHistory();
  const clasess = useStyle();
  const emptycarturl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  const addItem = () => {
    history.push("/");
  };
  return (
    <>
      <Box className={clasess.component}>
        <Box className={clasess.container}>
          <img src={emptycarturl} className={clasess.image} />
          <Typography>Your Cart Is Empty</Typography>
          <Typography>Add items it now</Typography>
          <Button variant="contained" onClick={() => addItem()} className={clasess.button}>
            Shop Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmptyCart;
