"use client"


import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./home-sidebar-mobile";
import { useHeaderState } from "@/hooks/useHeader";

export default function HomeHeader(){

  const { isSidebarOpen, setIsSidebarOpen, isScrolling } = useHeaderState();


  return (<>


    <header
      className={`fixed top-0 left-0 w-full py-[1em] transition-all duration-1000 ease-in-out z-10 ${
        isScrolling
          ? 'backdrop-blur-lg bg-black/50 shadow-lg'
          : 'bg-transparent backdrop-blur-none shadow-none'
      }`}
    >


      <div className="flex flex-col  mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out ">

        <div className="flex items-center justify-between transition-all duration-1000 ease-in-out">

          <Image 
            src={'/logo.svg'} 
            alt="logo" 
            width={101} 
            height={0} 
            className="
    cursor-pointer 
    opacity-70 hover:opacity-100 
    transition-opacity duration-1000 ease-in-out
    active:scale-95 active:transition-transform active:duration-200 active:ease-out
  "
          />


          <div className="lg:flex-col  lg:flex hidden  ">

            <div className="flex items-center  lg:gap-[1.9em]  transition-all duration-1000 ease-in-out ">


              <Link href={"#"} className=" font-roboto   lg:text-[1.25rem]  leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]  opacity-70 hover:opacity-100 focus:opacity-100  transition-opacity duration-1000 ease-in-out">About us </Link>
              <Link href={"#"} className=" font-roboto  lg:text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100  hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> Menu</Link>
              <Link href={"#"} className="font-roboto  lg:text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100   hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> Events</Link>
              <Link href={"#"} className=" font-roboto  lg:text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100   hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> News</Link>
              <Link href={"#"} className=" font-roboto  lg:text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100  hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out">Contacts </Link>

            </div>

          </div>



          <div className="lg:flex-col lg:flex hidden transition-all duration-1000 ease-in-out">

            <div className="flex items-center sm:gap-[0.4em] transition-all duration-1000 ease-in-out">
    
              {/* Container for overlayed images */}
              <div className="relative cursor-pointer transform active:scale-95 active:transition-transform active:duration-200 opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                <Image
                  src={'/oval.svg'}
                  alt="facebook logo"
                  width={48}
                  height={48}
                  className=" min-w-[3em]"
                />
                <Image
                  src={'/facebook.svg'}
                  alt="facebook logo"
                  width={15}
                  height={16}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                />
              </div>


              <div className="relative cursor-pointer transform active:scale-95 active:transition-transform active:duration-200 opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                <Image
                  src={'/oval.svg'}
                  alt="facebook logo"
                  width={48}
                  height={48}
                  className=" min-w-[3em]"
                />
                <Image
                  src={'/twitter.svg'}
                  alt="facebook logo"
                  width={20}
                  height={16}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                />
              </div>


              <div className="relative cursor-pointer transform active:scale-95 active:transition-transform active:duration-200 opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                <Image
                  src={'/oval.svg'}
                  alt="facebook logo"
                  width={48}
                  height={48}
                  className=" min-w-[3em]"
                />
                <Image
                  src={'/instagram.svg'}
                  alt="facebook logo"
                  width={20}
                  height={16}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                />
              </div>



            </div>

          </div>


          {/* Overlay Sidebar Mobile*/}

          {isSidebarOpen && (
            <div
              className="fixed inset-0 min-h-screen bg-black opacity-50 z-40"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on overlay click
            />
          )}


          {/* Sidebar */}
          <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />


          {/* Humberger */}
        
          <div className="relative  lg:hidden active:transform active:scale-95 active:transition-transform active:duration-200 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
            <Image
              src={'/oval.svg'}
              alt="facebook logo"
              width={48}
              height={48}
              className=" min-w-[3em] "
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar on click
            />
            <Image
              src={'/humberger.svg'}
              alt="facebook logo"
              width={20}
              height={16}
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar on click
            />
          </div>


        </div>







      </div>


    

    </header>
    
  </>)
}