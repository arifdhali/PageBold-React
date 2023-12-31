import React from "react";
import "./Ready_made.css";
import {
  business,
  digital_product,
  ebook,
  elearning,
  fintech,
  investmentplatform,
  leadcapture,
  mobileapp,
  salesletter,
  socialmedia,
  startup,
} from "./import";

const Ready_made = () => {
  return (
    <div className="ready-made-templates padding_t padding_b">
      <div className="padding_lr text-center">
        <small className="pink-text ">Ready-Made Templates</small>
        <div className="top">
          <h2>
            Kickstart your creativity with <br /> ready-to-use designs.
          </h2>
          <p>
            Beautiful, hand-crafted designs to get you started. Install any demo
            <br />
            or template with a single click. Mix and match anything.
          </p>
        </div>

        <div className="template_items gy-4 row padding_t">
          <div className="col-md-4">
            <img src={business} alt="business" />
            <h4>Business </h4>
          </div>
          <div className="col-md-4">
            <img src={digital_product} alt="digital_product" />
            <h4>Digital-product </h4>
          </div>
          <div className="col-md-4">
            <img src={ebook} alt="ebook" />
            <h4>ebook </h4>
          </div>
          <div className="col-md-4">
            <img src={elearning} alt="elearning" />
            <h4>Eelearning </h4>
          </div>
          <div className="col-md-4">
            <img src={fintech} alt="fintech" />
            <h4>Fintech </h4>
          </div>
          <div className="col-md-4">
            <img src={investmentplatform} alt="investmentplatform" />
            <h4>investmentplatform </h4>
          </div>
          <div className="col-md-4">
            <img src={leadcapture} alt="leadcapture" />
            <h4>leadcapture </h4>
          </div>
          <div className="col-md-4">
            <img src={mobileapp} alt="mobileapp" />
            <h4>mobileapp </h4>
          </div>
          <div className="col-md-4">
            <img src={salesletter} alt="salesletter" />
            <h4>salesletter </h4>
          </div>
          <div className="col-md-4">
            <img src={socialmedia} alt="socialmedia" />
            <h4>socialmedia </h4>
          </div>
          <div className="col-md-4">
            <img src={startup} alt="startup" />
            <h4>startup </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready_made;
