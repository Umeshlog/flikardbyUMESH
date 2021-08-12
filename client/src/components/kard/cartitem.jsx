import { Card, Box, makeStyles, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import clsx from "clsx"
import GroupButtons from "./groupbuttons";


const useStyle = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop:"1px solid #f0f0f0"
  },
  leftComponent: {
    margin: 20,
    display:"flex",
    flexDirection:"column"
  },
  rightComponent: {
    margin: 20,
  },
  smalltext:{
      fontSize:14
  },
  grayteaxt:{
      color:"#878787"
  },
  price:{
      fontSize:18,
      fontWeight:600
  },
  image:{
      height:110,
      width:110
  },
  remove:{
      marginTop:20,
      fontSize:16
  }
});

const CartItem = ({item, removeItemFromCart}) => {
  const clasess = useStyle();
  
const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

 
  return (
    <>
      <Card className={clasess.component}>
        <Box className={clasess.leftComponent}>
        <img src={item.url} alt="url" className={clasess.image}/>
        <GroupButtons/>
        </Box>
        <Box className={clasess.rightComponent}>
          <Typography>{item.title.longTitle}</Typography>
          <Typography
            style={{ marginTop: 10 }}
            className={clsx(clasess.smalltext, clasess.grayteaxt)}
          >
            Seller:SuperComNet
            <span>
              <img
                src={fassured}
                alt="fassured"
                style={{ width: 50, marginLeft: 10 }}
              />
            </span>
          </Typography>
          <Typography style={{ margin: "20px 0" }}>
            <span className={clasess.price}>₹{item.price.cost}</span>&nbsp; &nbsp; &nbsp;
            <span className={clasess.grayteaxt}>
              <strike>₹{item.price.mrp}</strike>
            </span>&nbsp; &nbsp; &nbsp; 
            <span style={{ color: "#388e3c" }}>{item.price.discount}off</span>
          </Typography>
          <Button  className={clasess.remove} onClick={()=>removeItemFromCart(item.id)}>remove</Button>
        </Box>
      </Card>
    </>
  );
};

export default CartItem;
