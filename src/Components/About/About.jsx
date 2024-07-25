import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
         <span>History: </span>Founded in 1985, Springdale Public School has been dedicated
          to providing quality education and holistic development to students.
        </p>
        <p>
        <span>Vision: </span>To create a learning environment that fosters academic
          excellence, critical thinking, and ethical values.
        </p>
        <p>
        <span>Mission: </span>To empower students with the knowledge, skills, and values
          needed to thrive in a dynamic world.
        </p>
        <p>
        <span>Principal's Message: </span>At Springdale, we believe in nurturing the
          potential of every student and guiding them towards a successful
          future.
        </p>
        <p>
         <span>Infrastructure and Facilities: </span>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
