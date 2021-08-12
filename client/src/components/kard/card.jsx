import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, makeStyles, Typography, Button,Grid } from "@material-ui/core";
import CartItem from "./cartitem";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/action/cartaction";
import EmptyCart from "./emptycart";
import TotalView from "./totalview";
const useStyle = makeStyles((theme) => ({
  component: {
    // marginTop: 55,
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    width: "67%",
    [theme.breakpoints.down("sm")]: {
      marginBottum: 15,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  placeorder: {
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 50,
    display: "flex",
    marginLeft: "auto",
  },
  bottum: {
    padding: "16px 22px",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 /10%)",
  },
}));

const Card = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const clasess = useStyle();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  });

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      {cartItems.length ? (
        <Grid container className={clasess.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={clasess.leftComponent}
          >
            <Box className={clasess.header}>
              <Typography style={{ fontSize: 18, fontWeight: 600 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}

            <Box className={clasess.bottum}>
              <Button variant="contained" className={clasess.placeorder}>
                Place order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Card;
