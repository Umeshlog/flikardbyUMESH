import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart as Cart, FlashOn } from "@material-ui/icons";
import addToCart from "../../redux/action/cartaction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
const useStyle = makeStyles((theme) => ({
  leftContainer: {
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 0 0 40px",
    },
  },
  image: {
    padding: "15px 20px",
    borderBottom: "2px solid #f0f0f0",
    width: "95%",
  },
  button: {
    height: 50,
    marginLeft: 0,
    width: "48%",
    borderRadius: 2,
  },
  addtocart: {
    background: "#ff9f00",
    color: "white",
    textDecoration: "none",
    border: "none",
    marginRight: 10,
  
  },
  bynow: {
    background: "#fb641b",
    color: "white",
  },
}));
const ActionItems = ({ product }) => {
  const history = useHistory();
  const clasess = useStyle();
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    history.push("/card");
  };

  const buyNow = async () => {
    let res = await payUsingPaytm({
      amount: 5000,
      email: "umeshpatel271201@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: res,
    };
    post(information);
  };
  return (
    <>
      <Box className={clasess.leftContainer}>
        <img src={product.detailUrl} alt="url" className={clasess.image} />
        <br />
        <Button
          variant="contained"
          className={clsx(clasess.button, clasess.addtocart)}
          onClick={() => addItemToCart()}
        >
          <Cart /> Add To Cart
        </Button>

        <Button
          variant="contained"
          className={clsx(clasess.button, clasess.bynow)}
          onClick={() => buyNow()}
        >
          <FlashOn /> Buy Now
        </Button>
      </Box>
    </>
  );
};

export default ActionItems;
