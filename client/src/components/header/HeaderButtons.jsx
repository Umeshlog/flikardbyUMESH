import React, { useContext, useState } from "react";
import {
  Button,
  Box,
  makeStyles,
  Typography,
  Badge,
  Dialog,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import LoginDialog from "../../login/login";
// import {loginContext} from "../../context/contextprovider";
import { loginContext } from "../../context/contextprovider";
import Profile from "./profile";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: "600",
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      background: "#2874f0",
      color: "#fff",
    },
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      fontSize: 14,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
  },
  contact: {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
         display:"none"
    },
  },
}));
const HeaderButtons = () => {
  const clasess = useStyles();
  const [open, setOpen] = useState(false);
  const { acount, setAcount } = useContext(loginContext);
  const [opens, setOpens] = useState(false);

  const {cartItems}=useSelector(state=> state.cart)


  const openLoginDialog = () => {
    setOpen(true);
  };
  const handleClick = (e) => {
    setOpens(e.currentTarget);
  };
  const handleClose = () => {
    setOpens(false);
  };
  return (
    <Box className={clasess.wrapper}>
      {acount ? (
        <Profile acount={acount} setAcount={setAcount} />
      ) : (
        <Link>
          <Button
            variant="contained"
            className={clasess.login}
            onClick={() => openLoginDialog()}
          >
            Login
          </Button>
        </Link>
      )}
      {/* <Link>
        <Typography style={{ marginTop: "6px" }} onClick={handleClick}>More</Typography>
      </Link>

      */}
      <Typography
        aria-controls="simple-menu"
        aria-haspopup="true"
        style={{ marginTop: "6px", fontSize: 14, cursor: "pointer" }}
        onClick={handleClick}
      >
        More
      </Typography>
      <Menu
        anchorEl={opens}
        open={Boolean(opens)}
        onClose={handleClose}
        className={clasess.component}
      >
        <MenuItem onClick={handleClose}>
          <Typography>
            <Link to="/contact" className={clasess.contact}>
              <ContactMailIcon fontSize="small" color="primary" style={{marginRight:10}}/>
              Contact
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
      <Link to="/card" className={clasess.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAcount={setAcount} />
    </Box>
  );
};
export default HeaderButtons;
