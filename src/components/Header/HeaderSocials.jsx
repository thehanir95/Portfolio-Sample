import React from 'react'
import {BsLinkedin, BsGithub, BsBehance }from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/thehani-rathnayake-88a247142/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/thehanir95" target='_blank'><BsGithub/></a>
        <a href="https://github.com/thehanir95" target='_blank'><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials