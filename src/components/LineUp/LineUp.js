import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import {SwiperSlide , Swiper} from "swiper/react";
import "./LineUp.css"

const LineUp = () => {

    return (
        <section className="lineUp acontent">
            <h4>Photo printer & Cartridge</h4>
            {/*포토프린트 라인업*/}
            <div className="photoprinter">
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    navigation
                    scrollbar={{ hide: false }}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥 미니2 ERA-1.png`} alt="" />
                            <p>코닥 미니2 ERA 포토프린터<span>사진인화기+카트리지 8매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니2-ERA-2.png`} alt="" />
                            <p>코닥 미니2 ERA 포토프린터<span>사진인화기+카트리지 68매 번들</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥 미니3 ERA-1.png`} alt="" />
                            <p>코닥 미니3 ERA 포토프린터<span>사진인화기+카트리지 8매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-ERA-2.png`} alt="" />
                            <p>코닥 미니3 ERA 포토프린터<span>사진인화기+카트리지 68매 번들</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니2-레트로-1.png`} alt="" />
                            <p>코닥 미니2 레트로 포토프린터<span>사진인화기+카트리지 8매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니2-레트로-2.png`} alt="" />
                            <p>코닥 미니2 레트로 포토프린터<span>사진인화기+카트리지 68매 번들</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-레트로-1.png`} alt="" />
                            <p>코닥 미니3 레트로 포토프린터<span>사진인화기+카트리지 8매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-레트로-2.png`} alt="" />
                            <p>코닥 미니3 레트로 포토프린터<span>사진인화기+카트리지 68매 번들</span></p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="photoprinter_text">Photo Printer <span>Line-Up</span></div>
            </div>

            {/*카트리지 라인업*/}
            <div className="cartridge">
                <div className="cartridge_text">Cartridge<span>Line-Up</span></div>
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    navigation
                    scrollbar={{ hide: false }}
                    slidesPerView={1}
                    loop={true}
                    dir="rtl" // 기존에 rtl로 되어 있었음
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="cart_mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니2-전용-2인치-카트리지-60매.png`} alt="" />
                            <p>코닥 미니2 전용 2인치<span>카트리지 60매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니2-전용-2인치-카트리지-120매.png`} alt="" />
                            <p>코닥 미니2 전용 2인치<span>카트리지 120매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-전용-3인치-카트리지-60매.png`} alt="" />
                            <p>코닥 미니3 전용 3인치<span>카트리지 60매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-전용-3인치-카트리지-120매.png`} alt="" />
                            <p>코닥 미니3 전용 3인치<span>카트리지 120매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-전용-3인치-카트리지-60매.png`} alt="" />
                            <p>코닥 미니3 전용 3인치<span>카트리지 60매</span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/lineUp-img/코닥-미니3-전용-3인치-카트리지-120매.png`} alt="" />
                            <p>코닥 미니3 전용 3인치<span>카트리지 120매</span></p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )

};
export default LineUp;