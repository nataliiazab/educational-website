import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="Education logo with a graduate hat" className="logo"
       />
      <ul>
        <li>Home</li>
        <li>Programme</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar
