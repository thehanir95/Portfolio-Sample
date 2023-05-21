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
              <p>You can contact me using whtsapp or put a mail.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Then you received your requirements under your required system.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>within 2 weeks I will send a pdf document and Figma style link to you.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>You can view my design and give feedback.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Then receive any changing requirements from your side.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>I will recreate that adding your changes.</p>
            </li>
          </ul>
          <div className='view_projects_container'>
         <a href="https://projectdesignssite.web.app" target='_blank' className='btn btn-primary'>View Designs</a>
         </div>

        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>You can contact me using whtsapp or put a mail.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>You can send your requirements document and any created design document(Figma or PDF)</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>If you are sending a PDF, please send separate document putting color codes if you need for your system.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Then I can study your system and give a date for first version release.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>After receiving your system first version you can view that and give me your feedbacks.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>If you have any newly changes to exiting system, I will edit the system within new timeline.</p>
            </li>
          </ul>

         <div className='view_projects_container'>
         <a href="https://projectmanagementsystem-b0407.web.app" target='_blank' className='btn btn-primary'>View Projects</a>
         </div>
        </article>
        {/* <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>You can contact me using whtsapp or put a mail.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>You can send a detailed document through mail or whtsapp for your system within requirements.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Then I can create a content for your system.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>After I will send PDF document within newly created interfaces.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>You can refer that and give any feedbacks about that.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>If you have satisfaction about my recent projects we can continue web developement of your system.</p>
            </li>
          </ul>
        </article> */}
      </div> 
    </section>
  )
}

export default Services