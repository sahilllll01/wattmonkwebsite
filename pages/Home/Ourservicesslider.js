import React, { Component } from "react";
import Slider from "react-slick";

export default class simpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.5,
        },
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.1,
        },
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
        },
      }]

    };
    return (
      <div>
        <Slider {...settings}>
          <div className="col-12">
            <div className="service-slide">
              <img src="/slider item 1.png" alt="" />
              <div className="slide-info">
                <h3>Site Assisment</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="service-slide">
              <img src="/slider item 1.png" alt="" />
              <div className="slide-info">
                <h3>Site Assisment</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="service-slide">
              <img src="/slider item 1.png" alt="" />
              <div className="slide-info">
                <h3>Site Assisment</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="service-slide">
              <img src="/slider item 1.png" alt="" />
              <div className="slide-info">
                <h3>Site Assisment</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}