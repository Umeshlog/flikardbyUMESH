import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../concens/data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down('sm')]:{
      objectFit:"cover",
      height:180

    }
  },
  carousel:{
      marginTop:10
  }
}));

const Banner = () => {
  const clasess = useStyles();
  return (
    <>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                background:"#ffffff",
                color:'#494949',
                borderRadius:0,
                margin:0
            }
        }}
        className={clasess.carousel}
      >
        {bannerData.map((Image) => (
          <img src={Image} alt="" className={clasess.image} />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
