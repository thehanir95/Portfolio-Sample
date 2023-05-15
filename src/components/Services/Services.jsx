import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_contianer'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI / UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus cum tenetur fuga, ab.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus cum tenetur fuga,ab.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus cum tenetur fuga,ugiat ab.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus cum tenetur fuga, sit fugiat ab.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div> 
    </section>
  )
}

export default Services