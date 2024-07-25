import React from 'react'
import "./Admission.css"
import admission_img from "../../assets/admission.jpg"
import arrow from "../../assets/arrow.png"

const Admission = () => {
  return (
    <div className='admission'>
        <div className="admission-info">
        <h3>ADMISSION OPEN </h3>
        <h2>Start Your Journey with Springdale Public School</h2>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        <button className='btn'>Apply Now <img src={arrow} alt="" /></button>
        </div>

        <div className="date">
            <h3>IMPORTANT DATES</h3>
            <ul>
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
                <li>Announcement of Results: April 30th</li>

            </ul>
        </div>
    </div>
  )
}

export default Admission