import React from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/pagebolt-logo.webp";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <a href="" className="navbar-logo">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#solutions">Solutions</a>
        </li>
        <li>
          <a href="#security">Security</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>

      <div className="btn">
        <a href="" className="btn ">
          Login
        </a>
        <a href="" className="btn-signup">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
