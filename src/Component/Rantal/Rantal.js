import React from "react";
import "./Rantal.css";
import location from "../image/location.png";
import payment from "../image/payment.png";
import trip from "../image/trip.png";
const Rantal = () => {
  return (
    <div className="rantal_area">
      <div>
        <h1 className="rantal_main_heading"> Turbo Car Warehouse Works</h1>
      </div>
      <div>
        <p className="rantal_main_para">
          The proper business solution for your developing business strategies
          and corporation
        </p>
      </div>
      <div className="rantal">
        <div className="rantal_section">
          <div>
            <img src={location} alt="" />
          </div>
          <div>
            <h4 className="rantal_headding">Search Location</h4>
            <p className="rantal_para">
              Proper Business solution for your developing <br /> business
              strategies and corporation
            </p>
          </div>
        </div>

        <div className="rantal_section">
          <div>
            <img src={payment} alt="" />
          </div>
          <div>
            <h4 className="rantal_headding">Choose Date & Time</h4>
            <p className="rantal_para">
              Proper Business solution for your developing <br /> business
              strategies and corporation
            </p>
          </div>
        </div>

        <div className="rantal_section">
          <div>
            <img src={trip} alt="" />
          </div>
          <div>
            <h4 className="rantal_headding">Save product</h4>
            <p className="rantal_para">
              Proper Business solution for your developing <br /> business
              strategies and corporation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rantal;
