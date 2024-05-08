import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`navbar-container ${sticky ? "dark-nav" : ""}`}>
      <img
        src={logo}
        alt="Education logo with a graduate hat"
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>Programme</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
