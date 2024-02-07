"use client";
import Link from "next/link";
import React from "react";
import DropdownMenu from "../components/DropdownMenu";

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
              <DropdownMenu />
              <a href="#" class="toggle hidden md:flex w-full md:w-auto">
                Log out
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
