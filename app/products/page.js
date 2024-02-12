import React from "react";
import Image from "next/image";
import Img_13 from "@/public/assets/images/image-13.png";
import Img_14 from "@/public/assets/images/image-14.png";
import Product_Img_1 from "@/public/assets/images/05f15e2874dc3bb3787db5ffa4fdb060-1.png";
import Product_Img_2 from "@/public/assets/images/4c2419ffddc6b2c95f5084b0f661bb86-2.png";
import Product_Img_3 from "@/public/assets/images/4c2419ffddc6b2c95f5084b0f661bb86-3.png";
import Product_Img_4 from "@/public/assets/images/7f51ca5b06f71476e81f0f8b3354913e-4.png";

import Link from "next/link";
import SwiperSlider from "../components/SwiperSlider";

export default function Products() {
  return (
    <div className="bg-[#000]">
      <section className="add-to-cart bg-[#1E1F20] pt-32 pb-36">
        <div className="container max-w-7xl px-4">
          <div className="grid gap-10 sm:grid-cols-2 px-20">
            <div className="py-2">
              <SwiperSlider />
            </div>
            <div className="py-2">
              <div className="title pb-3 pt-1">
                Contra Watches - Your Attractive Product title goes here
              </div>
              <div>
                <ul className="text-white">
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                </ul>
              </div>
              <div className="flex gap-5 items-center">
                <div className="regular-price line-through">$200/</div>
                <div className="current-price">$99/-</div>
              </div>
              <div className="flex gap-2 justify-between pt-3 pb-5">
                <div className="flex gap-2  w-1/2 justify-between">
                  <div className="rounded-lg bg-[#E8E9EB]">
                    <Link href="#" className="text-5xl px-4 flex items-center">
                      -
                    </Link>
                  </div>
                  <div className="rounded-lg bg-[#E8E9EB]">
                    <Link href="#" className="text-5xl px-4 flex items-center">
                      +
                    </Link>
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <Link
                    href="#"
                    className="add-to-cart-btn text-center px-10 flex  items-center"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
              <div className="buy-now-btn text-center py-4">Buy Now </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-reviews">
        <div className="container max-w-7xl px-4">
          <div className="title text-center pt-5 pb-3">Customer Reviews</div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 pb-5">
            <div className="my-1 md:my-0 w-full">
              <div className="card shadow-sm p-6">
                <div className="flex gap-4 pb-4 items-center">
                  <div className="">
                    <Image src={Img_14} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="name">Thereas Webb</h3>
                    <h5 className="title py-1">Interchangeable Straps</h5>
                    <p className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="14"
                        viewBox="0 0 75 14"
                        fill="none"
                      >
                        <path
                          d="M6.40918 2.92705C6.70853 2.00574 8.01194 2.00574 8.31129 2.92705L8.87324 4.65654C9.00711 5.06856 9.39107 5.34752 9.82429 5.34752H11.6428C12.6115 5.34752 13.0143 6.58714 12.2306 7.15654L10.7594 8.22543C10.4089 8.48007 10.2622 8.93144 10.3961 9.34346L10.9581 11.073C11.2574 11.9943 10.2029 12.7604 9.41921 12.191L7.94802 11.1221C7.59753 10.8675 7.12294 10.8675 6.77245 11.1221L5.30126 12.191C4.51754 12.7604 3.46306 11.9943 3.76242 11.0729L4.32436 9.34346C4.45824 8.93144 4.31158 8.48007 3.96109 8.22542L2.4899 7.15654C1.70618 6.58714 2.10896 5.34752 3.07768 5.34752H4.89618C5.3294 5.34752 5.71336 5.06856 5.84723 4.65654L6.40918 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M21.4092 2.92705C21.7085 2.00574 23.0119 2.00574 23.3113 2.92705L23.8732 4.65654C24.0071 5.06856 24.3911 5.34752 24.8243 5.34752H26.6428C27.6115 5.34752 28.0143 6.58714 27.2306 7.15654L25.7594 8.22543C25.4089 8.48007 25.2622 8.93144 25.3961 9.34346L25.9581 11.073C26.2574 11.9943 25.2029 12.7604 24.4192 12.191L22.948 11.1221C22.5975 10.8675 22.1229 10.8675 21.7724 11.1221L20.3013 12.191C19.5175 12.7604 18.4631 11.9943 18.7624 11.0729L19.3244 9.34346C19.4582 8.93144 19.3116 8.48007 18.9611 8.22542L17.4899 7.15654C16.7062 6.58714 17.109 5.34752 18.0777 5.34752H19.8962C20.3294 5.34752 20.7134 5.06856 20.8472 4.65654L21.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M36.4092 2.92705C36.7085 2.00574 38.0119 2.00574 38.3113 2.92705L38.8732 4.65654C39.0071 5.06856 39.3911 5.34752 39.8243 5.34752H41.6428C42.6115 5.34752 43.0143 6.58714 42.2306 7.15654L40.7594 8.22543C40.4089 8.48007 40.2622 8.93144 40.3961 9.34346L40.9581 11.073C41.2574 11.9943 40.2029 12.7604 39.4192 12.191L37.948 11.1221C37.5975 10.8675 37.1229 10.8675 36.7724 11.1221L35.3013 12.191C34.5175 12.7604 33.4631 11.9943 33.7624 11.0729L34.3244 9.34346C34.4582 8.93144 34.3116 8.48007 33.9611 8.22542L32.4899 7.15654C31.7062 6.58714 32.109 5.34752 33.0777 5.34752H34.8962C35.3294 5.34752 35.7134 5.06856 35.8472 4.65654L36.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M51.4092 2.92705C51.7085 2.00574 53.0119 2.00574 53.3113 2.92705L53.8732 4.65654C54.0071 5.06856 54.3911 5.34752 54.8243 5.34752H56.6428C57.6115 5.34752 58.0143 6.58714 57.2306 7.15654L55.7594 8.22543C55.4089 8.48007 55.2622 8.93144 55.3961 9.34346L55.9581 11.073C56.2574 11.9943 55.2029 12.7604 54.4192 12.191L52.948 11.1221C52.5975 10.8675 52.1229 10.8675 51.7724 11.1221L50.3013 12.191C49.5175 12.7604 48.4631 11.9943 48.7624 11.0729L49.3244 9.34346C49.4582 8.93144 49.3116 8.48007 48.9611 8.22542L47.4899 7.15654C46.7062 6.58714 47.109 5.34752 48.0777 5.34752H49.8962C50.3294 5.34752 50.7134 5.06856 50.8472 4.65654L51.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M66.4092 2.92705C66.7085 2.00574 68.0119 2.00574 68.3113 2.92705L68.8732 4.65654C69.0071 5.06856 69.3911 5.34752 69.8243 5.34752H71.6428C72.6115 5.34752 73.0143 6.58714 72.2306 7.15654L70.7594 8.22543C70.4089 8.48007 70.2622 8.93144 70.3961 9.34346L70.9581 11.073C71.2574 11.9943 70.2029 12.7604 69.4192 12.191L67.948 11.1221C67.5975 10.8675 67.1229 10.8675 66.7724 11.1221L65.3013 12.191C64.5175 12.7604 63.4631 11.9943 63.7624 11.0729L64.3244 9.34346C64.4582 8.93144 64.3116 8.48007 63.9611 8.22542L62.4899 7.15654C61.7062 6.58714 62.109 5.34752 63.0777 5.34752H64.8962C65.3294 5.34752 65.7134 5.06856 65.8472 4.65654L66.4092 2.92705Z"
                          fill="#FFB240"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="message mt-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-1 md:my-0 w-full">
              <div className="card shadow-sm p-6">
                <div className="flex gap-4 pb-4 items-center">
                  <div className="">
                    <Image src={Img_14} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="name">Thereas Webb</h3>
                    <h5 className="title py-1">Interchangeable Straps</h5>
                    <p className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="14"
                        viewBox="0 0 75 14"
                        fill="none"
                      >
                        <path
                          d="M6.40918 2.92705C6.70853 2.00574 8.01194 2.00574 8.31129 2.92705L8.87324 4.65654C9.00711 5.06856 9.39107 5.34752 9.82429 5.34752H11.6428C12.6115 5.34752 13.0143 6.58714 12.2306 7.15654L10.7594 8.22543C10.4089 8.48007 10.2622 8.93144 10.3961 9.34346L10.9581 11.073C11.2574 11.9943 10.2029 12.7604 9.41921 12.191L7.94802 11.1221C7.59753 10.8675 7.12294 10.8675 6.77245 11.1221L5.30126 12.191C4.51754 12.7604 3.46306 11.9943 3.76242 11.0729L4.32436 9.34346C4.45824 8.93144 4.31158 8.48007 3.96109 8.22542L2.4899 7.15654C1.70618 6.58714 2.10896 5.34752 3.07768 5.34752H4.89618C5.3294 5.34752 5.71336 5.06856 5.84723 4.65654L6.40918 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M21.4092 2.92705C21.7085 2.00574 23.0119 2.00574 23.3113 2.92705L23.8732 4.65654C24.0071 5.06856 24.3911 5.34752 24.8243 5.34752H26.6428C27.6115 5.34752 28.0143 6.58714 27.2306 7.15654L25.7594 8.22543C25.4089 8.48007 25.2622 8.93144 25.3961 9.34346L25.9581 11.073C26.2574 11.9943 25.2029 12.7604 24.4192 12.191L22.948 11.1221C22.5975 10.8675 22.1229 10.8675 21.7724 11.1221L20.3013 12.191C19.5175 12.7604 18.4631 11.9943 18.7624 11.0729L19.3244 9.34346C19.4582 8.93144 19.3116 8.48007 18.9611 8.22542L17.4899 7.15654C16.7062 6.58714 17.109 5.34752 18.0777 5.34752H19.8962C20.3294 5.34752 20.7134 5.06856 20.8472 4.65654L21.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M36.4092 2.92705C36.7085 2.00574 38.0119 2.00574 38.3113 2.92705L38.8732 4.65654C39.0071 5.06856 39.3911 5.34752 39.8243 5.34752H41.6428C42.6115 5.34752 43.0143 6.58714 42.2306 7.15654L40.7594 8.22543C40.4089 8.48007 40.2622 8.93144 40.3961 9.34346L40.9581 11.073C41.2574 11.9943 40.2029 12.7604 39.4192 12.191L37.948 11.1221C37.5975 10.8675 37.1229 10.8675 36.7724 11.1221L35.3013 12.191C34.5175 12.7604 33.4631 11.9943 33.7624 11.0729L34.3244 9.34346C34.4582 8.93144 34.3116 8.48007 33.9611 8.22542L32.4899 7.15654C31.7062 6.58714 32.109 5.34752 33.0777 5.34752H34.8962C35.3294 5.34752 35.7134 5.06856 35.8472 4.65654L36.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M51.4092 2.92705C51.7085 2.00574 53.0119 2.00574 53.3113 2.92705L53.8732 4.65654C54.0071 5.06856 54.3911 5.34752 54.8243 5.34752H56.6428C57.6115 5.34752 58.0143 6.58714 57.2306 7.15654L55.7594 8.22543C55.4089 8.48007 55.2622 8.93144 55.3961 9.34346L55.9581 11.073C56.2574 11.9943 55.2029 12.7604 54.4192 12.191L52.948 11.1221C52.5975 10.8675 52.1229 10.8675 51.7724 11.1221L50.3013 12.191C49.5175 12.7604 48.4631 11.9943 48.7624 11.0729L49.3244 9.34346C49.4582 8.93144 49.3116 8.48007 48.9611 8.22542L47.4899 7.15654C46.7062 6.58714 47.109 5.34752 48.0777 5.34752H49.8962C50.3294 5.34752 50.7134 5.06856 50.8472 4.65654L51.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M66.4092 2.92705C66.7085 2.00574 68.0119 2.00574 68.3113 2.92705L68.8732 4.65654C69.0071 5.06856 69.3911 5.34752 69.8243 5.34752H71.6428C72.6115 5.34752 73.0143 6.58714 72.2306 7.15654L70.7594 8.22543C70.4089 8.48007 70.2622 8.93144 70.3961 9.34346L70.9581 11.073C71.2574 11.9943 70.2029 12.7604 69.4192 12.191L67.948 11.1221C67.5975 10.8675 67.1229 10.8675 66.7724 11.1221L65.3013 12.191C64.5175 12.7604 63.4631 11.9943 63.7624 11.0729L64.3244 9.34346C64.4582 8.93144 64.3116 8.48007 63.9611 8.22542L62.4899 7.15654C61.7062 6.58714 62.109 5.34752 63.0777 5.34752H64.8962C65.3294 5.34752 65.7134 5.06856 65.8472 4.65654L66.4092 2.92705Z"
                          fill="#FFB240"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="message mt-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-1 md:my-0 w-full">
              <div className="card shadow-sm p-6">
                <div className="flex gap-4 pb-4 items-center">
                  <div className="">
                    <Image src={Img_14} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="name">Thereas Webb</h3>
                    <h5 className="title py-1">Interchangeable Straps</h5>
                    <p className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="14"
                        viewBox="0 0 75 14"
                        fill="none"
                      >
                        <path
                          d="M6.40918 2.92705C6.70853 2.00574 8.01194 2.00574 8.31129 2.92705L8.87324 4.65654C9.00711 5.06856 9.39107 5.34752 9.82429 5.34752H11.6428C12.6115 5.34752 13.0143 6.58714 12.2306 7.15654L10.7594 8.22543C10.4089 8.48007 10.2622 8.93144 10.3961 9.34346L10.9581 11.073C11.2574 11.9943 10.2029 12.7604 9.41921 12.191L7.94802 11.1221C7.59753 10.8675 7.12294 10.8675 6.77245 11.1221L5.30126 12.191C4.51754 12.7604 3.46306 11.9943 3.76242 11.0729L4.32436 9.34346C4.45824 8.93144 4.31158 8.48007 3.96109 8.22542L2.4899 7.15654C1.70618 6.58714 2.10896 5.34752 3.07768 5.34752H4.89618C5.3294 5.34752 5.71336 5.06856 5.84723 4.65654L6.40918 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M21.4092 2.92705C21.7085 2.00574 23.0119 2.00574 23.3113 2.92705L23.8732 4.65654C24.0071 5.06856 24.3911 5.34752 24.8243 5.34752H26.6428C27.6115 5.34752 28.0143 6.58714 27.2306 7.15654L25.7594 8.22543C25.4089 8.48007 25.2622 8.93144 25.3961 9.34346L25.9581 11.073C26.2574 11.9943 25.2029 12.7604 24.4192 12.191L22.948 11.1221C22.5975 10.8675 22.1229 10.8675 21.7724 11.1221L20.3013 12.191C19.5175 12.7604 18.4631 11.9943 18.7624 11.0729L19.3244 9.34346C19.4582 8.93144 19.3116 8.48007 18.9611 8.22542L17.4899 7.15654C16.7062 6.58714 17.109 5.34752 18.0777 5.34752H19.8962C20.3294 5.34752 20.7134 5.06856 20.8472 4.65654L21.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M36.4092 2.92705C36.7085 2.00574 38.0119 2.00574 38.3113 2.92705L38.8732 4.65654C39.0071 5.06856 39.3911 5.34752 39.8243 5.34752H41.6428C42.6115 5.34752 43.0143 6.58714 42.2306 7.15654L40.7594 8.22543C40.4089 8.48007 40.2622 8.93144 40.3961 9.34346L40.9581 11.073C41.2574 11.9943 40.2029 12.7604 39.4192 12.191L37.948 11.1221C37.5975 10.8675 37.1229 10.8675 36.7724 11.1221L35.3013 12.191C34.5175 12.7604 33.4631 11.9943 33.7624 11.0729L34.3244 9.34346C34.4582 8.93144 34.3116 8.48007 33.9611 8.22542L32.4899 7.15654C31.7062 6.58714 32.109 5.34752 33.0777 5.34752H34.8962C35.3294 5.34752 35.7134 5.06856 35.8472 4.65654L36.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M51.4092 2.92705C51.7085 2.00574 53.0119 2.00574 53.3113 2.92705L53.8732 4.65654C54.0071 5.06856 54.3911 5.34752 54.8243 5.34752H56.6428C57.6115 5.34752 58.0143 6.58714 57.2306 7.15654L55.7594 8.22543C55.4089 8.48007 55.2622 8.93144 55.3961 9.34346L55.9581 11.073C56.2574 11.9943 55.2029 12.7604 54.4192 12.191L52.948 11.1221C52.5975 10.8675 52.1229 10.8675 51.7724 11.1221L50.3013 12.191C49.5175 12.7604 48.4631 11.9943 48.7624 11.0729L49.3244 9.34346C49.4582 8.93144 49.3116 8.48007 48.9611 8.22542L47.4899 7.15654C46.7062 6.58714 47.109 5.34752 48.0777 5.34752H49.8962C50.3294 5.34752 50.7134 5.06856 50.8472 4.65654L51.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M66.4092 2.92705C66.7085 2.00574 68.0119 2.00574 68.3113 2.92705L68.8732 4.65654C69.0071 5.06856 69.3911 5.34752 69.8243 5.34752H71.6428C72.6115 5.34752 73.0143 6.58714 72.2306 7.15654L70.7594 8.22543C70.4089 8.48007 70.2622 8.93144 70.3961 9.34346L70.9581 11.073C71.2574 11.9943 70.2029 12.7604 69.4192 12.191L67.948 11.1221C67.5975 10.8675 67.1229 10.8675 66.7724 11.1221L65.3013 12.191C64.5175 12.7604 63.4631 11.9943 63.7624 11.0729L64.3244 9.34346C64.4582 8.93144 64.3116 8.48007 63.9611 8.22542L62.4899 7.15654C61.7062 6.58714 62.109 5.34752 63.0777 5.34752H64.8962C65.3294 5.34752 65.7134 5.06856 65.8472 4.65654L66.4092 2.92705Z"
                          fill="#FFB240"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="message mt-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-1 md:my-0 w-full">
              <div className="card shadow-sm p-6">
                <div className="flex gap-4 pb-4 items-center">
                  <div className="">
                    <Image src={Img_14} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="name">Thereas Webb</h3>
                    <h5 className="title py-1">Interchangeable Straps</h5>
                    <p className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="14"
                        viewBox="0 0 75 14"
                        fill="none"
                      >
                        <path
                          d="M6.40918 2.92705C6.70853 2.00574 8.01194 2.00574 8.31129 2.92705L8.87324 4.65654C9.00711 5.06856 9.39107 5.34752 9.82429 5.34752H11.6428C12.6115 5.34752 13.0143 6.58714 12.2306 7.15654L10.7594 8.22543C10.4089 8.48007 10.2622 8.93144 10.3961 9.34346L10.9581 11.073C11.2574 11.9943 10.2029 12.7604 9.41921 12.191L7.94802 11.1221C7.59753 10.8675 7.12294 10.8675 6.77245 11.1221L5.30126 12.191C4.51754 12.7604 3.46306 11.9943 3.76242 11.0729L4.32436 9.34346C4.45824 8.93144 4.31158 8.48007 3.96109 8.22542L2.4899 7.15654C1.70618 6.58714 2.10896 5.34752 3.07768 5.34752H4.89618C5.3294 5.34752 5.71336 5.06856 5.84723 4.65654L6.40918 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M21.4092 2.92705C21.7085 2.00574 23.0119 2.00574 23.3113 2.92705L23.8732 4.65654C24.0071 5.06856 24.3911 5.34752 24.8243 5.34752H26.6428C27.6115 5.34752 28.0143 6.58714 27.2306 7.15654L25.7594 8.22543C25.4089 8.48007 25.2622 8.93144 25.3961 9.34346L25.9581 11.073C26.2574 11.9943 25.2029 12.7604 24.4192 12.191L22.948 11.1221C22.5975 10.8675 22.1229 10.8675 21.7724 11.1221L20.3013 12.191C19.5175 12.7604 18.4631 11.9943 18.7624 11.0729L19.3244 9.34346C19.4582 8.93144 19.3116 8.48007 18.9611 8.22542L17.4899 7.15654C16.7062 6.58714 17.109 5.34752 18.0777 5.34752H19.8962C20.3294 5.34752 20.7134 5.06856 20.8472 4.65654L21.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M36.4092 2.92705C36.7085 2.00574 38.0119 2.00574 38.3113 2.92705L38.8732 4.65654C39.0071 5.06856 39.3911 5.34752 39.8243 5.34752H41.6428C42.6115 5.34752 43.0143 6.58714 42.2306 7.15654L40.7594 8.22543C40.4089 8.48007 40.2622 8.93144 40.3961 9.34346L40.9581 11.073C41.2574 11.9943 40.2029 12.7604 39.4192 12.191L37.948 11.1221C37.5975 10.8675 37.1229 10.8675 36.7724 11.1221L35.3013 12.191C34.5175 12.7604 33.4631 11.9943 33.7624 11.0729L34.3244 9.34346C34.4582 8.93144 34.3116 8.48007 33.9611 8.22542L32.4899 7.15654C31.7062 6.58714 32.109 5.34752 33.0777 5.34752H34.8962C35.3294 5.34752 35.7134 5.06856 35.8472 4.65654L36.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M51.4092 2.92705C51.7085 2.00574 53.0119 2.00574 53.3113 2.92705L53.8732 4.65654C54.0071 5.06856 54.3911 5.34752 54.8243 5.34752H56.6428C57.6115 5.34752 58.0143 6.58714 57.2306 7.15654L55.7594 8.22543C55.4089 8.48007 55.2622 8.93144 55.3961 9.34346L55.9581 11.073C56.2574 11.9943 55.2029 12.7604 54.4192 12.191L52.948 11.1221C52.5975 10.8675 52.1229 10.8675 51.7724 11.1221L50.3013 12.191C49.5175 12.7604 48.4631 11.9943 48.7624 11.0729L49.3244 9.34346C49.4582 8.93144 49.3116 8.48007 48.9611 8.22542L47.4899 7.15654C46.7062 6.58714 47.109 5.34752 48.0777 5.34752H49.8962C50.3294 5.34752 50.7134 5.06856 50.8472 4.65654L51.4092 2.92705Z"
                          fill="#FFB240"
                        />
                        <path
                          d="M66.4092 2.92705C66.7085 2.00574 68.0119 2.00574 68.3113 2.92705L68.8732 4.65654C69.0071 5.06856 69.3911 5.34752 69.8243 5.34752H71.6428C72.6115 5.34752 73.0143 6.58714 72.2306 7.15654L70.7594 8.22543C70.4089 8.48007 70.2622 8.93144 70.3961 9.34346L70.9581 11.073C71.2574 11.9943 70.2029 12.7604 69.4192 12.191L67.948 11.1221C67.5975 10.8675 67.1229 10.8675 66.7724 11.1221L65.3013 12.191C64.5175 12.7604 63.4631 11.9943 63.7624 11.0729L64.3244 9.34346C64.4582 8.93144 64.3116 8.48007 63.9611 8.22542L62.4899 7.15654C61.7062 6.58714 62.109 5.34752 63.0777 5.34752H64.8962C65.3294 5.34752 65.7134 5.06856 65.8472 4.65654L66.4092 2.92705Z"
                          fill="#FFB240"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="message mt-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container max-w-7xl px-4">
          <div className="grid gap-2 sm:grid-cols-2 py-5 sm:relative">
            <div className="flex justify-center sm:justify-end items-end">
              <Image src={Product_Img_1} />
            </div>
            <div className="sm:absolute sm:bottom-10 sm:left-1/2">
              <div className="">
                <h2>Customizable Straps</h2>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd deffecultyple are dvd ytuhn
                  and{" "}
                </p>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 py-5 relative">
            <div className="order-2 sm:order-1">
              <div className="sm:absolute sm:bottom-32 sm:right-1/2">
                <h2>Waterproof Design</h2>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd deffecultyple are dvd ytuhn
                  and
                </p>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd{" "}
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <div className="flex md:justify-start justify-center">
                <Image src={Product_Img_2} />
              </div>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 py-5 sm:relative">
            <div className="flex sm:justify-end justify-center">
              <Image src={Product_Img_3} />
            </div>
            <div className="flex items-center">
              <div className="">
                <h2>Customizable Straps</h2>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd deffecultyple are dvd ytuhn
                  and{" "}
                </p>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 pt-5 pb-28 relative">
            <div className="order-2 sm:order-1">
              <div className="sm:absolute sm:bottom-28 sm:right-1/2">
                <h2>Solar-Powered</h2>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd deffecultyple are dvd ytuhn
                  and
                </p>
                <p className="py-2 max-w-96">
                  Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                  safghgj fdghjtyfd jkgfdegtynbfd{" "}
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <div className="flex md:justify-start justify-center">
                <Image src={Product_Img_4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container max-w-7xl px-4">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 py-5">
            <div className="flex items-center">
              <div>
                <div className="flex gap-4 py-4">
                  <div className="relative">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                      >
                        <path
                          d="M21.0938 2.625H20.5938V3.125V18.75V19.25H21.0938H22.6562C22.7308 19.25 22.8024 19.2796 22.8551 19.3324C22.9079 19.3851 22.9375 19.4567 22.9375 19.5312V21.0938C22.9375 21.1683 22.9079 21.2399 22.8551 21.2926C22.8024 21.3454 22.7308 21.375 22.6562 21.375H14.8438C14.7692 21.375 14.6976 21.3454 14.6449 21.2926C14.5921 21.2399 14.5625 21.1683 14.5625 21.0938V19.5312C14.5625 19.4567 14.5921 19.3851 14.6449 19.3324C14.6976 19.2796 14.7692 19.25 14.8438 19.25H16.4062H16.9062V18.75V12.5V12H16.4062H7.03125H6.53125V12.5V18.75V19.25H7.03125H8.59375C8.66834 19.25 8.73988 19.2796 8.79262 19.3324C8.84537 19.3851 8.875 19.4567 8.875 19.5312V21.0938C8.875 21.1683 8.84537 21.2399 8.79262 21.2926C8.73988 21.3454 8.66834 21.375 8.59375 21.375H0.78125C0.706657 21.375 0.635121 21.3454 0.582376 21.2926C0.529631 21.2399 0.5 21.1683 0.5 21.0938V19.5312C0.5 19.4567 0.529631 19.3851 0.582376 19.3324C0.635121 19.2796 0.706657 19.25 0.78125 19.25H2.34375H2.84375V18.75V3.125V2.625H2.34375H0.78125C0.706658 2.625 0.635121 2.59537 0.582376 2.54262C0.529632 2.48988 0.5 2.41834 0.5 2.34375V0.78125C0.5 0.706658 0.529632 0.635121 0.582376 0.582376C0.635121 0.529632 0.706658 0.5 0.78125 0.5H8.59375C8.66834 0.5 8.73988 0.529632 8.79262 0.582376C8.84537 0.635121 8.875 0.706657 8.875 0.78125V2.34375C8.875 2.41834 8.84537 2.48988 8.79262 2.54262C8.73988 2.59537 8.66834 2.625 8.59375 2.625H7.03125H6.53125V3.125V9.375V9.875H7.03125H16.4062H16.9062V9.375V3.125V2.625H16.4062H14.8438C14.7692 2.625 14.6976 2.59537 14.6449 2.54262L14.2913 2.89618L14.6449 2.54262C14.5921 2.48988 14.5625 2.41834 14.5625 2.34375V0.78125C14.5625 0.706657 14.5921 0.635121 14.6449 0.582376L14.2939 0.231403L14.6449 0.582375C14.6976 0.529632 14.7692 0.5 14.8438 0.5H22.6562C22.7308 0.5 22.8024 0.529631 22.8551 0.582376C22.9079 0.635121 22.9375 0.706657 22.9375 0.78125V2.34375C22.9375 2.41834 22.9079 2.48988 22.8551 2.54262C22.8024 2.59537 22.7308 2.625 22.6562 2.625H21.0938Z"
                          stroke="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3>Health Monitoring</h3>
                    <p className="max-w-72 py-2">
                      Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                      safghgj fdghj tyfd jkgfdegtynbfd{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 py-4">
                  <div className="relative">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M14.6035 17.4992L14.6047 17.5001C15.0906 17.851 15.7672 17.7442 16.1205 17.2641L16.1222 17.2617L17.4992 15.3672L17.5001 15.366C17.8471 14.8855 17.7549 14.2052 17.2613 13.8481C17.261 13.848 17.2608 13.8478 17.2605 13.8476L14.3672 11.7425V5.27344C14.3672 4.67503 13.8797 4.1875 13.2812 4.1875H10.9375C10.3391 4.1875 9.85156 4.67503 9.85156 5.27344V13.4912C9.85156 13.8354 10.0147 14.16 10.2929 14.3664L10.2929 14.3664L10.2969 14.3693L14.6035 17.4992ZM0.5 12.1094C0.5 5.69606 5.69606 0.5 12.1094 0.5C18.5227 0.5 23.7188 5.69606 23.7188 12.1094C23.7188 18.5227 18.5227 23.7188 12.1094 23.7188C5.69606 23.7188 0.5 18.5227 0.5 12.1094Z"
                          stroke="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3>Interchangeable Straps</h3>
                    <p className="max-w-72 py-2">
                      Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                      safghgj fdghj tyfd jkgfdegtynbfd{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <div className="flex gap-4 py-4">
                  <div className="relative">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                      >
                        <path
                          d="M21.0888 18.0308L21.0886 18.0306C21.0329 17.9707 20.973 17.9079 20.9098 17.8414C20.4549 17.3639 19.8236 16.7012 19.2983 15.6375C18.6985 14.4229 18.2461 12.714 18.2461 10.1562C18.2461 6.61222 15.7652 3.76924 12.3974 3.06963L11.9991 2.98689V2.58008V1.5625C11.9991 0.975544 11.5234 0.5 10.9375 0.5C10.3517 0.5 9.87601 0.975544 9.87601 1.5625V2.58008V2.98689L9.47771 3.06963C6.10985 3.76924 3.62894 6.61222 3.62894 10.1562C3.62894 12.714 3.17662 14.4229 2.57676 15.6375C2.05145 16.7012 1.42021 17.3639 0.965308 17.8414C0.902028 17.9079 0.84216 17.9707 0.786464 18.0306C0.583072 18.2493 0.498412 18.5016 0.500023 18.7466L21.0888 18.0308ZM21.0888 18.0308C21.2918 18.2487 21.3767 18.5013 21.375 18.7467L21.375 18.747M21.0888 18.0308L21.375 18.747M21.375 18.747C21.3717 19.3027 20.9373 19.8125 20.3077 19.8125H1.56742C0.938031 19.8125 0.503775 19.3029 0.500023 18.7467L21.375 18.747ZM13.5135 22.375C13.2801 23.5858 12.2151 24.5 10.9375 24.5C9.65999 24.5 8.59494 23.5858 8.36154 22.375H13.5135Z"
                          stroke="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3>Smart Notification</h3>
                    <p className="max-w-72 py-2">
                      Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                      safghgj fdghj tyfd jkgfdegtynbfd{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 py-4">
                  <div className="relative">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="25"
                        viewBox="0 0 16 25"
                        fill="none"
                      >
                        <path
                          d="M8.34381 7.65658L8.12854 8.3125H8.81888H14.4536C14.9712 8.3125 15.2917 8.87516 15.0328 9.31787L15.0317 9.31979L6.43792 24.1635C6.31452 24.3767 6.09088 24.5 5.85501 24.5C5.42672 24.5 5.10336 24.0991 5.20385 23.6748L7.45481 14.1778L7.60065 13.5625H6.96829H1.17239C0.767607 13.5625 0.452785 13.2046 0.50594 12.8001C0.505955 12.8 0.50597 12.7999 0.505986 12.7998L2.06832 1.08225C2.06833 1.08219 2.06834 1.08213 2.06835 1.08208C2.11312 0.749773 2.3989 0.5 2.73489 0.5H9.76614C10.1984 0.5 10.5215 0.911917 10.4186 1.33482L8.34381 7.65658Z"
                          stroke="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3>Waterproof Rellability</h3>
                    <p className="max-w-72 py-2">
                      Write a scene based ondeffecult is jksdfhvhissfddg dsfgg
                      safghgj fdghj tyfd jkgfdegtynbfd{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image src={Img_13} />
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container max-w-7xl px-4">
          <div className="px-10">
            <h2 className="title text-center py-5">What people usually Ask</h2>
            <div className="py-5">
              <h4 className="question">Can I use this clock as a mirror?</h4>
              <p className="answer py-4 border-solid border-b-2 border-white">
                Write a scene (based ondeffecult is jksdfhvhissfddg i am asha my
                name is Farjana i an a pat lover i have a cat dsfgg safghgj
                fdghj tyfd{" "}
              </p>
            </div>
            <div className="py-5">
              <h4 className="question">
                Dose the alarm sound gradually increase?
              </h4>
              <p className="answer py-4 border-solid border-b-2 border-white">
                Write a scene (based ondeffecult is jksdfhvhissfddg i am asha my
                name is Farjana i an a pat lover i have a cat dsfgg safghgj
                fdghj tyfd{" "}
              </p>
            </div>
            <div className="py-5">
              <h4 className="question">Can I adjust the display brightness?</h4>
              <p className="answer py-4 border-solid border-b-2 border-white">
                Write a scene (based ondeffecult is jksdfhvhissfddg i am asha my
                name is Farjana i an a pat lover i have a cat dsfgg safghgj
                fdghj tyfd{" "}
              </p>
            </div>
            <div className="py-5">
              <h4 className="question">How dose the sneeze function work?</h4>
              <p className="answer py-4 border-solid border-b-2 border-white">
                Write a scene (based ondeffecult is jksdfhvhissfddg i am asha my
                name is Farjana i an a pat lover i have a cat dsfgg safghgj
                fdghj tyfd{" "}
              </p>
            </div>
            <div className="py-5">
              <h4 className="question">
                What are the power options for this clock?
              </h4>
              <p className="answer py-4">
                Write a scene (based ondeffecult is jksdfhvhissfddg i am asha my
                name is Farjana i an a pat lover i have a cat dsfgg safghgj
                fdghj tyfd{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="add-to-cart bg-[#1E1F20] pt-32 pb-36">
        <div className="container max-w-7xl px-4">
          <div className="grid gap-10 sm:grid-cols-2 px-20">
            <div className="py-2">
              <SwiperSlider />
            </div>
            <div className="py-2">
              <div className="title pb-3 pt-1">
                Contra Watches - Your Attractive Product title goes here
              </div>
              <div>
                <ul className="text-white">
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                  <li className="py-1">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </li>
                </ul>
              </div>
              <div className="flex gap-5 items-center">
                <div className="regular-price line-through">$200/</div>
                <div className="current-price">$99/-</div>
              </div>
              <div className="flex gap-2 justify-between pt-3 pb-5">
                <div className="flex gap-2  w-1/2 justify-between">
                  <div className="rounded-lg bg-[#E8E9EB]">
                    <Link href="#" className="text-5xl px-4 flex items-center">
                      -
                    </Link>
                  </div>
                  <div className="rounded-lg bg-[#E8E9EB]">
                    <Link href="#" className="text-5xl px-4 flex items-center">
                      +
                    </Link>
                  </div>
                </div>
                <div className="w-1/2 flex justify-end">
                  <Link
                    href="#"
                    className="add-to-cart-btn text-center px-10 flex  items-center"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
              <div className="buy-now-btn text-center py-4">Buy Now </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container max-w-7xl px-4">
          <div className="md:flex gap-4 py-20">
            <div className="my-1 md:my-0 w-full md:w-1/2">
              <div className="flex gap-4">
                <div className="my-1 md:my-0 w-full md:w-3/5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="151"
                      height="52"
                      viewBox="0 0 151 52"
                      fill="none"
                    >
                      <path
                        d="M39.2214 0H0V42.9371H39.2214V0Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M56.1447 12.7969C49.539 12.7969 44.1719 17.3383 44.1719 25.5954C44.1719 33.0269 49.1262 37.9812 55.7319 37.9812C61.5119 37.9812 67.7047 34.2654 67.7047 25.1826C67.7047 17.7512 62.7504 12.7969 56.1447 12.7969ZM55.7319 34.6783C51.6033 34.6783 48.3004 30.5497 48.3004 25.5954C48.3004 21.054 50.3647 16.0997 55.7319 16.0997C61.099 16.0997 62.7504 21.054 62.7504 25.1826C63.1633 30.5497 59.8604 34.6783 55.7319 34.6783Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M85.0451 12.7969C80.9165 12.7969 78.4394 14.8612 77.2008 17.3383L76.788 13.2097H73.0723C73.0723 15.274 73.0723 17.3383 73.0723 19.8154V37.1554H77.6137V23.1183C77.6137 22.2926 77.6137 21.4669 78.0265 21.054C78.4394 18.5769 80.9165 16.5126 83.8065 16.5126C87.9351 16.5126 92.9506 19.6843 92.9506 23.4L91.6506 37.05L92.9506 52L94.2506 37.05L92.9506 23.4C92.9506 15.1429 88.348 12.7969 85.0451 12.7969Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M111.881 16.5121V13.2092H105.688V6.60352L101.559 7.84209V13.6221H97.8438V16.5121H101.559V29.7235C101.559 32.6135 101.972 34.6778 103.211 35.9164C104.449 37.1549 106.101 37.5678 107.752 37.5678C109.404 37.5678 110.642 37.1549 111.468 37.1549V33.8521C111.055 33.8521 110.229 34.2649 108.991 34.2649C106.514 34.2649 105.688 32.6135 105.688 29.7235V16.5121H111.881Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M127.575 12.7976C124.685 12.7976 122.208 14.8619 120.97 18.1648V13.6233H117.254C117.254 15.6876 117.667 18.1648 117.667 21.0548V37.569H121.795V24.3576C121.795 23.5319 121.795 23.1191 121.795 22.2933C122.208 18.9905 124.685 16.5133 127.575 16.5133C127.988 16.5133 128.814 16.5133 129.227 16.5133V12.3848C128.401 12.7976 127.988 12.7976 127.575 12.7976Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M149.454 31.7883V22.7054C149.454 17.7512 147.803 12.7969 140.371 12.7969C137.481 12.7969 134.591 13.6226 132.527 14.8612L133.353 17.7512C135.004 16.5126 137.481 16.0997 139.546 16.0997C144.5 16.0997 144.913 19.8154 144.913 21.4669V21.8797C135.83 21.8797 130.463 25.1826 130.463 30.9626C130.463 34.2654 132.94 37.9812 137.894 37.9812C141.197 37.9812 144.087 36.3297 145.326 34.2654L146.151 37.1554H150.28C149.867 35.504 149.454 33.8526 149.454 31.7883ZM145.326 29.3112C145.326 29.724 145.326 30.1369 144.913 30.5497C144.087 32.614 142.023 34.6783 139.133 34.6783C137.069 34.6783 135.004 33.4397 135.004 30.5497C135.004 26.0083 140.371 25.1826 145.326 25.1826V29.3112Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M19.8208 40.873C7.8479 40.873 1.24219 33.8545 1.24219 21.4687C1.24219 13.2116 3.30647 2.06445 19.8208 2.06445C23.9493 2.06445 27.2522 2.89017 30.1422 4.12874L28.0779 7.84445C26.0136 6.60588 23.1236 6.19302 19.8208 6.19302C9.49933 6.19302 5.37076 10.7345 5.37076 21.4687C5.37076 31.7902 9.91219 36.7444 19.8208 36.7444C28.4908 36.7444 33.0322 33.0287 33.8579 24.7716C33.8579 24.7716 35.9222 34.6802 30.555 38.3959C28.0779 40.0473 24.3622 40.873 19.8208 40.873Z"
                        fill="black"
                      />
                      <path
                        d="M17.5503 20.8016L18.0246 20.8188L19.3246 16.9188L17.9632 11.7188L16.7246 16.9188L17.5503 20.8016Z"
                        fill="black"
                      />
                      <path
                        d="M18.8496 22.0996C18.8496 22.5125 26.6939 22.9253 26.6939 22.9253L33.2996 22.5125L26.6939 22.0996H18.8496Z"
                        fill="black"
                      />
                      <circle cx="93" cy="23" r="3" fill="black" />
                      <circle cx="93" cy="23" r="1" fill="#D9D9D9" />
                      <path
                        d="M17.5 24C18.3284 24 19 23.3284 19 22.5C19 21.6716 18.3284 21 17.5 21C16.6716 21 16 21.6716 16 22.5C16 23.3284 16.6716 24 17.5 24Z"
                        fill="#E8E9EB"
                      />
                    </svg>
                  </div>
                  <div className="text-white py-2">
                    Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                    safghgj fdghjtyfd{" "}
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="94"
                      height="20"
                      viewBox="0 0 94 20"
                      fill="none"
                    >
                      <path
                        d="M6.26202 3.43462H9.10839V0H6.26202C4.06462 0 2.2771 1.79745 2.2771 4.00706V5.72437H0V9.15899H2.2771V18.318H5.69274V9.15899H8.53912L9.10839 5.72437H5.69274V4.00706C5.69274 3.6968 5.95347 3.43462 6.26202 3.43462Z"
                        fill="#E8E9EB"
                      />
                      <path
                        d="M92.4494 4.58008H80.6084C79.857 4.58008 79.2422 5.19831 79.2422 5.95393V17.8606C79.2422 18.6162 79.857 19.2345 80.6084 19.2345H92.4494C93.2008 19.2345 93.8156 18.6162 93.8156 17.8606V5.95393C93.8156 5.19831 93.2008 4.58008 92.4494 4.58008ZM89.2614 6.86983C89.2614 6.61795 89.4664 6.41188 89.7168 6.41188H91.5385C91.789 6.41188 91.9939 6.61795 91.9939 6.86983V8.70162C91.9939 8.9535 91.789 9.15957 91.5385 9.15957H89.7168C89.4664 9.15957 89.2614 8.9535 89.2614 8.70162V6.86983ZM86.5289 9.15957C88.0372 9.15957 89.2614 10.3905 89.2614 11.9073C89.2614 13.424 88.0372 14.655 86.5289 14.655C85.0205 14.655 83.7964 13.424 83.7964 11.9073C83.7964 10.3905 85.0205 9.15957 86.5289 9.15957ZM91.9939 16.9447C91.9939 17.1966 91.789 17.4027 91.5385 17.4027H81.5193C81.2688 17.4027 81.0639 17.1966 81.0639 16.9447V10.9914H82.0658C82.0057 11.2863 81.9747 11.5922 81.9747 11.9073C81.9747 14.437 84.0123 16.4868 86.5289 16.4868C89.0455 16.4868 91.0831 14.437 91.0831 11.9073C91.0831 11.5922 91.0521 11.2863 90.992 10.9914H91.9939V16.9447Z"
                        fill="#DBDBDB"
                      />
                      <path
                        d="M62.4822 5.49609H64.7179L59.8348 10.8164L65.5793 18.057H61.0825L57.5579 13.6667L53.5298 18.057H51.2909L56.5129 12.3653L51.0059 5.49609H55.6167L58.7993 9.50894L62.4822 5.49609ZM61.6968 16.7828H62.935L54.9421 6.70387H53.6121L61.6968 16.7828Z"
                        fill="#DBDBDB"
                      />
                      <path
                        d="M37.1955 7.71794C37.1955 7.71794 37.0534 6.70771 36.6153 6.26441C36.0606 5.68098 35.4394 5.67732 35.1553 5.64343C33.1177 5.49414 30.0573 5.49414 30.0573 5.49414H30.0518C30.0518 5.49414 26.9923 5.49414 24.9539 5.64343C24.6688 5.67824 24.0485 5.68098 23.4938 6.26441C23.0557 6.70771 22.9163 7.71794 22.9163 7.71794C22.9163 7.71794 22.7715 8.90312 22.7715 10.091V11.202C22.7715 12.3872 22.9163 13.5751 22.9163 13.5751C22.9163 13.5751 23.0584 14.5854 23.4938 15.0296C24.0485 15.613 24.7772 15.5938 25.1023 15.656C26.2691 15.7678 30.0582 15.8017 30.0582 15.8017C30.0582 15.8017 33.1213 15.7962 35.1589 15.6496C35.444 15.6157 36.0643 15.6121 36.619 15.0287C37.0571 14.5854 37.1992 13.5742 37.1992 13.5742C37.1992 13.5742 37.344 12.389 37.344 11.2011V10.0901C37.3413 8.90495 37.1964 7.71703 37.1964 7.71703L37.1955 7.71794ZM28.548 12.5493V8.43051L32.4847 10.4968L28.548 12.5493Z"
                        fill="#DBDBDB"
                      />
                    </svg>
                  </div>
                </div>
                <div className="my-1 md:my-0 w-full md:w-2/5 text-white">
                  <h4 className="useful-link-title py-3">Useful links</h4>
                  <ul>
                    <li>
                      <Link href="#"> About Us </Link>
                    </li>
                    <li>
                      <Link href="#"> Features </Link>
                    </li>
                    <li>
                      <Link href="#"> News </Link>
                    </li>
                    <li>
                      <Link href="#"> Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-1 md:my-0 w-full md:w-1/2">
              <div className="news-letter">
                <div className="title text-center py-4">Newsletter</div>
                <div className="desc text-center">
                  Write a scene (based ondeffecult is jksdfhvhissfddg dsfgg
                  safghg{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
