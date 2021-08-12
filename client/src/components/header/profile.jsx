import {
  Typography,
  Menu,
  Button,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
  },
});
const Profile = ({ acount, setAcount }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const logout=()=>{
      setAcount("");
  }
  return (
    <>
      <Link>
        <Typography onClick={handleClick} style={{ marginTop: "4px" }}>
          {acount}
        </Typography>
      </Link>

      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose(); logout();
          }}
        >
          <PowerSettingsNewIcon fontSize="small" color="primary" />{" "}
          <Typography className={classes.logout}>Logout</Typography>{" "}
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
