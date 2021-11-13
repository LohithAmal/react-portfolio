import React from 'react'
import logo from "../MYLOGO.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
  <div className="container">

  <Link smooth={true} to="home" offset={-100} className="navbar-brand" href="#"><img className = "logo" src={logo} alt = "amal lohith logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon = { faBars } style = {{color: "#f4f3ee"}}></FontAwesomeIcon>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="about-me"  offset={-100} className="nav-link" href="#">About Me<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link  smooth={true} to="portfolio"  offset={-100} className="nav-link" href="#"> Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="resume"  offset={-100} className="nav-link" href="#">Resume</Link>
      </li>
      <li className="nav-item">
        <Link  smooth={true} to="contact"  offset={-100}className="nav-link" href="#">Contact</Link>
      </li>
      
    </ul>
  </div>

  </div>
</nav>
  )
}

export default Navbar
