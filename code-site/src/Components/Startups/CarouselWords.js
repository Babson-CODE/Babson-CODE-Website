import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel = (props) => (
  <AliceCarousel
    items={props.items}
    autoPlay
    autoPlayInterval={1000}
    disableDotsControls
    disableButtonsControls
    infinite
    responsive={responsive}
  />
);

export default Carousel;
