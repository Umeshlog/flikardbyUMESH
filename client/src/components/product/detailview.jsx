import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/action/productaction";
import { useEffect } from "react";
import clsx from "clsx";
import { LocalOffer as Badge } from "@material-ui/icons";
import ActionItems from "./actionitems";

const useStyles = makeStyles(theme=>({
  component: {
    marginTop: 55,
    background: "#f2f2f2",
  },
  container: {
    // margin: "0 80px",
    background: "#fff",
    display: "flex",
    [theme.breakpoints.down('sm')]:{
      margin:0
    }
  },
  rightContaine: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  smalltext: {
    fontSize: 14,
    verticalAlign:"baseLine",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
  },
  graytextcolor: {
    color: "#878787",
  },
  price: {
    fontSize: 28,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: "#00cc00",
  },
}));

const DetailView = ({ match }) => {
  const { product } = useSelector((state) => state.getProductDetails);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);

  const clasess = useStyles();

  return (
    <>
      <Box className={clasess.component}>
        {product && Object.keys(product).length && (
          <Grid container className={clasess.container}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box style={{ minWidth: "40%" }}>
                <ActionItems product={product} />
              </Box>
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={12}
              xs={12}
              className={clasess.rightContaine}
            >
              <Typography>{product.title.longTitle}</Typography>
              <Typography
                className={clsx(clasess.smalltext, clasess.graytextcolor)}
              >
                8 Rating & 1 Review
                <span>
                  <img
                    src={fassured}
                    alt="fassured"
                    style={{ width: 77, marginLeft: 20 }}
                  />
                </span>
              </Typography>
              <Typography>
                <span className={clasess.price}>₹{product.price.cost}</span>{" "}
                &nbsp; &nbsp; &nbsp;
                <span className={clasess.graytextcolor}>
                  <strike> ₹{product.price.mrp}</strike>
                </span>
                &nbsp; &nbsp; &nbsp;
                <span style={{ color: "#388e3c" }}>
                  {product.price.discount} off
                </span>{" "}
                &nbsp;
              </Typography>
              <Typography style={{ fontWeight: 600, marginTop: 20 }}>
                Available Offers
              </Typography>
              <Box className={clasess.smalltext}>
                <Typography>
                  <Badge className={clasess.badge} /> Bank Offer10% off on Axis
                  Bank Credit Cards, up to ₹1500. On orders of ₹5000 and above
                </Typography>
                <Typography>
                  <Badge className={clasess.badge} /> Bank Offer10% off on ICICI
                  Bank Credit Cards, up to ₹1500. On orders of ₹5000 and above
                </Typography>
                <Typography>
                  <Badge className={clasess.badge} /> Bank Offer10% off on Axis
                  Bank Debit Cards, up to ₹750. On orders of ₹5000 and above
                </Typography>
                <Typography>
                  <Badge className={clasess.badge} /> Bank Offer5% Unlimited
                  Cashback on Flipkart Axis Bank Credit Card
                </Typography>
              </Box>
              <Table>
                <TableBody>
                  <TableRow class={clasess.smalltext}>
                    <TableCell className={clasess.graytextcolor}>
                      Delivery
                    </TableCell>
                    <TableCell style={{ fontWeight: 600 }}>
                      {date.toDateString()} | ₹40
                    </TableCell>
                  </TableRow>
                  <TableRow class={clasess.smalltext}>
                    <TableCell className={clasess.graytextcolor}>
                      warranty
                    </TableCell>
                    <TableCell>No warranty</TableCell>
                  </TableRow>
                  <TableRow class={clasess.smalltext}>
                    <TableCell className={clasess.graytextcolor}>
                      Seller
                    </TableCell>
                    <TableCell class={clasess.smalltext}>
                      <span style={{ color: "#2874f0" }}>SuperComNet</span>
                      <Typography>GST Invoice Available</Typography>
                      <Typography>14 Days Return Policy</Typography>
                      <Typography>
                        View More Sellers Starting From ₹300
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <img
                        src={sellerURL}
                        alt="sellerurl"
                        style={{ width: 390 }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow class={clasess.smalltext}>
                    <TableCell className={clasess.graytextcolor}>
                      Description
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default DetailView;
