import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./shared/header";
import Footer from "./shared/Footer";
import modelImgs from "../json-data/model-imgs";

import gsap from "gsap/dist/gsap.js";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function Customerprobability() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset - 900);

  useEffect(() => {
    if (window.innerWidth >= 992) {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }

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
  }, []);
  return (
    <div className="services secondary-page container-fluid px-0 customer-probability">
      <Head>
        <title>Customer Probability</title>
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
      <section className="section section---1 common-header customer-prob">
        <div className="section-bg">
          <span></span>
          <span></span>
        </div>
        <div className="container d-flex">
          <div className="container__l col-11 col-lg-6">
            <h1 className="big-h">Customer Probability</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer...
            </p>
            <ul className="points mb-5 mt-5">
              <li className="mb-3">
                <span></span>
                <p>Know your customers&apos;s score</p>
              </li>
              <li className="mb-3">
                <span></span>
                <p>Check out our App</p>
              </li>
              <li>
                <span></span>
                <p>Get score in just one click</p>
              </li>
              <li>
                <span></span>
                <p>Get score instantly</p>
              </li>
            </ul>
            <button>
              <a href="#" className="dark-btn">
                Check your Customer Probability
              </a>
            </button>
          </div>
          <div className="container__r col-11 col-lg-6">
            <div className="cp-model">
              <div className="cp-model-container">
                <div className="cp-model-container__imgs">
                  {modelImgs.map((val) => {
                    const { id, img } = val;
                    return <img key={id} src={img} alt="img" />;
                  })}
                </div>
                <div className="cp-model-container__card progress-card-layout">
                  <div className="progress-card-layout__progress">
                    <svg
                      width="110"
                      height="110"
                      viewBox="0 0 110 110"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M62.857 4.10287C76.0184 6.1346 87.8811 13.1857 95.9552 23.7763C104.029 34.3668 107.687 47.6733 106.161 60.9028C104.634 74.1324 98.0424 86.2563 87.7687 94.7299C77.495 103.204 64.3382 107.368 51.06 106.349C37.7817 105.33 25.4143 99.2073 16.5536 89.2655C7.69296 79.3237 3.02795 66.3361 3.53775 53.0285C4.04755 39.721 9.69251 27.1283 19.2878 17.8935C28.8831 8.65877 41.6827 3.5 55 3.5"
                        stroke="url(#paint0_linear_6_4)"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_6_4"
                          x1="106.5"
                          y1="62.5"
                          x2="52"
                          y2="2.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#6ACB24" />
                          <stop offset="1" stopColor="#FED001" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="progress-count">
                      <span>82</span>
                      <h5>Percentile</h5>
                    </div>
                  </div>
                  <div className="progress-card-layout__content">
                    <span></span>Your customers’s score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container section section---2">
        <div className="service-heading ">
          <h1 className="center-heading heading">Let&apos;s Differentiate</h1>
          <p className="center-heading col-lg-9 col-11 mx-auto mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="content-container d-flex">
          <div className="content-container__value-card">
            <h4>Customer 1</h4>
            <table>
              <tr>
                <td>Address of Client</td>
                <td>
                  <img src="/../customer-probability/moon-2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Solar Capacity (KW)</td>
                <td>
                  <img src="/../customer-probability/moon-4.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Annual Prod. (kWH)</td>
                <td>
                  <img src="/../customer-probability/moon-3.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Contract Type</td>
                <td>
                  <b>Permit Design</b>
                </td>
              </tr>
              <tr>
                <td>Number of Roofs</td>
                <td>
                  <b>3</b>
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>
                  <b>Texas, USA</b>
                </td>
              </tr>
              <tr>
                <td>Zip/Postal Code</td>
                <td>
                  <b>000000</b>
                </td>
              </tr>
              <tr>
                <td>Avg. Yearly Sunlight (kWH)</td>
                <td>
                  <img src="/../customer-probability/moon-3.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Estimated Average Income ($)</td>
                <td>
                  <b>$1800</b>
                </td>
              </tr>
            </table>
            <div
              className="value-card-card progress-card-layout dark"
              style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
            >
              <div className="progress-card-layout__progress">
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.857 4.10287C76.0184 6.1346 87.8811 13.1857 95.9552 23.7763C104.029 34.3668 107.687 47.6733 106.161 60.9028C104.634 74.1324 98.0424 86.2563 87.7687 94.7299C77.495 103.204 64.3382 107.368 51.06 106.349C37.7817 105.33 25.4143 99.2073 16.5536 89.2655C7.69296 79.3237 3.02795 66.3361 3.53775 53.0285C4.04755 39.721 9.69251 27.1283 19.2878 17.8935C28.8831 8.65877 41.6827 3.5 55 3.5"
                    stroke="url(#paint0_linear_6_4)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_6_4"
                      x1="106.5"
                      y1="62.5"
                      x2="52"
                      y2="2.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6ACB24" />
                      <stop offset="1" stopColor="#FED001" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="progress-count">
                  <span>82</span>
                  <h5>Percentile</h5>
                </div>
              </div>
              <div className="progress-card-layout__content">
                <span></span>Your customers’s score
              </div>
            </div>
          </div>
          <div className="content-container__value-card">
            <h4>Customer 2</h4>
            <table>
              <tr>
                <td>Address of Client</td>
                <td>
                  <img src="/../customer-probability/moon-2.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Solar Capacity (KW)</td>
                <td>
                  <img src="/../customer-probability/moon-4.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Annual Prod. (kWH)</td>
                <td>
                  <img src="/../customer-probability/moon-3.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Contract Type</td>
                <td>
                  <b>Permit Design</b>
                </td>
              </tr>
              <tr>
                <td>Number of Roofs</td>
                <td>
                  <b>3</b>
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>
                  <b>Texas, USA</b>
                </td>
              </tr>
              <tr>
                <td>Zip/Postal Code</td>
                <td>
                  <b>000000</b>
                </td>
              </tr>
              <tr>
                <td>Avg. Yearly Sunlight (kWH)</td>
                <td>
                  <img src="/../customer-probability/moon-3.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>Estimated Average Income ($)</td>
                <td>
                  <b>$1800</b>
                </td>
              </tr>
            </table>
            <div
              className="value-card-card progress-card-layout dark"
              style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
            >
              <div className="progress-card-layout__progress">
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.857 4.10287C76.0184 6.1346 87.8811 13.1857 95.9552 23.7763C104.029 34.3668 107.687 47.6733 106.161 60.9028C104.634 74.1324 98.0424 86.2563 87.7687 94.7299C77.495 103.204 64.3382 107.368 51.06 106.349C37.7817 105.33 25.4143 99.2073 16.5536 89.2655C7.69296 79.3237 3.02795 66.3361 3.53775 53.0285C4.04755 39.721 9.69251 27.1283 19.2878 17.8935C28.8831 8.65877 41.6827 3.5 55 3.5"
                    stroke="url(#paint0_linear_6_4)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_6_4"
                      x1="106.5"
                      y1="62.5"
                      x2="52"
                      y2="2.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6ACB24" />
                      <stop offset="1" stopColor="#FED001" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="progress-count">
                  <span>82</span>
                  <h5>Percentile</h5>
                </div>
              </div>
              <div className="progress-card-layout__content">
                <span></span>Your customers’s score
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section---3"></section>
      <Footer />
    </div>
  );
}

export default Customerprobability;
