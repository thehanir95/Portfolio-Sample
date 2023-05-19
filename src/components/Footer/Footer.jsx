import React from 'react'
import './footer.css'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {TbBrandTwitter, TbBrandInstagram, TbBrandFacebook} from 'react-icons/tb'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>TheSam</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Conatct</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><TbBrandFacebook/></a>
        <a href="https://instagram.com"><TbBrandInstagram/></a>
        <a href="https://twitter.com"><TbBrandTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; TheSam Solutions.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer