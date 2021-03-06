import React, { useEffect } from "react";
import Head from "next/head";
import Header from "./shared/header";
import Footer from "./shared/Footer";
import Counter from "./shared/counter";
import Logos from "../json-data/Logos";

import gsap from "gsap/dist/gsap.js";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
import Map from "./shared/Map";
gsap.registerPlugin(ScrollTrigger);

function SolarDesignPrice() {
  useEffect(() => {
    const gsapTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-box",
        markers: false,
        start: "top 90%",
        end: "top 20%",
        scrub: 1,
      },
    });
    gsapTL.to(".grid-box", { x: "0", y: "0", opacity: "100", duration: 5 });
  });
  return (
    <div className="services secondary-page container-fluid px-0 about-us">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Generated by create next app shubham"
        />
        <link
          rel="preload"
          href="../../../public/fonts/GTWalsheimPro-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <section className="section section---1 common-header">
        <div className="container d-flex flex-wrap align-items-center">
          <div className="container__l col-12 mx-auto col-lg-6">
            <h1 className="big-h">About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="container__r col-12 col-lg-6">
            <img src="./about-header.svg" alt="wattmonk" />
          </div>
        </div>
      </section>
      <section className="section section---2 hasCounter bg-grey">
        <span className="bg"></span>
        <Counter />
      </section>
      <section className="section section---3 bg-grey">
        <div className="service-heading container">
          <h1 className="center-heading heading">Story of Wattmonk</h1>
          <p className="center-heading col-11 mx-auto mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="container">
          <div className="grid-content d-flex">
            <div className="grid-content__grid grid-01">
              <div className="grid-box">
                <img src="/../permit-designs/hlp-imgs/HLP 01.png" alt="" />
              </div>
            </div>
            <div className="grid-content__grid grid-02">
              <div className="grid-box">
                <img src="/../permit-designs/hlp-imgs/HLP 02.png" alt="" />
              </div>
              <div className="sub-grid">
                <div className="grid-box">
                  <img src="/../permit-designs/hlp-imgs/HLP 03.png" alt="" />
                </div>
                <div className="grid-box">
                  <img src="/../permit-designs/hlp-imgs/HLP 04.png" alt="" />
                </div>
              </div>
              <div className="grid-box">
                <img src="/../permit-designs/hlp-imgs/HLP 05.png" alt="" />
              </div>
            </div>
            <div className="grid-content__grid grid-03">
              <div className="grid-box">
                <img src="/../permit-designs/hlp-imgs/HLP 06.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section---5 map-section">
        <Map img="./map.svg" />
      </section>
      <section className="section-8 container d-flex">
        <div className="col col-12 col-lg-6">
          <div className="sticky-box sec-headings">
            <h2 className="heading">
              Brands We Proudly Supports
              <br />
              These Brands
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <div className="col col-12 col-lg-6 d-flex flex-wrap justify-content-between">
          {Logos.map((val) => {
            const { id, img } = val;
            return (
              <div
                key={id}
                className="icon col-4 bg-grey d-flex align-items-center justify-content-center"
              >
                <img src={img} alt="img" />
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SolarDesignPrice;
