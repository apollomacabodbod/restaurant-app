"use client";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
    <motion.div
      ref={dropdownRef}
      className="relative mt-[0.875em] transition-all duration-1000 ease-in-out"
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
      <div className="flex flex-col">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex justify-between items-center px-4 py-[0.3em] border ${
            isOpen ? "border-gray-300 border-b-white rounded-t-md" : "border-gray-300 rounded-md"
          } font-light text-[1.25rem] font-roboto`}
        >
          <span className="text-[rgba(51,51,51,0.50)]">{selectedOption}</span>

          {/* Dropdown icon */}
          <motion.div
            className="transform"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/home-reserve-table.svg"
              alt="Dropdown icon"
              width={10}
              height={6}
              priority
            />
          </motion.div>
        </button>
      </div>

      {/* Dropdown Menu */}
      <motion.ul
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-0 right-0 bg-white border border-t-0 border-gray-300 rounded-b-md shadow-md text-sm z-10 overflow-hidden"
      >
        {["3 People", "4 People", "5 People", "6 People"].map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            className="px-4 py-[0.5em] hover:bg-gray-200 cursor-pointer font-roboto font-light text-[1.25rem] text-[rgba(51,51,51,0.50)]"
          >
            {option}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default HomeDropDownGuest;
