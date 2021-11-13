import React from 'react'
import ResumeAmal from "../resume.pdf"
import { Button } from 'bootstrap'
const Resume = () => {
  return (
    <div id ="resume">
      <div>
      <h1 className="rtext text-uppercase text-center py-5">My Resume <hr /></h1>
      <div class="text-center">
      <a className="btn-resume  " href={ResumeAmal} target="_blank"> Download Here</a>
      </div>
        
      </div>
    </div>
  )
}

export default Resume
