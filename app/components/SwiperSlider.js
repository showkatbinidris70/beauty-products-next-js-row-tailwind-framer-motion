"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Rectangle_Img_337 from "@/public/assets/images/Rectangle-337.png";
import Image from "next/image";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import {Navigation} from "swiper/modules";

export default function SwiperSlider() {
    return (
        <div>
            <Swiper navigation={true}
                modules={
                    [Navigation]
                }
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={
                    () => console.log("slide change")
                }
                onSwiper={
                    (swiper) => console.log(swiper)
            }>
                <div className="flex justify-center">
                    <div>
                        <SwiperSlide>
                            <Image src={Rectangle_Img_337}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Rectangle_Img_337}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Rectangle_Img_337}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={Rectangle_Img_337}/>
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}
