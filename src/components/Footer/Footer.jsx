import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        This website is created and maintained by
        <a href="https://www.linkedin.com/in/nataliia-zablotska/">
          {" "}
          <u>Nataliia Zablotska</u>
        </a>{" "}
        . It is designed as a template for portfolio.
      </p>
    </div>
  );
}

export default Footer;
