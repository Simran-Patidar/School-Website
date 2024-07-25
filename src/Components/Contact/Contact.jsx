import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/mail-icon.png"
import map_icon from "../../assets/map-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "e8c7aa1f-f54a-4db4-a734-fe5f692061bf");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            console.log("success", response)
            setResult(`Form Submitted Successfully`);
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />info@springdale.edu</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={map_icon} alt="" />Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required></input>   
                <label>Phone Number</label>
                <input type="tel" placeholder='Enter your mobile number' name='phone' required></input>          
                <label>Write your message here</label>
               <textarea name='msg' rows="6" placeholder='Enter your message' required></textarea>

               <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact