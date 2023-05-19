import React from 'react'
import './about.css'
import ME from '../../assets/4.png'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about_container'>
        {/* <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt="about me" />
          </div> 
        </div> */}

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
            <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            {/* <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article> */}

            <article className='about_card'>
            <AiOutlineFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>I am a self-motivated, adaptable and responsible individual who is seeking a career opportunity where I can contribute my skills and experience for self and organizational success. Having worked in highly pressurized business environment, I am capable to manage any situation and work with diverse people regardless of their skills and capabilities to achieve common business goals. With that experience and exposure, I can adapt myself according to situations.</p>
          <div className='about-btn'>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About