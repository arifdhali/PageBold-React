import React from "react";
import "./Brand.css";
import {
  athemes,
  codrops,
  colorlib,
  graphicsfuel,
  hongkiat,
  hubspot,
  sitepoint,
  webappers,
} from "./Import.js";
const Brand = () => {
  return (
    <>
      <div className="brand">
        <div className="container text-center">
          <small>Featured in:</small>

          <div className="brands_list ">
            <div className="brands_list_img">
              <img src={athemes} alt="athemes" />
            </div>
            <div className="brands_list_img">
              <img src={codrops} alt="codrops" />
            </div>
            <div className="brands_list_img">
              <img src={colorlib} alt="colorlib" />
            </div>
            <div className="brands_list_img">
              <img src={graphicsfuel} alt="graphicsfuel" />
            </div>
            <div className="brands_list_img">
              <img src={hongkiat} alt="hongkiat" />
            </div>
            <div className="brands_list_img">
              <img src={hubspot} alt="hubspot" />
            </div>
            <div className="brands_list_img">
              <img src={sitepoint} alt="sitepoint" />
            </div>
            <div className="brands_list_img">
              <img src={webappers} alt="webappers" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
