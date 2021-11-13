import React from 'react'
import Typed from "react-typed";
import Button  from './Button';
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
        <Button label="GitHub" link="https://github.com/LohithAmal" blank="_blank"></Button>
      </div>
      
    </div>
    
  )
}

export default Header
