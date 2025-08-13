import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function TopBanner(){
    const topbanners =[
        {src:'/image/slide1.png', alt:'topbanner alt1'},
        {src:'/image/slide2.png', alt:'topbanner alt2'},
        {src:'/image/slide3.png', alt:'topbanner alt3'},
        {src:'/image/slide4.png', alt:'topbanner alt4'},
        {src:'/image/slide5.png', alt:'topbanner alt5'},
        {src:'/image/slide6.png', alt:'topbanner alt6'},
        {src:'/image/slide7.png', alt:'topbanner alt7'},
        {src:'/image/slide8.png', alt:'topbanner alt8'},
        {src:'/image/slide9.png', alt:'topbanner alt9'},
        {src:'/image/slide10.png', alt:'topbanner alt10'},
        {src:'/image/slide11.png', alt:'topbanner alt11'},
        {src:'/image/slide12.png', alt:'topbanner alt12'},
        {src:'/image/slide13.png', alt:'topbanner alt13'},
        {src:'/image/slide14.png', alt:'topbanner alt14'},
        {src:'/image/slide15.png', alt:'topbanner alt15'},
        {src:'/image/slide16.png', alt:'topbanner alt16'},
        {src:'/image/slide17.png', alt:'topbanner alt17'},
        {src:'/image/slide18.png', alt:'topbanner alt18'},
        {src:'/image/slide19.png', alt:'topbanner alt19'},
        {src:'/image/slide20.png', alt:'topbanner alt20'},
        {src:'/image/slide21.png', alt:'topbanner alt21'},
        {src:'/image/slide22.png', alt:'topbanner alt22'},
        {src:'/image/slide23.png', alt:'topbanner alt23'},
        {src:'/image/slide24.png', alt:'topbanner alt24'},
        {src:'/image/slide25.png', alt:'topbanner alt25'},
        {src:'/image/slide26.png', alt:'topbanner alt26'},
        {src:'/image/slide27.png', alt:'topbanner alt27'},
    ]
    return(
        <div className="top-banner">
            <Swiper modules={[Autoplay]}
                    autoplay={{delay:2000, disableOnInteraction:false}}
                    loop={true}
                    className="myswiper"
                    spaceBetween={30}
                    centeredSlides={true}
            >
                {
                    topbanners.map((item,idx)=>(
                        <SwiperSlide key={idx}>
                            <img src={item.src} alt={item.alt} className="topbanner-img" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default TopBanner;