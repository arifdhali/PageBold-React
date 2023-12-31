import React from "react";
import "./Ads.css";
import banner from "../../assets/ads.webp";
const Ads = () => {
  return (
    <div className="ads padding_lr" style={`background:URL(${banner})`}>
      <div className="ads-content padding_b padding_t">
        <h2>
          Take your website <br /> to the next level!
        </h2>
        <div className="btn-area">
          <button className="btn-glow">Purchase on ThemeForest</button>{" "}
          <p>or</p>
          <button className="btn btn-primary">
            <span>Try it for free</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ads;
