import Card from "@mui/material/Card";
import Head from "next/head";
import Header from "./shared/header";
// import Ourservicesslider from './Home/Ourservicesslider'
import OSslider from "./Home/OSslider";
import ScndSlider from "./Home/Scndslider";
import { useEffect, useState } from "react";
import Logos from "../json-data/Logos";
import Queryform from "./shared/Queryform";
import HeaderImg from "./Home/HeaderImg";
import Footer from "./shared/Footer";
import gsap from "gsap/dist/gsap.js";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
import Serviceslider from "./Home/Serviceslider";
import Appslider from "./Home/Appslider";
import Counter from "./shared/counter";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const [sectionVisible, setSectionVisible] = useState(null);

  useEffect(() => {
    // Video Funcionality
    const registerVideo = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      const scrollVideo = () => {
        if (video.duration) {
          const distanceFromTop =
            window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled =
            (window.scrollY - distanceFromTop) /
            (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
          // console.log(distanceFromTop + ' distanceFromTop')
        }
        requestAnimationFrame(scrollVideo);
      };
      requestAnimationFrame(scrollVideo);
    };
    registerVideo("#bound-one", "#bound-one video");
    // Video Funcionality Ends

    const faq = document.getElementsByClassName("faq-list-item");
    for (let i = 0; i < faq.length; i++) {
      faq[i].addEventListener("click", function () {
        this.classList.toggle("active-list");
      });
    }

    const permitRoof = document.getElementById("permit-roof");
    permitRoof.addEventListener("click", function () {
      window.open("https://www.wattmonk.net/");
    });

    const prelimRoof = document.getElementById("prelim-roof");
    prelimRoof.addEventListener("click", function () {
      window.open("https://www.wattmonk.net/");
    });

    const gsapTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".progress-line-stretch",
        markers: false,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsapTL.to(".progress-line-stretch", { width: "100%", duration: 5 });

    window.addEventListener("scroll", function () {
      const pregressLine = document.querySelector(".progress-line-stretch")
        .style.width;
      // console.log(pregressLine)

      if (pregressLine >= "17%") {
        document
          .querySelectorAll(".progress-pointer")[0]
          .classList.add("pointer-active");
      } else {
        document
          .querySelectorAll(".progress-pointer")[1]
          .classList.remove("pointer-active");
      }

      if (pregressLine < "17%") {
        document
          .querySelectorAll(".progress-pointer")[1]
          .classList.remove("pointer-active");
      }

      if (pregressLine > "36%") {
        document
          .querySelectorAll(".progress-pointer")[1]
          .classList.add("pointer-active");
      } else {
        document
          .querySelectorAll(".progress-pointer")[1]
          .classList.remove("pointer-active");
      }

      if (pregressLine > "61%") {
        document
          .querySelectorAll(".progress-pointer")[2]
          .classList.add("pointer-active");
      } else {
        document
          .querySelectorAll(".progress-pointer")[2]
          .classList.remove("pointer-active");
      }

      if (pregressLine > "86%") {
        document
          .querySelectorAll(".progress-pointer")[3]
          .classList.add("pointer-active");
      } else {
        document
          .querySelectorAll(".progress-pointer")[3]
          .classList.remove("pointer-active");
      }

      // if (
      //   document.querySelector(".progress-line-stretch").style.width > "36%"
      // ) {
      //   document
      //     .querySelectorAll(".progress-pointer")[1]
      //     .classList.add("pointer-active");
      // } else if (
      //   document.querySelector(".progress-line-stretch").style.width > "61%"
      // ) {
      //   document
      //     .querySelectorAll(".progress-pointer")[2]
      //     .classList.add("pointer-active");
      // } else if (
      //   document.querySelector(".progress-line-stretch").style.width > "86%"
      // ) {
      //   document
      //     .querySelectorAll(".progress-pointer")[3]
      //     .classList.add("pointer-active");
      // }

      // else {
      //   document
      //     .querySelectorAll(".progress-pointer")[1]
      //     .classList.remove("pointer-active");
      // }

      // if (pregressLine > "61%") {
      //   document
      //     .querySelectorAll(".progress-pointer")[2]
      //     .classList.add("pointer-active");
      // } else {
      //   document
      //     .querySelectorAll(".progress-pointer")[2]
      //     .classList.remove("pointer-active");
      // }

      // if (pregressLine > "86%") {
      //   document
      //     .querySelectorAll(".progress-pointer")[3]
      //     .classList.add("pointer-active");
      // } else {
      //   document
      //     .querySelectorAll(".progress-pointer")[3]
      //     .classList.remove("pointer-active");
      // }
    });
  });

  return (
    <div className="container-fluid px-0">
      {/* <Counter /> */}
      <Head>
        <title>Home</title>
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

      <section className="section-1 bg-grey d-flex">
        <span className="clip-box"></span>
        <div className="container d-flex">
          <div className="header-col col-lg-6 col-md-12">
            <h1>Your Everyday Solar Store</h1>
            <p>
              <b>
                WattMonk, is on a mission to accelerate solar adoption to fight
                global warming
              </b>
            </p>
            <div className="row button-alignment">
              <button>
                <a className="dark-btn" href="">
                  Book now
                </a>
              </button>
              <button style={{ padding: "0" }}>
                <a className="unfilled-btn" href="">
                  Contact Us
                </a>
              </button>
            </div>
          </div>
          <div className="header-col col-lg-6 col-md-12">
            <HeaderImg />
          </div>
        </div>
        <img src="../../../public/logos/Enphase.png" alt="" />
      </section>

      {/* Shubham Codes */}

      {/* <section className="section-1 d-flex">
                <div className="col-6 d-flex align-items-center pl-6">
                    <div className="pt-5" style={{width:'18rem'}}>
                        <h1>Your Everyday Solar Store</h1>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="col-second col-6 bg-yellow">
                    <img src="/banner.png" width='700px' height='560px'/>
                </div>
            </section> */}

      {/* <section className="section-2">
                <div id="bound-one" class="d-flex justify-content-center">
                    <div class="content">
                        <p>WebM Video</p>
                        <video style={{'height': '800px'}}>
                            <source src="/wattmonk app.mp4" type="video/mp4"/>
                            <p>Your user agent does not support the HTML5 Video element.</p>
                        </video>
                    </div>
                </div>
            </section> */}

      {/* <section className="section-2 section">
                <h2 className='heading'>Solar Services journey</h2>
                <div class="timeline">
                    <div class="events">
                        <ol>
                            <ul>
                                <li>
                                    <a href="#0" class="selected">
                                        <div className='content-upside'>
                                            <img src='./SolarShadeIcon.svg'/>
                                            <p><span className='font-bold'>Site Assessment and Sales Proposal</span> -- In just 1 hours* of the design request.</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#1">
                                        <div className='content-downside'>
                                            <img src='./SolarShadeIcon.svg'/>
                                            <p><span className='font-bold'>Site Assessment and Sales Proposal</span> -- In just 1 hours* of the design request.</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <div className='content-upside'>
                                            <img src='./SolarShadeIcon.svg'/>
                                            <p><span>Site Assessment and Sales Proposal</span> -- In just 1 hours* of the design request.</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#1">
                                        <div className='content-downside'>
                                            <img src='./SolarShadeIcon.svg'/>
                                            <p><span className='font-weight-bold'>Site Assessment and Sales Proposal</span> -- In just 1 hours* of the design request.</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </ol>
                    </div>
                </div>

            </section> */}

      {/* Shubham Codes End */}

      <section className="section-2 section">
        <div className="container">
          <div className="col-12 text-center">
            <h2 className="heading">Solar Services journey</h2>
          </div>
        </div>
        <div className="container">
          <div className="progress-container">
            <div className="progress-line-container">
              <span className="progress-line"></span>
              <span className="progress-line-stretch"></span>
              <div className="progress-line-pointers d-flex">
                <div>
                  <span className="progress-pointer"></span>
                  <span className="progress-pointer"></span>
                  <span className="progress-pointer "></span>
                  <span className="progress-pointer "></span>
                </div>
              </div>
            </div>
            <div className="row progress-phone-content-container">
              <Serviceslider />
            </div>
            <div className="progress-content-container">
              <div className="d-flex progress-content-row">
                <div className="col-8 col-lg-3">
                  <img src="./SolarShadeIcon.svg" alt="" />
                  <p>
                    <span className="font-bold">
                      Site Assessment and Sales Proposal --
                    </span>
                    In just 1 hours* of the design request
                  </p>
                </div>
                <div className="col-8 col-lg-3 blank">
                  <img src="./SolarShadeIcon.svg" alt="" />
                  <p>
                    <span className="font-bold">Site Survey --</span>
                    Complete a Site Survey in couple of hours
                  </p>
                </div>
                <div className="col-8 col-lg-3">
                  <img src="./site-survey.svg" alt="" />
                  <p>
                    <span className="font-bold">Site Survey --</span>
                    Complete a Site Survey in couple of hours
                  </p>
                </div>
                <div className="col-8 col-lg-3 blank">
                  <img src="./SolarShadeIcon.svg" alt="" />
                  <p>
                    <span className="font-bold">PE Stamping --</span>
                    Get Stamped permit plans in 12 Hours*
                  </p>
                </div>
              </div>
              <div className="d-flex progress-content-row">
                <div className="col-8 col-lg-3 blank"></div>
                <div className="col-8 col-lg-3">
                  <img src="./pv-permit.svg" alt="" />
                  <p>
                    <span className="font-bold">PV Permit Design -- </span>
                    In just 6 hours* of the design request
                  </p>
                </div>
                <div className="col-8 col-lg-3 blank"></div>
                <div className="col-8 col-lg-3">
                  <img src="./pe-stamp.svg" alt="" />
                  <p>
                    <span className="font-bold">PE Stamping -- </span>
                    Get Stamped permit plans in 12 Hours*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 section bg-grey">
        <div className="container">
          <div className="heading-cont d-flex">
            <div className="section-head col-12 col-lg-9 heading-sub-cont">
              <h2 className="heading">A Snapshot of Our Services</h2>
              <p>
                We offer a single platform catering to all your solar service
                needs starting from Site assessment to As build drawings.
              </p>
            </div>
            <div className="col-12 col-lg-3 text-end button-sub-cont">
              <button className="button">Buy now</button>
            </div>
          </div>
        </div>
        <div className="container service-container">
          <div className="services-cards-layout">
            <div className="row col-12 mt-5 d-flex flex-wrap">
              <div className="service-card col-12 col-lg-6 col-md-12">
                <div className="d-flex service-card-content cards-shadow">
                  <div className="col-12 col-xl-5 col-lg-12 col-md-5">
                    <h3 className="sub-heading">Shade Analysis Report</h3>
                    <p>
                      Get Shading analysis in just 1 hours* of the design
                      request. Compatible with Aurora, Solo, Helioscope,
                      Opensolar, Energy tool base
                    </p>
                    <p className="heading service-price">$20*</p>
                    <button>
                      <a className="dark-btn" href="">
                        Order Now
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="img-position">
                      <img src="/Permit Service.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card col-12 col-lg-6 col-md-12">
                <div className="d-flex service-card-content cards-shadow">
                  <div className="col-12 col-xl-5 col-lg-12 col-md-5">
                    <h3 className="sub-heading">Site Survey Tool</h3>
                    <p>
                      An independent Solar site survey tool (application)
                      enables your sales reps to capture critical site
                      information during Sales Proposal meetings.
                    </p>
                    <p className="heading service-price">Trial</p>
                    <button>
                      <a className="dark-btn" href="">
                        Order Now
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="img-position">
                      <img src="/Permit Service.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card col-12 col-lg-6 col-md-12">
                <div className="d-flex service-card-content cards-shadow">
                  <div className="col-12 col-xl-5 col-lg-12 col-md-5">
                    <h3 className="sub-heading">Permit Design</h3>
                    <p>
                      Widely accepted Solar permit designs/plan sets for
                      grid-tied and off-grid residential and commercial solar
                      systems.
                    </p>
                    <p className="heading service-price">$60*</p>
                    <button>
                      <a className="dark-btn" href="">
                        Order Now
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="img-position">
                      <img src="/Permit Service.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-card col-12 col-lg-6 col-md-12">
                <div className="d-flex service-card-content cards-shadow">
                  <div className="col-12 col-xl-5 col-lg-12 col-md-5">
                    <h3 className="sub-heading">PE Stamping</h3>
                    <p>
                      Across the US get your residential and commercial solar
                      projects stamped for both structural and electrical
                      stamps.
                    </p>
                    <p className="heading service-price">$150*</p>
                    <button>
                      <a className="dark-btn" href="">
                        Order Now
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="img-position">
                      <img src="/Permit Service.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4 container">
        <div className="heading-cont d-flex">
          <div className="section-head col-12 col-xxl-9 col-lg-8 heading-sub-cont">
            <h2 className="heading">Our Services</h2>
          </div>
          <div className="col-12 col-xxl-3 col-lg-4 text-end button-sub-cont">
            <div className="toggle-button active-toggle">
              <button>Residential</button>
              <button className="active-toggle">Commercial</button>
            </div>
          </div>
        </div>
        <div className="row OSparent">
          <div className="col-12 col-lg-9 col-xl-8">
            <OSslider />
          </div>
          <div className="OS-side-cont col-3 col-xl-4">
            <h3 className="sub-heading mb-2 changable">Site Assessment</h3>
            <p className="changable-para">
              A solar site assessment involves evaluation of site suitability,
              solar access, shadowing considerations and other variables. You
              will get MEASUREMENT OF SOLAR ACCESS , EVALUATION OF INFLUENCE
              FROM SURROUNDINGS. Site assessment is also popularly known as
              Shade analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="section-5 bg-grey">
        <div className="container d-flex">
          <div className="col-12 col-lg-6">
            <div className="app-sec-heading">
              <h2 className="heading">
                Experience our solar services with the Wattmonk platform and app
              </h2>
              <div className="avl-icns mt-4 flex-row d-flex">
                <div className="d-flex flex-wrap justify-content-center">
                  <img
                    style={{ margin: "0 10px", maxWidth: "145px" }}
                    src="./avail-android.svg"
                    alt=""
                  />
                  <img
                    style={{ maxWidth: "145px" }}
                    src="./avail-apple.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="app-points mt-5 d-flex flex-row flex-wrap"
              style={{ padding: "0px" }}
            >
              <div className="mb-5 col-12 col-md-6">
                <img className="mb-4" src="/Check.png" alt="icon" />
                <h5>Order on the go</h5>
                <p>
                  Freedom to order solar design services with just a click of a
                  button.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <img className="mb-4" src="/access.png" alt="icon" />
                <h5>Access projects Anytime</h5>
                <p>Communicate in real time with the design team.</p>
              </div>
              <div className="mb-5 col-12 col-md-6">
                <img className="mb-4" src="/chat.png" alt="icon" />
                <h5>Chat with designers</h5>
                <p>
                  Stay in control of your solar designs and stamps all in one
                  place.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <img className="mb-4" src="/Download.png" alt="icon" />
                <h5>Download Designs</h5>
                <p>Accessing and sharing solar projects has become easier. </p>
              </div>
            </div>
            <div className="row app-points-phone">
              <Appslider />
            </div>
          </div>
          <div className="app-visual col-12 col-lg-6 d-flex align-items-center justify-content-end">
            <img
              src="/phone.png"
              alt="iphone mockup"
              style={{ maxWidth: "70%" }}
            />
          </div>
        </div>
        <div className="container mt-3">
          <div className="text-center">
            <h2 className="heading">Experience our Wattmonk platform</h2>
            <div className="mt-4 flex-row d-flex justify-content-center">
              <div className="d-flex flex-wrap justify-content-center">
                <img
                  style={{ maxWidth: "145px" }}
                  src="./avail-web.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div id="bound-one" className="d-flex justify-content-center">
              <div className="content">
                <video style={{ mixBlendMode: "multiply" }}>
                  <source src="/wattmonk app.mp4" type="video/mp4" />
                  <p>
                    Your user agent does not support the HTML5 Video element.
                  </p>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-6 section bg-black">
        <div className="container">
          <div className="heading-cont d-flex white-text">
            <div className="section-head col-12 col-lg-9 heading-sub-cont">
              <h2 className="heading">
                Wattmonk One-stop Solar platform
                <br />
                for PV Permit Packages
              </h2>
              <p>
                We make it easy to go solar by overseeing your project from
                solar Sales proposal, Site survey , PV Permit design to PE
                stamping. This is achieved by fast turnaround time, database of
                AJH & utility requirements for most accurate permit plan set
                creation. We have solar industry experts for handling
                residential, commercial, shops/ independent buildings &
                carports.
              </p>
            </div>
            <div className="col-12 col-lg-3 text-end button-sub-cont">
              <button className="button">Explore</button>
            </div>
          </div>
          <div className="row mt-5 scndSlider">
            <div className="col col-12">
              <ScndSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="section-7 hasCounter bg-grey">
        <Counter />
      </section>

      <section className="section-8 container d-flex">
        <div className="col col-12 col-lg-6">
          <div className="sticky-box sec-headings">
            <h2 className="heading">
              Some Of The Major Brands We Proudly Support.
            </h2>
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
                <img src={img} alt="logo png" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-9">
        <div className="service-heading ">
          <h1 className="center-heading heading">Come and work with us</h1>
        </div>
        <div className="d-flex container justify-content-between">
          <div className="col col-12 col-lg-6 register-card text-center topDec-line bg-white simple-shadow">
            <h4>Register as a Permit Designer</h4>
            <p>
              Become part of a growing solar design company that provides a
              strong platform for your career. 100% Privacy Protected! with a
              high level of commitment and background verifications.
            </p>
            <button>
              <a className="dark-btn" href="">
                Register Now
              </a>
            </button>
          </div>
          <div className="col col-12 col-lg-6 register-card text-center topDec-line bg-white simple-shadow">
            <h4>Register as a PE Engineer</h4>
            <p>
              Are you a Professional Engineer (PE) who wants to expand their
              business with an ever growing solar design partner. All
              transactions are secure with a high level of commitment and
              background verifications.
            </p>
            <button>
              <a className="dark-btn" href="">
                Register Now
              </a>
            </button>
          </div>
          <div className="phone-card col col-12 col-lg-6 register-card text-center topDec-line bg-white simple-shadow">
            <h4>Register with us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="mb-3">
              <a className="dark-btn" href="">
                Permit Designer
              </a>
            </button>
            <button>
              <a className="dark-btn" href="">
                PE Engineer
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="section-10 section faq bg-grey">
        <div className="container">
          <div className="col-12 text-center faq-head">
            <h2 className="heading">Frequently asked questions</h2>
            <p>
              If you have any query, contact us anytime regarding our services,
              our company or using this website.
            </p>
          </div>
          <ul className="faq-list">
            <li className="faq-list-item d-flex active-list">
              <div className="q-info col-11">
                <h4 className="q-head">What Service does Wattmonk provide?</h4>
                <p className="q-para mt-3">
                  Wattmonk caters to Solar professionals, including EPC&apos;s,
                  developers, dealers, and installers, providing everything from
                  customer pitching to PE stamps. These include Prelim Designs
                  (Solar Shade analysis, Sales proposals), Survey features,
                  Permit Design & PE stamping
                </p>
              </div>
              <div className="q-nav"></div>
            </li>
            <li className="faq-list-item d-flex">
              <div className="q-info col-11">
                <h4 className="q-head">
                  What type of projects does Wattmonk handle?
                </h4>
                <p className="q-para mt-3">
                  Wattmonk handles residential & commercial projects, including
                  rooftop, ground mount & carports.
                </p>
              </div>
              <div className="q-nav"></div>
            </li>
            <li className="faq-list-item d-flex">
              <div className="q-info col-11">
                <h4 className="q-head">
                  How does Wattmonk solar installer&apos;s lives better?
                </h4>
                <p className="q-para mt-3">
                  Wattmonk helps reduce design costs by up to 50%.
                  <br />- Improve Delivery timelines (Get designs in hours, not
                  in days)
                  <br />- Execute a 3 step Quality assurance process on each
                  design before we deliver it
                  <br />
                  -We are available 24x7 with more than 100 designers on our
                  payroll
                </p>
              </div>
              <div className="q-nav"></div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-11 query-form">
        <div className="form-head-title bg-grey">
          <div className="container">
            <div className="col-12 text-center">
              <h2 className="heading">Have a query? Talk to us</h2>
              <p>
                If you would like to know more about our Solar services please
                feel free shoot us a message using this web form.
              </p>
            </div>
          </div>
        </div>
        <div className="container form-container">
          <Queryform />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
