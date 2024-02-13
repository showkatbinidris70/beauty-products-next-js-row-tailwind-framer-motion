"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import EllipseImg_77 from "@/public/assets/images/Ellipse-77.svg";
import EllipseImg_76 from "@/public/assets/images/Ellipse-76.svg";
import EllipseImg_78 from "@/public/assets/images/Ellipse-78.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimoinialsSwiperSlider() {
  return (
    <div>
      <section className="testimoinial bg-[#FAFBFF] pb-10 pt-12">
        <div className="container max-w-7xl px-4">
          <div className="flex justify-between">
            <div className="title text-3xl md:text-5xl">Testimoinials</div>
            <div className="flex gap-4">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M18 26L12 20M12 20L18 14M12 20H28M2 20C2 17.6362 2.46558 15.2956 3.37017 13.1117C4.27475 10.9278 5.60062 8.94353 7.27208 7.27208C8.94353 5.60062 10.9278 4.27475 13.1117 3.37017C15.2956 2.46558 17.6362 2 20 2C22.3638 2 24.7044 2.46558 26.8883 3.37017C29.0722 4.27475 31.0565 5.60062 32.7279 7.27208C34.3994 8.94353 35.7252 10.9278 36.6298 13.1117C37.5344 15.2956 38 17.6362 38 20C38 24.7739 36.1036 29.3523 32.7279 32.7279C29.3523 36.1036 24.7739 38 20 38C15.2261 38 10.6477 36.1036 7.27208 32.7279C3.89642 29.3523 2 24.7739 2 20Z"
                    stroke="#FFAF00"
                    stroke-width="2.04493"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M36.6298 26.8883C37.5344 24.7044 38 22.3638 38 20C38 15.2261 36.1036 10.6477 32.7279 7.27208C29.3523 3.89642 24.7739 2 20 2C15.2261 2 10.6477 3.89642 7.27208 7.27208C3.89642 10.6477 2 15.2261 2 20C2 22.3638 2.46558 24.7044 3.37017 26.8883C4.27475 29.0722 5.60062 31.0565 7.27208 32.7279C8.94353 34.3994 10.9278 35.7252 13.1117 36.6298C15.2956 37.5344 17.6362 38 20 38C22.3638 38 24.7044 37.5344 26.8883 36.6298C29.0722 35.7252 31.0565 34.3994 32.7279 32.7279C34.3994 31.0565 35.7252 29.0722 36.6298 26.8883Z"
                    fill="#FFAF00"
                  />
                  <path
                    d="M22 14L28 20M28 20L22 26M28 20H12M38 20C38 22.3638 37.5344 24.7044 36.6298 26.8883C35.7252 29.0722 34.3994 31.0565 32.7279 32.7279C31.0565 34.3994 29.0722 35.7252 26.8883 36.6298C24.7044 37.5344 22.3638 38 20 38C17.6362 38 15.2956 37.5344 13.1117 36.6298C10.9278 35.7252 8.94353 34.3994 7.27208 32.7279C5.60062 31.0565 4.27475 29.0722 3.37017 26.8883C2.46558 24.7044 2 22.3638 2 20C2 15.2261 3.89642 10.6477 7.27208 7.27208C10.6477 3.89642 15.2261 2 20 2C24.7739 2 29.3523 3.89642 32.7279 7.27208C36.1036 10.6477 38 15.2261 38 20Z"
                    stroke="black"
                    stroke-width="2.04493"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
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
            <SwiperSlide>
              <div className="my-1 md:my-0 w-full flex justify-center cursor-pointer">
                <div className="card shadow-sm p-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="184"
                      height="32"
                      viewBox="0 0 184 32"
                      fill="none"
                    >
                      <path
                        d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z"
                        fill="#FFAF00"
                      />
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src={EllipseImg_77} />
                    </motion.div>
                    <div>
                      <p className="name">Sophia</p>
                      <p className="designation pt-1">CBO</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-1 md:my-0 w-full flex justify-center cursor-pointer">
                <div className="card shadow-sm p-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="184"
                      height="32"
                      viewBox="0 0 184 32"
                      fill="none"
                    >
                      <path
                        d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z"
                        fill="#FFAF00"
                      />
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src={EllipseImg_76} />
                    </motion.div>
                    <div>
                      <p className="name">Ainee</p>
                      <p className="designation pt-1">Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-1 md:my-0 w-full flex justify-center cursor-pointer">
                <div className="card shadow-sm p-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="184"
                      height="32"
                      viewBox="0 0 184 32"
                      fill="none"
                    >
                      <path
                        d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z"
                        fill="#FFAF00"
                      />
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src={EllipseImg_78} />
                    </motion.div>
                    <div>
                      <p className="name">Alina</p>
                      <p className="designation pt-1">Example</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-1 md:my-0 w-full flex justify-center cursor-pointer">
                <div className="card shadow-sm p-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="184"
                      height="32"
                      viewBox="0 0 184 32"
                      fill="none"
                    >
                      <path
                        d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M54 0L57.5922 11.0557H69.2169L59.8123 17.8885L63.4046 28.9443L54 22.1115L44.5954 28.9443L48.1877 17.8885L38.7831 11.0557H50.4078L54 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M92 0L95.5922 11.0557H107.217L97.8123 17.8885L101.405 28.9443L92 22.1115L82.5954 28.9443L86.1877 17.8885L76.7831 11.0557H88.4078L92 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M130 0L133.592 11.0557H145.217L135.812 17.8885L139.405 28.9443L130 22.1115L120.595 28.9443L124.188 17.8885L114.783 11.0557H126.408L130 0Z"
                        fill="#FFAF00"
                      />
                      <path
                        d="M168 0L171.592 11.0557H183.217L173.812 17.8885L177.405 28.9443L168 22.1115L158.595 28.9443L162.188 17.8885L152.783 11.0557H164.408L168 0Z"
                        fill="#FFAF00"
                      />
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
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image src={EllipseImg_77} />
                    </motion.div>
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
  );
}
