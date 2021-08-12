import React, { useEffect, useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    // width: "30%",
    background: "#fff",
    marginLeft: 15,
  },
  header: {
    padding: "16px 24px",
    borderBottom: "1px solid #f0f0f0",
  },
  container: {
    padding: "15px 24px",
    "&>*": {
      marginTop: 20,
      fontSize: 14,
    },
  },
  graytext: {
    color: "#878787",
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
});

const TotalView = ({ cartItems }) => {
  const clasess = useStyle();

  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    var price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;

      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <>
      <Box className={clasess.component}>
        <Box className={clasess.header}>
          <Typography className={clasess.graytext}>Price Detail</Typography>
        </Box>
        <Box className={clasess.container}>
          <Typography>
            Price ({cartItems.length} item)
            <span className={clasess.price}>₹{price}</span>
          </Typography>
          <Typography>
            Descount <span className={clasess.price}>-₹{discount}</span>
          </Typography>
          <Typography>
            Delevery Charge <span className={clasess.price}>₹40</span>
          </Typography>
          <Typography className={clasess.totalAmount}>
            Total Amount{" "}
            <span className={clasess.price}>₹{price - discount + 40}</span>
          </Typography>
          <Typography style={{ color: "green" }}>
            You Will Save ₹{discount - 40} on This Order
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TotalView;
