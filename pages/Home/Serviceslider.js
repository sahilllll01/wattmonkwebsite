import * as React from "react";
import { useState, useRef } from "react";
import Slider from "react-slick";

const Serviceslider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider
        className="mainSlider"
        asNavFor={nav2}
        ref={(slider1) => setNav2(slider1)}
        {...settings}
      >
        <div className="col-12 progress-card simple-shadow">
          <img src="./SolarShadeIcon.svg" className="mb-4" alt="" />
          <p>
            <span className="font-bold">
              Site Assessment and Sales Proposa --{" "}
            </span>
            In just 1 hours* of the design request
          </p>
        </div>
        <div className="col-12 progress-card simple-shadow">
          <img src="./SolarShadeIcon.svg" className="mb-4" alt="" />
          <p>
            <span className="font-bold">Site Survey -- </span>
            Complete a Site Survey in couple of hours
          </p>
        </div>
        <div className="col-12 progress-card simple-shadow">
          <img src="./SolarShadeIcon.svg" className="mb-4" alt="" />
          <p>
            <span className="font-bold">PV Permit Design -- </span>
            In just 6 hours* of the design request.
          </p>
        </div>
        <div className="col-12 progress-card simple-shadow">
          <img src="./SolarShadeIcon.svg" className="mb-4" alt="" />
          <p>
            <span className="font-bold">PE Stamping -- </span>
            Get Stamped permit plans in 12 Hours*
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Serviceslider;
