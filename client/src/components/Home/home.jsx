import React, { useEffect } from "react";
import { Box, makeStyles, Slide } from "@material-ui/core";
import Navbar from "./navbar";
import Banner from "./banner";
import Slaides from "./Slaides";
import Midsection from "./midsection";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/action/productaction";

// import { products } from "../../concens/data";

const useStyles = makeStyles((theme) => ({
  component: {
    padding: 10,
    background: "f2f2f2",
  },
  leftwrapper: {
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width:"100%"
    },
  },
  rightwrapper: {
    background: "#ffffff",
    padding: "5px",
    margin: "12px 0 0 10px",
    width: "17%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
const Home = () => {
  const clasess = useStyles();

  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Box className={clasess.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box className={clasess.leftwrapper}>
            <Slaides timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={clasess.rightwrapper}>
            <img src={adURL} alt="" style={{ width: 230 }} />
          </Box>
        </Box>
        <Midsection />
        <Slaides timer={false} products={products} title="Discounts for You" />
        <Slaides timer={false} products={products} title="Suggested Items" />
        <Slaides timer={false} products={products} title="Top Selectoins" />
        <Slaides timer={false} products={products} title="Recommondent Items" />
        <Slaides timer={false} products={products} title="Bestsellers" />
      </Box>
    </div>
  );
};

export default Home;
