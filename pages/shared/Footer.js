import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Topbutton from "./Topbutton";
import { useEffect } from "react";

// import footerLogo from '/footer-logo.svg'
const Footer = () => {
  useEffect(() => {
    const topButton = document.querySelector(".top-button");
    window.addEventListener("scroll", function (e) {
      let scrollV = this.scrollY;
      if (scrollV >= 400) {
        topButton.style.display = "block";
        topButton.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
      } else {
        topButton.style.display = "none";
      }
    });
  });

  return (
    <>
      <footer className="section footer">
        <div className="footer-bg-container col-12 d-flex">
          <span className="footer-bg col col-6"></span>
          <span className="footer-bg col col-6"></span>
        </div>
        <div className="container d-flex footer-content flex-wrap">
          <div className="footer-content-col col col-12 col-lg-6">
            <div className="logo-description l-grey-text">
              <img src="/footer-logo.svg" alt="wattmonk logo" />
              <br />
              <img
                src="/clssa.png"
                style={{ maxWidth: "120px", margin: "10px 0" }}
                alt="calssa logo"
              />
              <p className="mt-3">
                Our all team members are highly trained and experienced solar
                professionals.
              </p>
            </div>
            <div className="social-container">
              <h4 className="small-heading grey-text">
                Follow Us On Social Media
              </h4>
              <ul className="footer-social-links d-flex flex-wrap">
                <li>
                  <a href="#" className="white-text">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="white-text">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="white-text">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="white-text">
                    <BsPinterest />
                  </a>
                </li>
                <li>
                  <a href="#" className="white-text">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#" className="white-text">
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright grey-text copyright-lg">
              <p>
                © 2021 by Wattmonk Technologies Private Limited. All Rights
                Reserved. Privacy Policy
              </p>
            </div>
          </div>
          <div className="footer-content-col col col-12 col-lg-6 d-flex flex-row flex-wrap">
            <div className="menu-items-container col col-12 col-md-6">
              <h4 className="menu-heading grey-text">Menu</h4>
              <ul className="footer-menu white-text">
                <li className="footer-menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Products</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Contact Us</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="menu-items-container col col-12 col-md-6">
              <h4 className="menu-heading grey-text">Important Links</h4>
              <ul className="footer-menu white-text">
                <li className="footer-menu-item">
                  <a href="#">Services Agreements</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Media</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Blog</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="menu-items-container col col-12 col-md-6">
              <h4 className="menu-heading grey-text">Services</h4>
              <ul className="footer-menu white-text">
                <li className="footer-menu-item">
                  <a href="#">Solar Shade Analysis</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Solar Sale Proposal</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Solar Permit Packages</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">App Platform</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">PE Stamping</a>
                </li>
              </ul>
            </div>
            <div className="menu-items-container col col-12 col-md-6">
              <h4 className="menu-heading grey-text">Available On</h4>
              <ul className="footer-menu white-text">
                <li className="footer-menu-item">
                  <a href="#">
                    <img
                      style={{ maxWidth: "145px" }}
                      src="./avail-web-light.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">
                    <img
                      style={{ maxWidth: "145px" }}
                      src="./avail-android-light.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">
                    <img
                      style={{ maxWidth: "145px" }}
                      src="./avail-apple-light.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright grey-text copyright-sm">
            <p>
              © 2021 by Wattmonk Technologies Private Limited. All Rights
              Reserved. Privacy Policy
            </p>
          </div>
        </div>
      </footer>
      <Topbutton />
    </>
  );
};

export default Footer;
