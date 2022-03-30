import { FaPhoneAlt } from "react-icons/fa";
import { MdWork, MdEmail } from "react-icons/md";

import TextField from "@mui/material/TextField";

const Queryform = () => {
  return (
    <>
      <div className="col col-12 query-box-container simple-shadow d-flex">
        <div className="col col-12 col-lg-5 col-xl-4 form-l">
          <h4>Contact Information</h4>
          <p>
            Thank you for visiting our website. We look forward to hearing from
            you!
          </p>
          <ul>
            <li>
              <div className="contact-row d-flex align-items-center">
                <span className="form-icon">
                  <FaPhoneAlt />
                </span>
                <span>
                  <a href="tel:+1 214 347 4393">+1 214 347 4393</a>
                </span>
              </div>
            </li>
            <li>
              <div className="contact-row d-flex align-items-center">
                <span className="form-icon">
                  <MdEmail />
                </span>
                <span>
                  <a href="mailto:SOLARDESIGN@WATTMONK.COM">
                    SOLARDESIGN@WATTMONK.COM
                  </a>
                </span>
              </div>
            </li>
            <li>
              <div className="contact-row d-flex align-items-center">
                <span className="form-icon">
                  <MdWork />
                </span>
                <span>
                  <a href="mailto:HR@WATTMONK.COM">HR@WATTMONK.COM</a>
                </span>
              </div>
            </li>
          </ul>
          <span className="form-elements">
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="col col-12 col-lg-7 col-xl-8 form-r submit-form d-flex justify-content-between flex-wrap">
          <fieldset className="col-12 col-md-6">
            <TextField id="standard-basic" label="Name *" variant="standard" />
          </fieldset>
          <fieldset className="col-12 col-md-6">
            <TextField id="standard-basic" label="Email *" variant="standard" />
          </fieldset>
          <fieldset className="col-12 col-md-6">
            {/* <label htmlFor="name"></label> */}
            <TextField
              id="standard-basic"
              label="Company Name *"
              variant="standard"
            />
          </fieldset>
          <fieldset className="col-12 col-md-6">
            {/* <label htmlFor="name"></label> */}
            <TextField
              id="standard-basic"
              // error
              label="Phone"
              // helperText="Incorrect entry."
              variant="standard"
            />
          </fieldset>
          <fieldset className="col-12">
            <TextField id="standard-basic" label="Message" variant="standard" />
          </fieldset>
          <button className="dark-btn">Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Queryform;
