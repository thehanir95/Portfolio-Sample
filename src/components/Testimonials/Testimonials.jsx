import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avator: AVT1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium obcaecati nulla, deserunt nobis hic esse quae suscipit odio'
  },
  {
    avator: AVT2,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium obcaecati nulla, deserunt nobis hic esse quae suscipit odio'
  },
  {
    avator: AVT1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium obcaecati nulla, deserunt nobis hic esse quae suscipit odio'
  },
  {
    avator: AVT2,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusantium obcaecati nulla, deserunt nobis hic esse quae suscipit odio'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial_container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avator, name, review}, index) => {
            return (
            <SwiperSlide className='testimonial' key={index }>
              <div className="client_avator">
                <img src={avator} alt="avator" />
              </div>
              <h5>{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials