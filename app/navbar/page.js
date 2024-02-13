"use client";
import Link from "next/link";
import React from "react";
import Dropdown from "../components/Dropdown";

export default function MainNavbar() {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };
  return (
    <div>
      <section>
        <div className="container max-w-7xl px-4">
          <nav class="flex flex-wrap items-center justify-between">
            <div>
              <Link className="block main-logo text-nowrap" href="/">
                Asad Ali
              </Link>
            </div>
            <div class="flex md:hidden ml-auto">
              <button id="hamburger" onClick={toggleMenu}>
                <img
                  class="toggle block"
                  src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                  width="40"
                  height="40"
                />
                <img
                  class="toggle hidden"
                  src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                  width="40"
                  height="40"
                />
              </button>
            </div>
            <div class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
              <a
                href="/products"
                class="block md:inline-block hover:text-indigo-950 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Products
              </a>
              <a
                href="/story"
                class="block md:inline-block hover:text-indigo-950 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Story
              </a>
              <a
                href="/manufacturing"
                class="block md:inline-block hover:text-indigo-950 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Manufacturing
              </a>
              <a
                href="/about"
                class="block md:inline-block hover:text-indigo-950 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                About Us
              </a>
              <a
                href="/team"
                class="block md:inline-block hover:text-indigo-950 px-3 py-3 border-b-2 border-blue-900 md:border-none"
              >
                Team
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <a href="#" class="toggle hidden md:flex w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M19.2498 19.25L13.7498 13.75M15.5831 9.16667C15.5831 10.0093 15.4171 10.8437 15.0947 11.6222C14.7722 12.4007 14.2995 13.1081 13.7037 13.7039C13.1078 14.2998 12.4005 14.7724 11.622 15.0949C10.8435 15.4174 10.0091 15.5833 9.16642 15.5833C8.32377 15.5833 7.48938 15.4174 6.71087 15.0949C5.93236 14.7724 5.225 14.2998 4.62915 13.7039C4.03331 13.1081 3.56066 12.4007 3.2382 11.6222C2.91573 10.8437 2.74976 10.0093 2.74976 9.16667C2.74976 7.46486 3.4258 5.83276 4.62915 4.6294C5.83251 3.42604 7.46462 2.75 9.16642 2.75C10.8682 2.75 12.5003 3.42604 13.7037 4.6294C14.907 5.83276 15.5831 7.46486 15.5831 9.16667Z"
                    stroke="#111880"
                    stroke-width="2.04493"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" class="toggle hidden md:flex w-full md:w-auto">
                <Dropdown />
              </a>
              <a href="#" class="toggle hidden md:flex w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M14.6665 10.0833V6.41667C14.6665 5.44421 14.2802 4.51158 13.5926 3.82394C12.9049 3.13631 11.9723 2.75 10.9998 2.75C10.0274 2.75 9.09475 3.13631 8.40711 3.82394C7.71948 4.51158 7.33317 5.44421 7.33317 6.41667V10.0833M4.58317 8.25H17.4165L18.3332 19.25H3.6665L4.58317 8.25Z"
                    stroke="#111880"
                    stroke-width="2.04493"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="toggle hidden md:flex w-full md:w-auto text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  style={{
                    border: "1px solid black",
                    borderRadius: "50%",
                    padding: "1px",
                  }}
                >
                  <path
                    d="M10.9443 7.50704C11.46 6.99132 11.7498 6.29185 11.7498 5.5625C11.7498 4.83315 11.46 4.13368 10.9443 3.61796C10.4286 3.10223 9.7291 2.8125 8.99976 2.8125C8.27041 2.8125 7.57094 3.10223 7.05521 3.61796C6.53949 4.13368 6.24976 4.83315 6.24976 5.5625C6.24976 6.29185 6.53949 6.99132 7.05521 7.50704C7.57094 8.02277 8.27041 8.3125 8.99976 8.3125C9.7291 8.3125 10.4286 8.02277 10.9443 7.50704Z"
                    stroke="#111880"
                    stroke-width="2.04493"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5968 11.7846C6.49932 10.882 7.7234 10.375 8.99976 10.375C10.2761 10.375 11.5002 10.882 12.4027 11.7846C13.3052 12.6871 13.8123 13.9111 13.8123 15.1875H4.18726C4.18726 13.9111 4.69429 12.6871 5.5968 11.7846Z"
                    stroke="#111880"
                    stroke-width="2.04493"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="toggle hidden md:flex w-full md:w-auto text-black whitespace-nowrap"
              >
                Log out
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
