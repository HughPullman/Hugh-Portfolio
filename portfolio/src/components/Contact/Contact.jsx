import React, { useRef } from 'react'
import "./Contact.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef()
    
    const downloadFile = () =>{
        const aTag = document.createElement('a');
        aTag.href='/docs/HughPullmanCV.pdf';
        aTag.setAttribute('download', 'HughPullmanCV.pdf');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2mxew3r', 'template_dini1ne', form.current, 'p5XALq19D34nnIdVO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          var name = document.getElementById('name');
          var email = document.getElementById('email');
          var message = document.getElementById('message');

          name.value = "";
          email.value = "";
          message.value = "";
          alert('Contact Submitted!');
      };


  return (
    <div className="contact" id="contact" name="contact">
        <div className="left">
            <div className="title">Contact Me</div>
            <Link className='link' to='https://www.linkedin.com/in/hugh-pullman-03b417b1/' target='_blank'><LinkedInIcon className='icon'/>LinkedIn Profile</Link>
            <button onClick={()=> {downloadFile()}}>Download CV</button>
        </div>
        <div className="right">
            <form ref={form} className='inputForm' onSubmit={sendEmail} name="contactForm">
                <input 
                type="text"
                id='name'
                name='name'
                placeholder='Your Name'
                required
                />
                <input 
                type="text"
                id='email'
                name='email'
                placeholder='Your Email'
                required
                />
                <textarea
                name='message'
                id="message"
                rows={10}
                placeholder='Your Message'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>

        <div className="copyright">
            Copyright © Hugh Pullman
        </div>
    </div>
  )
}

export default Contact