"use client";


import Image from "next/image";


import { useState, useEffect, useRef } from 'react';
import HomeReserveDropDown from "./home-dropdown-time";
import HomeDropDownGuest from "./home-dropdown-guest";

export default function HomeReserveTable(){


  const [showPaymentOptions, setShowPaymentOptions] = useState(false); // Start closed by default
  const [showGuest, setshowGuest] = useState(false); // Start closed by default
  const containerRef = useRef<HTMLDivElement>(null);
  const containerGuest = useRef<HTMLDivElement>(null);




  const [date, setDate] = useState<string>("");

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Extract date part (YYYY-MM-DD)
    setDate(formattedDate);
  }, []);


  
  const togglePaymentOptions = () => {
    setShowPaymentOptions((prev) => !prev);
  };

  const toggleGuest = () => {
    setshowGuest((prev) => !prev);
  };


  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {


      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPaymentOptions(false); // Close the dropdown if clicked outside
     
      }


      if (containerGuest.current && !containerGuest.current.contains(event.target as Node)) {
       
        setshowGuest(false); // Close the dropdown if clicked outside
     
      }




    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <>

      <div className="flex flex-col  lg:bg-white green mx-[2em]  lg:pb-[5em] mb-[5em] lg:mb-[0em] lg:relative  lg:top-[8em]  lg:px-[2em]    xl:px-[4em] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-1000 ease-in-out">


        <div className="lg:flex lg:items-center lg:justify-between  lg:gap-[1.9em] xl:gap-[3.875em] ">


          <div className="flex flex-col  ">


            <p className=" text-[#333] font-roboto text-[1.5rem] not-italic font-light ">Reserve</p>
            <p className=" text-[#333] font-pt-serif not-italic font-bold  text-[3.5rem]">A Table</p>

            <p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2em]">Date</p>


            <input
              type="date"
              id="birthday"
              name="birthday"
              value={date} // Set the default value to today's date
              onChange={(e) => setDate(e.target.value)} // Optional: handle value change
              className="font-roboto font-light border border-gray-300 rounded-[0.3125em] text-[1.25rem] text-[rgba(51,51,51,0.50)] lg:pr-[10em] xl:pr-[15em] mt-[0.875em] py-[0.3em] px-3"
            />
            <p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2em] ">Time</p>


            <HomeReserveDropDown/>


            <p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2em]">Guest</p>


            <HomeDropDownGuest/>

            <div className="flex items-center  mt-[1em]  xl:mt-[3em] ">

              <button className=" text-[#fff]  bg-[#6327EB] py-[0.75em] px-[2.40625em] text-[1.125rem] font-roboto font-normal rounded-[0.1875em] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Find a table</button>

            </div>
           





                
          </div>



          <div className="flex flex-col mt-[5.75em] lg:mt-[0em] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">


            <div className="flex items-center justify-center">

              <Image src={'/home-our-chef-2.svg'} width={570} height={560} alt="" className="rounded-[0.1875em]"></Image>



            </div>

          </div>






        </div>



      </div>
    
    </>
    
  )
}