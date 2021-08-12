import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, fade, alpha, ListItem,List } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { Search,  } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/action/productaction";

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#fff",
    marginLeft: 10,
    width: "38%",
    display: "flex",
  },
  searchIcon: {
    padding: 5,
    height: "100%",

    display: "flex",

    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#ffffff",
    marginTop: 36,
  },
}));
const Searchbar = () => {
  const classes = useStyles();
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    // console.log(text);
    setOpen(false);
  };

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="search for products ,brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => getText(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
      {text && (
        <List className={classes.list} hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem button key="product">
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
};

export default Searchbar;
