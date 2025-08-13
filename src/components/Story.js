import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Story(){
    const images = {
        image:[
            {id:1, url:'/image/story1.png', alt:'NIKE PRISM PACK' },
            {id:2, url:'/image/story2.png', alt:'ADIDAS CELESTIAL VICTORY PACK' },
            {id:3, url:'/image/story3.png', alt:'PUMA AUDACITY PACK' },
            {id:4, url:'/image/story4.png', alt:'MIZUNO RUBY RED PACK' },
            {id:5, url:'/image/story5.png', alt:'NEW BALANCE CAUSE & EFFECT PACK' },
            {id:6, url:'/image/story6.png', alt:'SKECHERS CONTROL PACK' },
        ]
    }
    return(
        <section className="story">
            <h2>브랜드별 최신 시즌 스토리</h2>
             <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                        pagination={{clickable: true,}}
                        modules={[Pagination]}
                        className="mySwiper"
                        >
                {
                    images.image.map((item)=>(
                       
                            <SwiperSlide key={item.id}>
                                <Link to="/">
                                <img src={item.url} alt={item.alt} />
                                </Link>
                            </SwiperSlide>
                        
                    ))
                }
                  </Swiper>
        </section>
    )
}

export default Story;