import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Assets/images/slider/slider1.png";
import slider2 from "../../Assets/images/slider/slider2.png";
import Gallery from "../Gallery/gallery.js";
import Countdown from "../../Script/countdown.js";
import "./slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="container-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={slider1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider2} alt="Second slide" />
            {/* <Carousel.Caption className="carousel-caption">
              <h3>Pokemon Go Fest 2020</h3>
              <h5>Event Starting at :</h5>
              <Countdown />
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>

        <div className="countdown">
          <h3>Pokemon Go Fest 2020</h3>
          <h5>Event Starting at :</h5>
          <Countdown />
        </div>

      <div>
        <Gallery />
      </div>

    </div>
  );
};

export default Slider;
