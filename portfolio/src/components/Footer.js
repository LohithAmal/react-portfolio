import React from 'react'
import {FacebookShareButton, FacebookIcon,
  TwitterIcon, TwitterShareButton, LinkedinIcon, LinkedinShareButton, LineShareButton, WhatsappShareButton, WhatsappIcon
} from "react-share"
const Footer = () => {
  return (
   <div className="footer">
     <div className ="container">
       <div className="row">
         <div className="col-lg-4 col-md-6 col-sm-6">
           <div className="d-flex">
             <p>24 Secord Crescent,Brampton, Ontario</p>
           </div>
           <div className="d-flex">
            <a href ="tel:647-3268901">647-3268901</a>
           </div>
           <div className="d-flex">
             <p>lohith05amal@gmail.com</p>
           </div>
         </div>
         <div className="col-lg-3.col-md-2.col-sm-6">
           <div className="row">
             <div className="col">
               <a className="footer-nav">Home</a>
               <br />
               <a className="footer-nav">About Me</a>
             </div>
             <div className="col">
               <a className="footer-nav">Portfolio</a>
               <br />
               <a className="footer-nav">Contact Me</a>
             </div>
           </div>
         </div>
         <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
        <div className="d-flex justify-content-center">
          <FacebookShareButton  url={"https://www.facebook.com/"}
          quote={"FullStack Developer"}
          hashtag="#MERN Stack Developer"> 
            <FacebookIcon className="mx-3" size={36}/>
          </FacebookShareButton>
          {/*  */}
          <TwitterShareButton  url={"https://twitter.com/home"}
          quote={"FullStack Developer"}
          hashtag="#MERN Stack Developer"> 
            <TwitterIcon className="mx-3" size={36}/>
          </TwitterShareButton>
          {/*  */}
          <LinkedinShareButton  url={"https://www.linkedin.com/in/amal-lohith-921a16101/"}
          quote={"FullStack Developer"}
          hashtag="#MERN Stack Developer"> 
            <LinkedinIcon className="mx-3" size={36}/>
          </LinkedinShareButton>
          {/*  */}  
        </div>
        <div className="pt-3 text-center">
          Copright&copy;
          {new Date().getFullYear()}&nbsp;Amal Lohith| All Rights Reserved
        </div>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Footer
