import React from 'react'
import Covid from "../covid.jpg"
import Smile from "../smile.jpg"
import Password from "../password.jpg"
import Quiz from "../code-quiz.jpg"
import Employee from "../employee.jpg"
import Pwa from "../pwa.jpg"
import Button  from './Button';

// fontawsome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// react pop-up
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
const Portfolio = () => {

// covid coder project pop-up
const openPopupboxCovid =()=>{
  const content = (
<>
<img  className="portfolio-image-popupbox" src={Covid} alt="covid live update" /> 
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
<b>Github Repository: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/BootcampProject/Group5-COVID-Coders")}>Click Here</a>
</> 
  )
PopupboxManager.open({content}); 
}
const popupboxConfigCovid = {
titleBar:{
 enable:true,
 text:"" 
},
fadeIn: true,
fadeInSpeed:500
}
// work emotion monitor app
const openPopupboxSmile =()=>{
  const content = (
<>
<img  className="portfolio-image-popupbox" src={Smile} alt="Work Emotion Monitor App" /> 
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
<b>Github Repository: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/utor2021/Work-feelings")}>Click Here</a>
</> 
  )
PopupboxManager.open({content}); 
}
const popupboxConfigSmile = {
titleBar:{
 enable:true,
 text:"" 
},
fadeIn: true,
fadeInSpeed:500
}
// work app end

// ========================
// password generator popup
// ==============================

const openPopupboxPass =()=>{
  const content = (
<>
<img  className="portfolio-image-popupbox" src={Password} alt="covid live update" /> 
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
<b>Github Repository: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/LohithAmal/Task-3-passwordGenerator")}>Click Here</a>
</> 
  )
PopupboxManager.open({content}); 
}
const popupboxConfigPass = {
titleBar:{
 enable:true,
 text:"" 
},
fadeIn: true,
fadeInSpeed:500
}

//  password generator popup ends

// ========================
// Codining quiz  popup
// ==============================

const openPopupboxQuiz =()=>{
  const content = (
<>
<img  className="portfolio-image-popupbox" src={Quiz} alt="covid live update" /> 
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
<b>Github Repository: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/utor2021/Work-feelings")}>Click Here</a>
</> 
  )
PopupboxManager.open({content}); 
}
const popupboxConfigQuiz = {
titleBar:{
 enable:true,
 text:"" 
},
fadeIn: true,
fadeInSpeed:500
}

// >xxxxxxxxxxxxxxxxxxxxxxxxxx
// Codining quiz  popup ends

// ===============================
// employee tracker
// ======================


const openPopupboxEmployee =()=>{
  const content = (
<>
<img  className="portfolio-image-popupbox" src={Employee} alt="covid live update" /> 
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
<b>Github Repository: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/LohithAmal/UFT-12-EMPLOYEE-TRACKER")}>Click Here</a>
</> 
  )
PopupboxManager.open({content}); 
}
const popupboxConfigEmployee = {
titleBar:{
 enable:true,
 text:"" 
},
fadeIn: true,
fadeInSpeed:500
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// employee tracker ends

// ==============================
// pwa app popup
// ==================================

const openPopupboxPwa =()=>{
  const content = (
<>
<img  className="portfolio-image-popupbox" src={Pwa} alt="covid live update" /> 
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
<b>Github Repository: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/LohithAmal/PWA-BUDGET-TRACKER")}>Click Here</a>
</> 
  )
PopupboxManager.open({content}); 
}
const popupboxConfigPwa = {
titleBar:{
 enable:true,
 text:"" 
},
fadeIn: true,
fadeInSpeed:500
}

  return (
    <div className="porfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio <hr /></h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxCovid}>
           <img  className="portfolio-image  " src={Covid} alt="" /> 
           <div className="overflow"></div>
           <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxSmile}>
           <img  className="portfolio-image" src={Smile} alt="" /> 
           <div className="overflow"></div>
           <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
          </div>
          
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxPass}>
           <img  className="portfolio-image" src={Password} alt="" /> 
           <div className="overflow"></div>
           <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
          </div>
          
          {/*  */}
          <div className="portfolio-image-box"  onClick={openPopupboxQuiz}>
           <img  className="portfolio-image" src={Quiz} alt="" /> 
           <div className="overflow"></div>
           <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
          </div>
          
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxEmployee}>
           <img  className="portfolio-image" src={Employee} alt="" /> 
           <div className="overflow"></div>
           <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
          </div>
          
          {/*  */}
          <div className="portfolio-image-box" onClick={openPopupboxPwa}>
           <img  className="portfolio-image" src={Pwa} alt="" /> 
           <div className="overflow"></div>
           <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
          </div>
          
          
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigCovid} />
      <PopupboxContainer {...popupboxConfigSmile} />
    <PopupboxContainer {...popupboxConfigPass} />
    <PopupboxContainer {...popupboxConfigQuiz} />
    <PopupboxContainer {...popupboxConfigEmployee} />
    <PopupboxContainer {...popupboxConfigPwa} />
    </div>

  )
}

export default Portfolio;



    //   <div className= "portfolio-wrap">
    //     <div className="container">
    //       <h1 className="text-uppercase text-center py-6"> PORTFOLIO</h1>
    //      <div className="image-box-wrapper row justify-content-center">

    //         <div className="portfolio-box">
    //         <img className="portfolio-image" src={Covid} alt="covid live update app image" / >
    //         </div>
         
    //       {/* employee health app */}
          
        
    //       <div className="portfolio-box">
    //         <img className="portfolio-image" src={Smile} alt="work emotion image" / >
    //         </div>
          
    //       {/* password generator */}
          
        
    //       <div className="portfolio-box">
    //         <img className="portfolio-image" src={Password} alt="random password generator app image" / >
    //         </div>
       
    //       {/* quiz app */}
          
         
    //       <div className="portfolio-box">
    //         <img className="portfolio-image" src={Quiz} alt="coding quiz app image" / >
    //         </div>
      
    //       {/* employee tracker */}
          
          
    //       <div className="portfolio-box">
    //         <img className="portfolio-image" src={Employee} alt="Employee tracker app image" / >
    //         </div>
          
    //       {/* PWA app */}
          
        
    //       <div className="portfolio-box">
    //         <img className="portfolio-image" src={Pwa} alt="PWA budget tracker image" / >
      
    //         </div>
         
    //     </div>
    //   </div>

    // </div>