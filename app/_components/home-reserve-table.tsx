"use client";


import Image from "next/image";


import { useState, useEffect, useRef } from 'react';

export default function HomeReserveTable(){


  const [showPaymentOptions, setShowPaymentOptions] = useState(false); // Start closed by default
  const containerRef = useRef<HTMLDivElement>(null);
  
  const togglePaymentOptions = () => {
    setShowPaymentOptions((prev) => !prev);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPaymentOptions(false); // Close the dropdown if clicked outside
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <>

      <div className="flex flex-col border border-[#50B498] green mx-[2em] py-[5em]  lg:py-[10em] lg:px-[4.5em]">


        <div className="lg:flex lg:items-center lg:justify-between  gap-[3.875em] lg:border border-[#50B498] green">


          <div className="flex flex-col border border-[#50B498] green ">


            <p className="border border-[#50B498] green ">Reserve</p>
            <p className="border border-[#50B498] green ">A Table</p>

            <p className="border border-[#50B498] green">Date</p>


            <input type="date" id="birthday" name="birthday" className="font-roboto font-light border border-[#50B498] green  text-[1.25rem] text-[rgba(51,51,51,0.50)] lg:pr-[10em]  xl:pr-[15em]"  />

            <p className="border border-[#50B498] green">Time</p>


            <div className='border border-[#50B498]' ref={containerRef}
              onClick={togglePaymentOptions}
            >
              <button>7:00 AM</button>

              <div
                className={`${
                  showPaymentOptions ? 'max-h-36 overflow-y-auto' : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className='border border-[#50B490] green '>
                  <p>9:00 AM</p>
                  <p>12:00 PM</p>
                  <p>3:00 PM</p>
                  <p>6:00 PM</p>
                  <p>9:00 PM</p>
                </div>
              </div>
            </div>

                
          </div>



          <div className="flex flex-col">


            <div className="flex items-center justify-center">

              <Image src={'/home-our-chef-2.svg'} width={570} height={560} alt=""></Image>



            </div>

          </div>






        </div>



      </div>
    
    </>
    
  )
}