"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import EllipseImg_70 from "@/public/assets/images/Ellipse-70.png";
import EllipseImg_72 from "@/public/assets/images/Ellipse-72.svg";
import EllipseImg_77 from "@/public/assets/images/Ellipse-77.svg";
import EllipseImg_76 from "@/public/assets/images/Ellipse-76.svg";
import EllipseImg_78 from "@/public/assets/images/Ellipse-78.svg";
import Image from 'next/image';

export default function TestimoinialsSwiperSlider() {
    return (
        <div>
            <section className="testimoinial bg-[#FAFBFF] pb-10 pt-12">
                <div className="container max-w-7xl px-4">
                    <div className="flex justify-between">
                        <div className="title">Testimoinials</div>
                        <div>Testimoinials</div>
                    </div>
                    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="my-1 md:my-0 w-full">
                            <div className="card shadow-sm p-10">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="32" viewBox="0 0 184 32" fill="none">
                                        <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#FFAF00"/>
                                        <path d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z" fill="#FFAF00"/>
                                        <path d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z" fill="#FFAF00"/>
                                        <path d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z" fill="#FFAF00"/>
                                        <path d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z" fill="#FFAF00"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="message mt-3">
                                        K-Beauty got us hooked on Korean BB Creams and jelly
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            cleansers. J- Beauty convinced us of the benefits of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Japanese essences and sake ingredients.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-center mt-5">
                                    <div>
                                        <Image src={EllipseImg_77}/>
                                    </div>
                                    <div>
                                        <p className="name">Sophia</p>
                                        <p className="designation pt-1">CBO</p>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide><div className="my-1 md:my-0 w-full">
                            <div className="card shadow-sm p-10">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="32" viewBox="0 0 184 32" fill="none">
                                        <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#FFAF00"/>
                                        <path d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z" fill="#FFAF00"/>
                                        <path d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z" fill="#FFAF00"/>
                                        <path d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z" fill="#FFAF00"/>
                                        <path d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z" fill="#FFAF00"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="message mt-3">
                                        K-Beauty got us hooked on Korean BB Creams and jelly
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            cleansers. J- Beauty convinced us of the benefits of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Japanese essences and sake ingredients.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-center mt-5">
                                    <div>
                                        <Image src={EllipseImg_76}/>
                                    </div>
                                    <div>
                                        <p className="name">Ainee</p>
                                        <p className="designation pt-1">Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide> <div className="my-1 md:my-0 w-full">
                            <div className="card shadow-sm p-10">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="32" viewBox="0 0 184 32" fill="none">
                                        <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#FFAF00"/>
                                        <path d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z" fill="#FFAF00"/>
                                        <path d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z" fill="#FFAF00"/>
                                        <path d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z" fill="#FFAF00"/>
                                        <path d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z" fill="#FFAF00"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="message mt-3">
                                        K-Beauty got us hooked on Korean BB Creams and jelly
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            cleansers. J- Beauty convinced us of the benefits of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Japanese essences and sake ingredients.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-center mt-5">
                                    <div>
                                        <Image src={EllipseImg_78}/>
                                    </div>
                                    <div>
                                        <p className="name">Alina</p>
                                        <p className="designation pt-1">Example</p>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
        <SwiperSlide>
        <div className="my-1 md:my-0 w-full">
                            <div className="card shadow-sm p-10">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="32" viewBox="0 0 184 32" fill="none">
                                        <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#FFAF00"/>
                                        <path d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z" fill="#FFAF00"/>
                                        <path d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z" fill="#FFAF00"/>
                                        <path d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z" fill="#FFAF00"/>
                                        <path d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z" fill="#FFAF00"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="message mt-3">
                                        K-Beauty got us hooked on Korean BB Creams and jelly
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            cleansers. J- Beauty convinced us of the benefits of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Japanese essences and sake ingredients.
                                    </p>
                                </div>
                                <div className="flex gap-4 items-center mt-5">
                                    <div>
                                        <Image src={EllipseImg_77}/>
                                    </div>
                                    <div>
                                        <p className="name">Sophia</p>
                                        <p className="designation pt-1">CBO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        </SwiperSlide>
      </Swiper>
                </div>
            </section>

        </div>
    )
}
