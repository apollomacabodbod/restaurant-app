"use client"

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component

const HomeDropDownGuest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("2 People");
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
    <motion.div ref={dropdownRef} className="relative mt-[0.875em] transition-all duration-1000 ease-in-out"
    
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    
    
    >
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
            onClick={() => handleOptionClick("3 People")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
           3 People
          </li>
          <li
            onClick={() => handleOptionClick("4 People")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
           4 People
          </li>
          <li
            onClick={() => handleOptionClick("5 People")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
             5 People
          </li>
          <li
            onClick={() => handleOptionClick("6 People")}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
            6 People
          </li>
        </ul>
      )}
    </motion.div>
  );
};

export default HomeDropDownGuest;
