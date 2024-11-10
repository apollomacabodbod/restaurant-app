"use client"


import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function HomeHeader(){

  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  // Automatically close sidebar when viewport is larger than small screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);




  return (<>


    <div className="flex flex-col  mt-[1em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out ">

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



        {/* Sidebar for Mobile (Right Side) */}
        <div
          className={`fixed top-0 right-0 h-full w-[75%] max-w-[18em] bg-center bg-cover bg-no-repeat bg-fixed bg-[url('/hero-background.svg')] z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out` }
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          <div className="flex flex-col items-start p-4 relative">

            <Image
              src={'close-icon.svg'}
              width={0}
              height={0}
              alt="menu icon"
              onClick={toggleSidebar} // Toggle sidebar on click
              className="lg:hidden w-full bg-cover bg-center bg-no-repeat bg-fixed max-w-[2em]  self-end  active:transform active:scale-95 active:transition-transform active:duration-200 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-1000 ease-in-out"
            />

            





            <Link href={"#"} className=" font-roboto  text-[1.25rem]  leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]  opacity-70 hover:opacity-100 focus:opacity-100  transition-opacity duration-1000 ease-in-out">About us </Link>
            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100  hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> Menu</Link>
            <Link href={"#"} className="font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100   hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> Events</Link>
            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100   hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out"> News</Link>
            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] opacity-70 hover:opacity-100 focus:opacity-100  hover:border-[#FFF] border-transparent transition-opacity duration-1000 ease-in-out">Contacts </Link>


            
          </div>
        </div>



        {/* Humberger */}
        
        <div className="relative  lg:hidden active:transform active:scale-95 active:transition-transform active:duration-200 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          <Image
            src={'/oval.svg'}
            alt="facebook logo"
            width={48}
            height={48}
            className=" min-w-[3em] "
            onClick={toggleSidebar} // Toggle sidebar on click
          />
          <Image
            src={'/humberger.svg'}
            alt="facebook logo"
            width={20}
            height={16}
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={toggleSidebar} // Toggle sidebar on click
          />
        </div>


      </div>



      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}







    </div>

    
    
  </>)
}