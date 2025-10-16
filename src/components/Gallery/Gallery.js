import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import {Autoplay } from "swiper/modules";
import {SwiperSlide , Swiper} from "swiper/react";
import "./Gallery.css"

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="gallery-top-blur"></div>
            <Swiper
                direction="vertical"
                centeredSlides={true}
                loop={true}
                speed={3000}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 100,
                    },
                }}
                effect="slide"
                modules={[Autoplay]}
                className="swiper-container leftSwiper-container"
            >
                <SwiperSlide className="swiper-slide slide1">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns1-1.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide2">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/"><
                        img src="/gallery-img/sns1-2.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide3">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns1-3.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide4">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns1-4.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide5">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns1-5.svg" alt=""/>
                    </a>
                </SwiperSlide>
            </Swiper>
            <ul className="gallery_text">
                <li>
                    <span>BLACKPINK</span>with<span>KODAK</span>
                </li>
                <li><img src="/gallery-img/instaLogo.svg" alt=""/></li>
                <li>코닥 X 블랙핑크 공식 인스타그램</li>
                <li><a href="https://www.instagram.com/kodakphotoprinter_kr/">@kodakphotoprinter_kr</a></li>
                <li><a href="https://www.instagram.com/kodakphotoprinter_kr/">바로가기</a></li>
            </ul>
            <Swiper
                direction="vertical"
                centeredSlides={true}
                loop={true}
                speed={3000}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 100,
                    },
                }}
                effect="slide"
                modules={[Autoplay]}
                className="swiper-container rightSwiper-container"
            >
                <SwiperSlide className="swiper-slide slide5">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns2-1.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide4">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns2-2.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide3">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns2-3.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide2">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns2-4.svg" alt=""/>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide1">
                    <a href="https://www.instagram.com/kodakphotoprinter_kr/">
                        <img src="/gallery-img/sns2-5.svg" alt=""/>
                    </a>
                </SwiperSlide>
            </Swiper>
            <div className="gallery-bottom-blur"></div>
        </section>
    )
};
export default Gallery;