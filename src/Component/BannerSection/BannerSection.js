import React from "react";
import "./BannerSection.css";
import banner from "../image/Car-Banner.jpg";
const BannerSection = () => {
  return (
    <div className="banner_area">
      <div className="banner_info">
        <h1 className="banner_info_heading"> Make Your Own Store</h1>
        <p className="banner_info_para">
          With its long coastline, rolling green hills and beautiful cities,
          Portugal is a great country to discover by car. Whether you want to
          explore Lisbon, or relax on the beaches of Faro and the rest of the
          Algarve, we can find the right car for you.
        </p>
      </div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
