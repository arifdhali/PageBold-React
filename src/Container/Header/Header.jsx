import React from "react";
import "./Header.css";
import video from "../../assets/landing.mp4";

const Header = () => {
  return (
    <div className="header">
      <div className="background_video">
        <video src={video} loop muted autoPlay></video>
      </div>
      <div className="container content">
        <h1>
          The Simple Way to Build a <br /> High-Converting Landing Page
        </h1>
        <p>
          Creating a high-converting landing page can be time-consuming and
          expensive, but not with our easy-to-use WordPress theme. With just a
          few clicks, you can have a stunning and professional landing page that
          will capture your audience's attention and turn them into loyal
          customers.
        </p>
        <div className="btm-area">
          <button className="btn-glow">Try for free</button>
          <small>Test it for free, for 7 days. No credit card required.</small>
        </div>
      </div>
    </div>
  );
};

export default Header;
