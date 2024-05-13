import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        The website is developed for educational purposes by
        <a href="https://www.linkedin.com/in/nataliia-zablotska/">
          Natalie Zablotska. All information is entirely fictional.
        </a>
      </p>
      <ul>
        {" "}
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}

export default Footer;
