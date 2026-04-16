import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import "./statistic.scss"

import img1 from "../../assets/brands/img1.webp"
import img2 from "../../assets/brands/img2.webp"
import img3 from "../../assets/brands/img3.webp"
import img4 from "../../assets/brands/img4.webp"
import img5 from "../../assets/brands/img5.webp"
import img6 from "../../assets/brands/img6.webp"
import img7 from "../../assets/brands/img7.webp"

const brands = [img1, img2, img3, img4, img5, img6, img7]

const Statistic = () => {
    return (
        <div className='statistic container'>
            <Swiper
                modules={[Autoplay, Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 12,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                loop={true}
                centeredSlides={true}
                speed={600}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="brand-swiper"
            >
                {brands.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} alt={`brand-${i + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Statistic