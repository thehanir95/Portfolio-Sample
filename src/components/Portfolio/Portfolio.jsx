import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fos.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  // {
  //   id:1,
  //   image: IMG1,
  //   title: 'Portfolio Project',
  //   github: 'https://github.com/thehanir95/Single-Page-Application.git',
  //   demo: 'https://project-portfolio-d7847.web.app/'
  // },
  // {
  //   id:2,
  //   image: IMG2,
  //   title: 'Projects Collection for Admin',
  //   github: 'https://github.com/thehanir95/Project_Collection_Admin_Panel.git',
  //   demo: 'https://project-collection-97c01.web.app/'
  // },
  // {
  //   id:3,
  //   image: IMG3,
  //   title: 'Resturants Management System',
  //   github: 'https://github.com/thehanir95/Resturant-Management-System.gittest.com',
  //   demo: 'https://project-restaurant-management.web.app/'
  // },
  {
    id:1,
    image: IMG1,
    title: 'Food Ordering System',
    github: 'https://github.com/thehanir95/Single-Page-Application.git',
    demo: 'https://www.figma.com/file/DvlWHGp7z143c30GDDjQqN/Food-Ordering-App?type=design&node-id=0%3A1&t=kBkwYTJJVaRBKXjd-1'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title,github, demo}) => {
            return(
              <article className='portfolio_item' key={id}>
                <div className='portfolio_item-image'>
                  <img src={image} alt="IMG1" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                <a href={github} className='btn'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>  
                </div>
              </article>
            )
          })
        }
             
      </div>
    </section>
  ) 
}

export default Portfolio