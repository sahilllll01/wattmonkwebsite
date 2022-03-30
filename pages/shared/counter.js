import { useEffect, useState } from "react";
import { CountUp } from "use-count-up";

const Counter = () => {
  const [sectionVisible, setSectionVisible] = useState(null);
  useEffect(() => {
    // Counter Funcionality
    const bodyheight = document.body.offsetHeight;
    document.addEventListener("scroll", function () {
      const counterPosition = document
        .querySelector(".hasCounter")
        .getBoundingClientRect().y;
      if (counterPosition > 200) {
        setSectionVisible(false);
      } else {
        setSectionVisible(true);
      }
    });
    // Counter Funcionality Ends
  });
  return (
    <div className="container">
      <div className="col col-12 d-flex topDec-line bg-white simple-shadow">
        <div className="card-break counter-card col-12 col-md-6 col-lg-3 d-flex justify-content-center flex-column align-items-center">
          <span className="counter-box">
            <span className="counter">
              <CountUp isCounting={sectionVisible} end={20000} />
            </span>
            +
          </span>
          <h4 className="text-center">Projects Completed</h4>
        </div>
        <div className="card-break counter-card col-12 col-md-6 col-lg-3 d-flex justify-content-center flex-column align-items-center">
          <span className="counter-box">
            <span className="counter">
              <CountUp isCounting={sectionVisible} end={28} />
            </span>
            +
          </span>
          <h4 className="text-center">Presence Across Cities</h4>
        </div>
        <div className="card-break counter-card col-12 col-md-6 col-lg-3 d-flex justify-content-center flex-column align-items-center">
          <span className="counter-box">
            <span className="counter">
              <CountUp isCounting={sectionVisible} end={200} />
            </span>
            +
          </span>
          <h4 className="text-center">No. of Designers</h4>
        </div>
        <div className="counter-card col-12 col-md-6 col-lg-3 d-flex justify-content-center flex-column align-items-center">
          <span className="counter-box">
            <span className="counter">
              <CountUp isCounting={sectionVisible} end={100} />
            </span>
            +
          </span>
          <h4 className="text-center">Happy Clients</h4>
        </div>
      </div>
    </div>
  );
};

export default Counter;
