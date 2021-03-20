import React from "react";
import XHighlight from "../../Assets/img/CODE Startups/XHighlight Logo.png";
import Vinci from "../../Assets/img/CODE Startups/Vinci Logo.png";
import Esto from "../../Assets/img/CODE Startups/Esto.png";
import Bytes from "../../Assets/img/CODE Startups/Bytes Coding.png";
import BaboBikes from "../../Assets/img/CODE Startups/BaboBikes.webp";
import Jinn from "../../Assets/img/CODE Startups/Jinn Logo.webp";
import Carousel from "./Carousel";

const startups = [
  <div
    className="container d-flex h-100"
    style={{ padding: "30px", border: "1px solid" }}
  >
    <div className="row justify-content-center align-self-center">
      <a href="http://xhighlight.com">
        <img
          src={XHighlight}
          className="img-responsive"
          alt="XHighlight Logo"
          style={{ width: "100%" }}
        ></img>
      </a>
    </div>
  </div>,
  <div
    className="container d-flex h-100"
    style={{ padding: "30px", border: "1px solid" }}
  >
    <div className="row justify-content-center align-self-center">
      <a href="http://vinci-vr.com">
        <img
          src={Vinci}
          className="img-responsive"
          alt="Vinci VR Logo"
          style={{ width: "100%" }}
        ></img>
      </a>
    </div>
  </div>,
  <div
    className="container d-flex h-100"
    style={{ padding: "30px", border: "1px solid" }}
  >
    <div className="row justify-content-center align-self-center">
      <img
        src={Esto}
        className="img-responsive"
        alt="Esto Logo"
        style={{ width: "100%" }}
      ></img>
    </div>
  </div>,
  <div
    className="container d-flex h-100"
    style={{ padding: "30px", border: "1px solid" }}
  >
    <div className="row justify-content-center align-self-center">
      <a href="http://https://bytescoding.com">
        <img
          src={Bytes}
          className="img-responsive"
          alt="Bytes Coding Logo"
          style={{ width: "100%" }}
        ></img>
      </a>
    </div>
  </div>,
  <div
    className="container d-flex h-100"
    style={{ padding: "30px", border: "1px solid" }}
  >
    <div className="row justify-content-center align-self-center">
      <img
        src={BaboBikes}
        className="img-responsive"
        alt="Babo Bikes Logo"
        style={{ width: "100%" }}
      ></img>
    </div>
  </div>,
  <div
    className="container d-flex h-100"
    style={{ padding: "30px", border: "1px solid" }}
  >
    <div className="row justify-content-center align-self-center">
      <img
        src={Jinn}
        className="img-responsive"
        alt="Jinn LLC Logo"
        style={{ width: "100%" }}
      ></img>
    </div>
  </div>,
];

const CarouselImage = () => <Carousel items={startups} />;

export default CarouselImage;
