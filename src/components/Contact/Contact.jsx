import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp, BsMessenger} from 'react-icons/bs'
import  {useRef}  from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_usoqsz5', 'template_lkoegzy', form.current, 'fSRscbA3PJjo7e4zI')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
          <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>thehanicis95@gmail.com</h5>
            <a href="mailto:thehanicis95@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Whtsapp</h4>
            <h5>+94 716311705</h5>
            {/* <a href="https://web.whatsapp.com//sennd?phone+94716311705" target='_blank'>Send a message</a> */}
            <a href="https://wa.me/+94716311705" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
          <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>TheSam Solutions - still not available</h5>
            {/* <a href="thehanicis95@gmail.com" target='_blank'>Send a message</a> */}
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='name' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact