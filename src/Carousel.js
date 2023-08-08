import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import Card from "./Card";
import "./carousel.css";

function Carousel() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <div className="carousel-card-container">
            <IconButton
              onClick={goToPrevSlide}
              className="carousel-button left-button"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Card />
            <Card />
            <Card />
            <IconButton
              onClick={goToNextSlide}
              className="carousel-button right-button"
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
