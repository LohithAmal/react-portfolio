import React from 'react'
import logo from "../MYLOGO.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">

  <a className="navbar-brand" href="#"><img className = "logo" src={logo} alt = "amal lohith logo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon = { faBars } style = {{color: "#f4f3ee"}}></FontAwesomeIcon>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">About Me<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
  </div>

  </div>
</nav>
  )
}

export default Navbar
