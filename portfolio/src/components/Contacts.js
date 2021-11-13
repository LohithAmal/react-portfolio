import React, {useState} from 'react';
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"
const Contacts = () => {
  const[successMessage, setSuccessMessage]= useState("");
  const {register, handleSubmit, errors} = useForm();

const serviceID= "service_ID";
const templateID = "template_ID";
const userID = "user_bDEcQN9XkBqeGiNWOM8hl";

const onSubmit = (data, r)=>{
  sendEmail(serviceID, templateID, {
    name:data.name,
    phone:data.phome,
    email:data.email,
    sybject:data.subject,
    description:data.description
  },
  userID
  )
  r.target.reset();
}
  const sendEmail = (serviceID, templateID,variables, userID) => {
    emailjs.send(serviceID, templateID,variables, userID)
      .then(() => {
        setSuccessMessage("Form Submitted!! Thanks for your time. I will contact you soon!")
      }).catch(err=> console.log(`something wrong ${err}`));
  }
  return (
    <div className="contact">
      <div className ="text-center">
      <h1>Contact Me <hr /></h1>
      <p> Please fill the form and mention briefly what service you need</p>
      <span className="success-text">{successMessage}</span>
      </div>
      <div className="container">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* name */} 
            <input
            id="name"
            type="text"
             className="form-control" placeholder="Enter your Name" name="name" 
             ref={
               register({
                 required:"please enter your name",
                 maxLength:30,
                 message:"you must be less than 30 characters"
               })
             }
             />
             <span className="error-message">
               {errors.name && errors.name.message}
             </span>
            {/* phone */}
            <input  id="phone" type="text" className="form-control" placeholder="Enter your Phone number" name="phone" 
            ref={
              register({
                required:"please enter your phone number", 
              })
            } 
            />
             <span className="error-message">
               {errors.phone && errors.phone.message}
             </span>
            {/* email */}
            <input 
            id="email"
            type="email"
            className="form-control" placeholder="Enter your Email Address" name="email"
            ref={
              register({
                required:"please enter your Email",
                pattern:{
                  value:/^[a-zA-z0-9]+@([a-zA-z0-9]+\.)+[a-zA-z0-9]{2,3}$/i,
                  message: "invalid email"
                }
              })
            } />
            <span className="error-message">
               {errors.email && errors.email.message}
             </span>
            {/* subject */}
            <input  
            id="subject"
            type="text" className="form-control" placeholder="Enter the Subject" name="subject" 
            ref={
              register({
                required:"please add a subject for your message", 
              })
            } />
             <span className="error-message">
               {errors.subject && errors.subject.message}
             </span>
          </div>

          <div className="col-md-6 col-xs-12">
            {/* message */}
            <textarea
            id="description"  type="text" className="form-control"
            placeholder="enter your message" name="description"
            ref={
              register({
                required:"please add you messsage", 
              })
            }>
              
            </textarea>
            <span className="error-message">
               {errors.description && errors.description.message}
             </span>
            
            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
