import React from 'react'

const Button = (props) => {
  const {label, link, blank}= props;
  return (
  
    <div>
     <a href={link} className="btn" target ={blank} >{label}</a>
  
    </div>
  )
}

export default Button
