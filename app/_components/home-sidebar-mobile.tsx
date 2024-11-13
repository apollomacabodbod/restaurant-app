// import Image from "next/image";





"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen,setSidebarOpen]);

  // Close sidebar on screen resize (e.g., when the screen is maximized)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarOpen]);

  return (
    <div
      ref={sidebarRef} 
      className={`lg:hidden fixed top-0 right-0 w-[75%] max-w-[18em] min-h-screen z-40 bg-center bg-cover bg-no-repeat bg-fixed bg-[url('/hero-background.svg')] transition-transform duration-500 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >


      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="flex flex-col items-start p-4 relative">

        <Image
          src={'close-icon.svg'}
          width={0}
          height={0}
          alt="menu icon"
          onClick={() => setSidebarOpen(false)} // Toggle sidebar on click
          className="lg:hidden w-full bg-cover bg-center bg-no-repeat bg-fixed max-w-[2em]  self-end  active:transform active:scale-95 active:transition-transform active:duration-200 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-1000 ease-in-out"
        />

  





        <Link href={"#"} className=" font-roboto  text-[1.25rem]  leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]  opacity-70 hover:opacity-100 focus:opacity-100  transition-opacity duration-1000 ease-in-out">About us </Link>
        <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100  hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> Menu</Link>
        <Link href={"#"} className="font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100   hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> Events</Link>
        <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100   hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> News</Link>
        <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100  hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out">Contacts </Link>


  
      </div>


    </div>
  );
};

export default Sidebar;

