"use client"


import React, { useState, useRef, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component

const HomeDropDownTime: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("7:00 AM");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative mt-[0.875em]">
      {/* Dropdown Button */}

      <div className="flex flex-col ">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex justify-between items-center px-3 py-[0.3em] border border-gray-300 rounded-t-md font-light  text-[1.25rem] font-roboto ${
            isOpen ? "rounded-b-none" : "rounded-md"
          }`}
        >
          <span className="text-[rgba(51,51,51,0.50)]">{selectedOption}</span>

          {/* Dropdown icon as an image */}
          <div
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <Image
              src="/home-reserve-table.svg" // Provide the correct path or URL to the image
              alt="Dropdown icon"
              width={10} // Set the width of the image
              height={6} // Set the height of the image
              priority // Optional: ensure the image loads with high priority
            />
          </div>
        </button>

      </div>
    

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 right-0 bg-gray-100 border border-t-0 border-gray-300 rounded-b-md shadow-md text-sm z-10">
          <li
            onClick={() => handleOptionClick("9:00 AM")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
            9:00 AM
          </li>
          <li
            onClick={() => handleOptionClick("1:00 PM")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
            1:00 PM
          </li>
          <li
            onClick={() => handleOptionClick("2:00 PM")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
              2:00 PM
          </li>
          <li
            onClick={() => handleOptionClick("3:00 PM")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
            3:00 PM
          </li>
        </ul>
      )}
    </div>
  );
};

export default HomeDropDownTime;
