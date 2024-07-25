import React from "react";
import "./Student.css";
import activity_1 from "../../assets/activity-1.jpg";
import activity_2 from "../../assets/activity-2.jpg";
import activity_3 from "../../assets/activity-3.jpg";
import activity_4 from "../../assets/activity-4.jpg";

const Student = () => {
  return (
    <div className="student">
      <div className="section1">
        <div className="left">
          <h3>Life at Springdale</h3>
          <p>
            At Springdale, we are committed to providing a vibrant and enriching
            environment that goes beyond academics. Our students have access to
            a variety of extracurricular activities, clubs, and societies that
            foster personal growth, creativity, and community involvement
          </p>
          <h3>Extracurricular Activities</h3>
          <ul>
            <li>Music</li>
            <li>Dance</li>
            <li>Drame</li>
            <li>Art</li>
            <li>Sports</li>
            <li>Science Club ans many more....</li>
          </ul>
        </div>
        <div className="right">
          <img src={activity_1} alt="" />
          <img src={activity_2} alt="" />
          <img src={activity_3} alt="" />
          <img src={activity_4} alt="" />
        </div>
      </div>

      <div className="section2">
        <div className="achievemnets">
          <h3>Students Achievements</h3>
          <p>
            At Springdale, we celebrate the remarkable achievements of our
            students across various fields. Their dedication, hard work, and
            passion are a testament to the excellence and diverse talents within
            our community. Here are some of the outstanding accomplishments of
            our students:
          </p>
          <ul>
            <li><span>John Smith: </span>National Level Math Olympiad Winner</li>
            <li><span> Sarah Lee: </span>Gold Medalist in State Swimming Championship</li>
            <li><span>Tech Innovators Club: </span>Winners of Inter-School Robotics Competition
            </li>
          </ul>
        </div>

        <div className="council">
          <h3>Students Coucil</h3>
          <p>
            The Student Council at Springdale plays a vital role in representing
            the student body, organizing events, and promoting a positive school
            culture. The council members are elected by their peers and work
            collaboratively to make our school a better place for everyone. Meet
            the dedicated leaders of our Student Council:
          </p>
          <ul>
            <li><span>Tech Innovators Club: </span>Amy Parker, Grade 12</li>
            <li><span>Vice President: </span>Rajiv Mehta, Grade 11</li>
            <li><span>Secretary: </span>Lisa Wong, Grade 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Student;
