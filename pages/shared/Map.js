const Map = (props) => {
  return (
    <div className="map map-container">
      <img src={props.img} alt="" />
      <div className="container">
        <div className="container__card col-12 col-lg-4">
          <h3>Where we are located</h3>
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <ul className="mt-4">
            <li className="mb-3">
              <h4>Singapore (HQ)</h4>
            </li>
            <li className="mb-3">
              <h4>United States of America</h4>
            </li>
            <li className="mb-3">
              <h4>India</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Map;
