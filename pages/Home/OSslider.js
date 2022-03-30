import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

const OSslider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    draggable: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const buttonNext = document.querySelectorAll(".slick-next")[1];
    const buttonPrev = document.querySelectorAll(".slick-prev")[1];
    const slide = document.querySelectorAll(".slick-slide");
    console.log(slide);
    const cont = document.querySelector(".OS-side-cont");
    const cHeading = document.querySelector(".changable");
    const cPara = document.querySelector(".changable-para");
    buttonNext.addEventListener("click", function () {
      if (slide[7].classList.contains("slick-current")) {
        cHeading.innerHTML = "Solar Sales Proposal";
        cPara.innerHTML =
          "Post successful site assessment it is important to create a Sales proposal which is easy for customer to understand. The production guarantee will help in building confidence on life cycle of solar installation & productivity.";
      } else if (slide[8].classList.contains("slick-current")) {
        cHeading.innerHTML = "Solar Site Survey";
        cPara.innerHTML =
          "On the go application that helps in easing the process of solar site survey. The app make sure they do not miss on any critical information required for PV Permit designing and stamping. This is paperless tool and helps avoiding repetitive site visits.";
      } else if (slide[9].classList.contains("slick-current")) {
        cHeading.innerHTML = "Solar Permit Design";
        cPara.innerHTML =
          "An elaborated CAD design developed by highly experienced engineers. Our designs are widely accepted across AHJs due to exhaustive details on site plan, roof plan and modules, string layout & BOM, electrical line diagram, calculations, signage's and equipment specification.";
      } else if (slide[10].classList.contains("slick-current")) {
        cHeading.innerHTML = "PE Stamps";
        cPara.innerHTML =
          "Professional Engineering, (certified solar engineering) stamps are required for lot of solar projects of all types, sizes including applications like Storage, backup generators, and EV Charging. Our Structural and Electrical PE stamps take the hassle out of your workload.";
      } else if (slide[11].classList.contains("slick-current")) {
        cHeading.innerHTML = "Site Assessment";
        cPara.innerHTML =
          "A solar site assessment  involves evaluation of site suitability, solar access, shadowing considerations and other variables. You will get MEASUREMENT OF SOLAR ACCESS , EVALUATION OF INFLUENCE FROM SURROUNDINGS. Site assessment is also popularly known as Shade analysis.";
      }
    });
    buttonPrev.addEventListener("click", function () {
      if (slide[7].classList.contains("slick-current")) {
        cHeading.innerHTML = "PE Stamps";
        cPara.innerHTML =
          "Professional Engineering, (certified solar engineering) stamps are required for lot of solar projects of all types, sizes including applications like Storage, backup generators, and EV Charging. Our Structural and Electrical PE stamps take the hassle out of your workload.";
      } else if (slide[8].classList.contains("slick-current")) {
        cHeading.innerHTML = "Site Assessment";
        cPara.innerHTML =
          "A solar site assessment  involves evaluation of site suitability, solar access, shadowing considerations and other variables. You will get MEASUREMENT OF SOLAR ACCESS , EVALUATION OF INFLUENCE FROM SURROUNDINGS. Site assessment is also popularly known as Shade analysis.";
      } else if (slide[9].classList.contains("slick-current")) {
        cHeading.innerHTML = "Solar Sales Proposal";
        cPara.innerHTML =
          "Post successful site assessment it is important to create a Sales proposal which is easy for customer to understand. The production guarantee will help in building confidence on life cycle of solar installation & productivity.";
      } else if (slide[10].classList.contains("slick-current")) {
        cHeading.innerHTML = "Solar Site Survey";
        cPara.innerHTML =
          "On the go application that helps in easing the process of solar site survey. The app make sure they do not miss on any critical information required for PV Permit designing and stamping. This is paperless tool and helps avoiding repetitive site visits.";
      } else if (slide[11].classList.contains("slick-current")) {
        cHeading.innerHTML = "Solar Permit Design";
        cPara.innerHTML =
          "An elaborated CAD design developed by highly experienced engineers. Our designs are widely accepted across AHJs due to exhaustive details on site plan, roof plan and modules, string layout & BOM, electrical line diagram, calculations, signage's and equipment specification.";
      }
    });
  });

  return (
    <div>
      <Slider
        className="mainSlider"
        asNavFor={nav2}
        ref={(slider1) => setNav2(slider1)}
        {...settings}
      >
        <div className="col-12 OSslider-container">
          <img src="/Site-Assessment.png" />
          <div className="OSslider-cont">
            <h3 className="sub-heading">1: Site Assessment</h3>
            <p className="slider-phone-cont">
              A solar site assessment involves evaluation of site suitability,
              solar access, shadowing considerations and other variables. You
              will get MEASUREMENT OF SOLAR ACCESS , EVALUATION OF INFLUENCE
              FROM SURROUNDINGS. Site assessment is also popularly known as
              Shade analysis.
            </p>
          </div>
        </div>
        <div className="col-12 OSslider-container">
          <img src="/sales-proposal.png" />
          <div className="OSslider-cont">
            <h3 className="sub-heading">2: Solar Sales Proposal</h3>
            <p className="slider-phone-cont">
              Post successful site assessment it is important to create a Sales
              proposal which is easy for customer to understand. The production
              guarantee will help in building confidence on life cycle of solar
              installation & productivity
            </p>
          </div>
        </div>
        <div className="col-12 OSslider-container">
          <img src="/survey.png" />
          <div className="OSslider-cont">
            <h3 className="sub-heading">3: Solar Site Survey</h3>
            <p className="slider-phone-cont">
              An elaborated CAD design developed by highly experienced
              engineers. Our designs are widely accepted across AHJs due to
              exhaustive details on site plan, roof plan and modules, string
              layout & BOM, electrical line diagram, calculations, signage&apos;s and
              equipment specification
            </p>
          </div>
        </div>
        <div className="col-12 OSslider-container">
          <img src="/permit-design.png" />
          <div className="OSslider-cont">
            <h3 className="sub-heading">4: Solar Permit Design</h3>
            <p className="slider-phone-cont">
              On the go application that helps in easing the process of solar
              site survey. The app make sure they do not miss on any critical
              information required for PV Permit designing and stamping. This is
              paperless tool and helps avoiding repetitive site visits.
            </p>
          </div>
        </div>
        <div className="col-12 OSslider-container">
          <img src="/pe-stamp.png" />
          <div className="OSslider-cont">
            <h3 className="sub-heading">
              5: PE Stamps (Structural and Electrical)
            </h3>
            <p className="slider-phone-cont">
              (certified solar engineering) Professional Engineering stamps are
              required for lot of solar projects of all types, sizes including
              applications like Storage, backup generators, and EV Charging. Our
              Structural and Electrical PE stamps take the hassle out of your
              workload.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OSslider;
