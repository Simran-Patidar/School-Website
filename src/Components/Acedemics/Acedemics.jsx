import React from "react";
import "./Acedemics.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import program_icon from "../../assets/program-icon.png";

const Acedemics = () => {
  return (
    <div className="acedemics">
      <div className="acedemic">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={program_icon} alt="" />
          <h3>Primary(Grade 1-5)</h3>
          <div className="subject">
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Science</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
        </div>
        </div>
        
      </div>
      <div className="acedemic">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={program_icon} alt="" />
          <h3>Secondary(Grade 6-10)</h3>
          <div className="subject">
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science(PCM)</li>
            <li>Social Studies</li>
            <li>Computer Science</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="acedemic">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={program_icon} alt="" />
          <h3>Senior Secondary(Grade 11-12)</h3>
          <div className="subject">
          <ul>
            <li>Science Stream
            </li>
            <li>Commerce Stream</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Acedemics;
