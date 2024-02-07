"use client";
import React, { useState } from "react";

export default function DropdownMenu() {
  const [isSubMenuHidden, setIsSubMenuHidden] = useState(true);

  const toggleMenus = () => {
    setIsSubMenuHidden(!isSubMenuHidden);
  };

  return (
    <div>
      <ul className="flex gap-2 items-center">
        <li>
          <button className="block py-2 hasSubMenu" onClick={toggleMenus}>
            EN
            <span className="inline-block">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 w-4 h-4 fill-current chevron"
              >
                <title>Chevron Down</title>
                <path
                  transform="rotate(270, 12, 12)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                ></path>
              </svg>{" "}
            </span>{" "}
          </button>
          <ul
            className={`bg-black text-sm subMenu ${
              isSubMenuHidden ? "hidden" : ""
            }`}
          >
            <li>
              <a href="#" className="block py-2 ml-3">
                BN
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
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
        </li>
        <li>
          <a href="/">
            <div className="border-solid border-orange-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
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
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
