import React from "react";
import Logo from "../../assets/pagebolt-logo.webp";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container padding_t">
        <div className="row ">
          <div className="col-md-4 ftr-logo">
            <a href="/">
              <img src={Logo} alt="Footer logo" />
            </a>
          </div>
          <div className="col-md-3">
            <h5>Resources</h5>
            <ul>
              <li>
                <a href="">Page Builder</a>
              </li>
              <li>
                <a href="">Theme Options</a>
              </li>
              <li>
                <a href="">Theme Builder</a>
              </li>
              <li>
                <a href="">Popup Builder</a>
              </li>
              <li>
                <a href="">Animations Engine</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Pages</h5>
            <ul>
              <li>
                <a href="">Page Builder</a>
              </li>
              <li>
                <a href="">Theme Options</a>
              </li>
              <li>
                <a href="">Theme Builder</a>
              </li>
              <li>
                <a href="">Popup Builder</a>
              </li>
              <li>
                <a href="">Animations Engine</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Locations</h5>
            <ul>
              <li>
                <a href="">Page Builder</a>
              </li>
              <li>
                <a href="">Theme Options</a>
              </li>
              <li>
                <a href="">Theme Builder</a>
              </li>
              <li>
                <a href="">Popup Builder</a>
              </li>
              <li>
                <a href="">Animations Engine</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
