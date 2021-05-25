import React from "react";
import emailjs from 'emailjs-com';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_trxt2qc', 'template_69d34mg', e.target, 'user_3IzwGok9EyK06ot1rTh3s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     e.target.reset()
  }

  return (
    
    <div className="container" id="Contact">
    <div className="bgi">
    <div className="contactform">
    <h1>Contact Me</h1>
    <form className="contact-form" onSubmit={sendEmail}>
    
    <div className="inputbox">
    <label>Name</label>
    <input type="text" class="form-control" name="user_name" placeholder="Name" />
      
    </div>
    <div className="inputbox">
    <label>Email</label>
    <input type="email" class="form-control" name="user_email" placeholder="Email"/>
      
    </div>
    <div className="inputbox">
    <label>Message</label>
      <textarea name="message" class="form-control" placeholder="Message"/>
    </div> 
    <div className="inputbox">
      <input class="btn btn-primary" type="submit" value="Send" />
    </div>
    </form>
    </div>
    </div>
    </div>

    
  );
}