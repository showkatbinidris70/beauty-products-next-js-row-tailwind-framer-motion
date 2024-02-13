"use client";
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import EllipseImg_77 from "@/public/assets/images/Ellipse-77.svg";
import EllipseImg_76 from "@/public/assets/images/Ellipse-76.svg";
import EllipseImg_78 from "@/public/assets/images/Ellipse-78.svg";
import Image from 'next/image';

export default function FitnessSwiperSlider() {
    return (
        <div>
            <section className="freshness bg-[#FAFBFF] pb-10 pt-6">
                <div className="container max-w-7xl px-4">
                    <Swiper slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={
                            {
                                delay: 2500,
                                disableOnInteraction: false
                            }
                        }
                        breakpoints={
                            {
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50
                                }

                            }
                        }
                        modules={
                            [Pagination]
                        }
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="my-1 md:my-0 w-full item flex justify-center cursor-pointer">Mine</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 md:my-0 w-full item flex justify-center cursor-pointer">TOUCHUP</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 md:my-0 w-full item flex justify-center cursor-pointer">Skin Fresh
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 md:my-0 w-full item flex justify-center cursor-pointer">HoolaBuu</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 md:my-0 w-full item flex justify-center cursor-pointer">Skin Fresh
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-1 md:my-0 w-full item flex justify-center cursor-pointer">HoolaBuu</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </div>
    )
}
