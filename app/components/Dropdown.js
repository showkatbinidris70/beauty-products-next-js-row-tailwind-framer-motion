"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 focus:outline-none"
      >
        <span className="mr-2">EN</span>
        <svg
          className="h-4 w-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border rounded shadow-lg">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">EN</li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">BN</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
