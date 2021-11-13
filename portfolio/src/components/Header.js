import React from 'react'
import Typed from "react-typed";
const Header = () => {
  return (
    <div className="header-wraper">
      <div className = "main-info">
        <h1> Full Stack Web developer</h1>
        <Typed className="type-text" strings={
          ["UI/UX", "Web Designs", "Web developments","React Apps" ]
        }
        typeSpeed={40} 
        backSpeed={60}
        loop
        />
        <a href="#" className="btn">Contact Me</a>
      </div>
      
    </div>
    
  )
}

export default Header
