import React from 'react'
import Me from '../round.jpg'
const About = () => {
  return (
    
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
          <img className="img-me" src={Me} alt="amal lohith avatar" />
          </div>
       
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="heading">ABOUT ME <hr /></h1>
      <p className="para"> Hello I am Amal Lohith !
        A full stack developer from Brampton, Ontario.
        My services are Full Stack Applications, UI/UX design, Logo design, Web design, Dynamic and static Websites.<br />
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
        </div>
      </div>
    </div>
  )
}

export default About
