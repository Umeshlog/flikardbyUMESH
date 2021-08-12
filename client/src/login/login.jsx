import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { authenticatesighnup } from "../service/api";
import { authenticatelogin } from "../service/api";

const useStyles = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& >*": {
      color: "#ffffff",
      fontWeigth: 600,
    },
  },
  Login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "&>*": {
      marginTop: 18,
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginbtn: {
    textTransform: "none",
    backgroundColor: "#fb641b",
    color: "#ffffff",
    height: 48,
    borderRadius: 2,
  },

  reqbtn: {
    textTransform: "none",
    backgroundColor: "#ffffff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0,0,0/20%)",
  },
  createtext: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 14,
    color: "#2874f0",
    fontWeight: 600,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    marginTop: 10,
    fontWeight: 600,
    lineHeight: 0,
  },
});

const sighnupinitialvalue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const logininitialvalue = {
  username: "",
  password: "",
};

const initialvalue = {
  login: {
    veiw: "login",
    headding: "Login",
    subHeadding: "Get access to your Orders Wishlist and Recommendations",
  },
  SighnUp: {
    veiw: "SighnUp",
    headding: "Looks like you're new here",
    subHeadding: "Get access to your Orders Wishlist and Recommendations",
  },
};

const Login = ({ open, setOpen, setAcount }) => {
  const clasess = useStyles();
  const [toggleacount, setToggleAcount] = useState(initialvalue.login);
  const [sighnup, setSighnup] = useState(sighnupinitialvalue);
  const [login, setLogin] = useState(logininitialvalue);
  const [loginerror, setLoginError] = useState(false);
  const [sighnuperror, setSighnUpError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setToggleAcount(initialvalue.login);
  };

  const toggleuseracount = () => {
    setToggleAcount(initialvalue.SighnUp);
  };
  const sighnupuser = async () => {
    const res = await authenticatesighnup(sighnup);
    if (!res) {
      setSighnUpError(true);
      return;
    }
    handleClose();
    setAcount(sighnup.username);
  };

  const oninputchange = (e) => {
    setSighnup({ ...sighnup, [e.target.name]: [e.target.value] });
    console.log(sighnup);
  };
  const onloginchange = (e) => {
    setLogin({ ...login, [e.target.name]: [e.target.value] });
  };
  const loginuser = async () => {
    let res = await authenticatelogin(login);
    if (!res) {
      setLoginError(true);
      return;
    }
    handleClose();
    setAcount(login.username);
    // setAcount(sighnup.username);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={clasess.component}>
          <Box style={{ display: "flex" }}>
            <Box className={clasess.image}>
              <Typography variant="h5">{toggleacount.headding}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {toggleacount.subHeadding}
              </Typography>
            </Box>
            {toggleacount.veiw === "login" ? (
              <Box className={clasess.Login}>
                <TextField
                  name="username"
                  label="Enter Your Username"
                  onChange={(e) => onloginchange(e)}
                />
                {loginerror && (
                  <Typography className={clasess.error}>
                    invailid username or password
                  </Typography>
                )}
                <TextField
                  name="password"
                  label="Enter Password"
                  onChange={(e) => onloginchange(e)}
                />
                {loginerror && (
                  <Typography className={clasess.error}>
                    invailid username or password
                  </Typography>
                )}
                <Typography className={clasess.text}>
                  By Continuing You agree to flipkart's Term's of use and
                  Privacy Policy
                </Typography>
                <Button
                  variant="contained"
                  className={clasess.loginbtn}
                  onClick={() => loginuser()}
                >
                  Login
                </Button>
                <Typography
                  style={{ textAlign: "center" }}
                  className={clasess.text}
                >
                  OR
                </Typography>
                <Button variant="contained" className={clasess.reqbtn}>
                  Request OTP
                </Button>
                <Typography
                  className={clasess.createtext}
                  onClick={toggleuseracount}
                >
                  New to Flikart? Create an acount
                </Typography>
              </Box>
            ) : (
              <Box className={clasess.Login}>
                <TextField
                  onChange={(e) => oninputchange(e)}
                  name="firstname"
                  label="Enter first name"
                />

                <TextField
                  onChange={(e) => oninputchange(e)}
                  name="lastname"
                  label="Enter last "
                />

                <TextField
                  onChange={(e) => oninputchange(e)}
                  name="username"
                  label="Enter username"
                />

                <TextField
                  onChange={(e) => oninputchange(e)}
                  name="email"
                  label="Enter email"
                />

                <TextField
                  onChange={(e) => oninputchange(e)}
                  name="password"
                  label="Enter Password"
                />

                <TextField
                  onChange={(e) => oninputchange(e)}
                  name="phone"
                  label="Enter phone no."
                />
                {sighnuperror && (
                  <Typography className={clasess.error}>
                    Plzz Fill The Proparly
                  </Typography>
                )}

                <Button
                  variant="contained"
                  className={clasess.loginbtn}
                  onClick={() => sighnupuser()}
                >
                  SighnUp
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
