import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import React,{useState} from "react";
import Searchbar from "./Searchbar";
import HeaderButtons from "./HeaderButtons";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#ffffff",
  },
  subheading: {
    fontSize: 10,
    fontStyle: "italalic",
  },
  list: {
    width: 250,
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerButtons: {
    margin: "0 7% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const clasess = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const[open,setOpen]=useState(false);

    const handleClose=()=>{
      setOpen(false);
    }
    
    const handleOpen = () => {
      setOpen(true);
    };

    const list=()=>{
      return (
        <Box className={clasess.list} onClick={handleOpen}>
          <List>
            <ListItem button>
              <HeaderButtons />
            </ListItem>
          </List>
        </Box>
      );
    }
  return (
    <AppBar className={clasess.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={clasess.menubutton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Link to="/" className={clasess.component}>
          <img src={logoURL} alt="" className={clasess.logo} />
          <Box className={clasess.container}>
            <Typography className={clasess.subheading}>
              Explore{" "}
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} alt="" className={clasess.subURL} />
          </Box>
        </Link>
        <Searchbar />
        <span className={clasess.headerButtons}>
          <HeaderButtons />
        </span>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
