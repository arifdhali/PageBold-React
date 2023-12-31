import React from "react";
import "./Ads.css";
import banner from "../../assets/ads.webp";
const Ads = () => {
  const adsBanner = {
    backgroundColor: ` var(--color-font2)`,
    backgroundImage: `url(${banner})`,
    backgroundRepeat: ` no-repeat`,
    backgroundPosition: `center right`,
    backgroundSize: `75% auto`,
  };
  return (
    <div className="padding_lr padding_t padding_b">
      <div className="ads" style={adsBanner}>
        <div className="ads-content padding_b padding_t">
          <h2>
            Take your website <br /> to the next level!
          </h2>
          <div className="btn-area">
            <button className="btn-glow">Purchase on ThemeForest</button>{" "}
            <p>or</p>
            <button>
              <span>Try it for free</span>
            </button>
          </div>
          <small>One-time purchase. No additional fees or subscriptions.</small>
        </div>
      </div>
    </div>
  );
};

export default Ads;
