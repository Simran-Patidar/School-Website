import React, { useReducer, useRef } from 'react'
import "./Faculty.css"
import next_icon from "../../assets/next-btn.png"
import back_icon from "../../assets/back-btn.png"
import faculty_1 from "../../assets/faculty_1.jpeg"
import faculty_2 from "../../assets/faculty_2.jpeg"
import faculty_3 from "../../assets/faculty_3.png"
import faculty_4 from "../../assets/faculty_4.jpeg"
import faculty_5 from "../../assets/faculty_5.png"
import faculty_6 from "../../assets/faculty_6.png"

const Faculty = () => { 

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -66.8){
            tx -= 16.7
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 16.7
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='faculty'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="faculty-info">
                            <img src={faculty_1} alt="" />
                            <div>
                                <h3>John Deo</h3>
                                <span>Principal</span>
                            </div>
                        </div>
                        <p>Ph.D. in Educational Leadership, ABC University. 20 years of experience in educational administration. Committed to fostering a positive and inclusive school culture</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="faculty-info">
                            <img src={faculty_2} alt="" />
                            <div>
                                <h3>Jane Smith</h3>
                                <span>Vice Principal</span>
                            </div>
                        </div>
                        <p>M.Ed. in Curriculum and Instruction, ABC University. 15 years of experience in teaching and administration. Focused on student success and teacher development</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="faculty-info">
                            <img src={faculty_3} alt="" />
                            <div>
                                <h3>Emily Johnson</h3>
                                <span>English Teacher</span>
                            </div>
                        </div>
                        <p>M.Ed. in Curriculum and Instruction, ABC University. 15 years of experience in teaching and administration. Focused on student success and teacher development
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="faculty-info">
                            <img src={faculty_4} alt="" />
                            <div>
                                <h3>Michael Brown</h3>
                                <span>Mathematics Teacher</span>
                            </div>
                        </div>
                        <p>B.S. in Mathematics, JKL University. 8 years of teaching experience. Expert in developing engaging and interactive math curricula</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="faculty-info">
                            <img src={faculty_5} alt="" />
                            <div>
                                <h3>Sophia Davis</h3>
                                <span>Science Teacher</span>
                            </div>
                        </div>
                        <p>M.S. in Biology, GHI University. 12 years of teaching experience. Passionate about hands-on learning and environmental science</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="faculty-info">
                            <img src={faculty_6} alt="" />
                            <div>
                                <h3>David Wilson</h3>
                                <span>Computer Science Teacher</span>
                            </div>
                        </div>
                        <p>B.Tech in Computer Science, LMO University. 5 years of teaching experience. Dedicated towards building good foundation in computers and technologies.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Faculty