import * as React from "react";
import { useState, useRef } from "react";
import Slider from "react-slick";

const Appslider = () => {
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
                settings: 'unslick'
          }
        }
    ]

  };

  return (
    <div>
      <Slider
        className="mainSlider"
        asNavFor={nav2}
        ref={slider1 => setNav2(slider1)}
        {...settings}
      >
            <div className="app-point-card col-12 col-md-6">
                <img className='mb-4' src="/access.png" alt="icon" />
                <h5>Order on the go</h5>
                <p>Freedom to order solar design services with just a click of a button.</p>
            </div>
            <div className="app-point-card col-12 col-md-6">
                <img className='mb-4' src="/access.png" alt="icon" />
                <h5>Chat with designers</h5>
                <p>Stay in control of your solar designs and stamps all in one place.</p>
            </div>
            <div className="app-point-card col-12 col-md-6">
                <img className='mb-4' src="/access.png" alt="icon" />
                <h5>Access projects Anytime</h5>
                <p>Communicate in real time with the design team.</p>
            </div>
            <div className="app-point-card col-12 col-md-6">
                <img className='mb-4' src="/access.png" alt="icon" />
                <h5>Download Designs</h5>
                <p>Accessing and sharing solar projects has become easier. </p>
            </div>
        </Slider>
    </div>
  );
};

export default Appslider;