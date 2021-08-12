import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Countdown from "react-countdown";
import { typography } from "@material-ui/system";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    background: "#ffffff",
  },
  deal: {
    padding: "20px 20px",
    display: "flex",
  },
  dealtext: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "35px 15px",
  },
  // timers: {
  //   [theme.breakpoint.down("sm")]: {
  //     display: "none",
  //   },
  // },
  timers:{
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  
  
};

const Slaides = ({timer,title,products}) => {
  const clasess = useStyles();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={clasess.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <>
      <Box className={clasess.component}>
        <Box className={clasess.deal}>
          <Typography className={clasess.dealtext}>{title}</Typography>
          {timer && 
            <Box className={clasess.timers}>
              <img src={timerURL} style={{ width: 24 }}/>
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
              </Box>
          }
              <Button
                variant="contained"
                color="primary"
                className={clasess.button}
              >
                Veiw All
              </Button>
           
          
        </Box>
        <Divider />
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={false}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {products.map((product) => (
            <Link to={`product/${product.id}`}>
              <Box textAlign="center" className={clasess.wrapper}>
                <img src={product.url} alt="hiii" className={clasess.image} />
                <Typography
                  className={clasess.text}
                  style={{ fontWeight: 600, color: "#212121" }}
                >
                  {product.title.shortTitle}
                </Typography>
                <Typography className={clasess.text} style={{ color: "green" }}>
                  {product.discount}
                </Typography>
                <Typography
                  className={clasess.text}
                  style={{ color: "#212121", opacity: 0.6 }}
                >
                  {product.tagline}
                </Typography>
              </Box>
            </Link>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Slaides;
