import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
         The website is developed for educational purposes only by
        <a href="https://www.linkedin.com/in/nataliia-zablotska/">
          {" "}
          <u>Natalie Zablotska</u>
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
