"use client";


import Image from "next/image";


import { useState, useEffect, useRef } from 'react';

export default function HomeReserveTable(){


  const [showPaymentOptions, setShowPaymentOptions] = useState(false); // Start closed by default
  const [showGuest, setshowGuest] = useState(false); // Start closed by default
  const containerRef = useRef<HTMLDivElement>(null);
  const containerGuest = useRef<HTMLDivElement>(null);
  
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

      <div className="flex flex-col border border-[#50B498] bg-white green mx-[2em]  mb-[5em] lg:mb-[0em] lg:relative  lg:top-[8em]    lg:pb-[10em] lg:px-[4.5em]">


        <div className="lg:flex lg:items-center lg:justify-between  gap-[3.875em] lg:border border-[#50B498] green">


          <div className="flex flex-col border border-[#50B498] green ">


            <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.5rem] not-italic font-light ">Reserve</p>
            <p className="border border-[#50B498] green text-[#333] font-pt-serif not-italic font-bold  text-[3.5rem]">A Table</p>

            <p className="border border-[#50B498] green font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2.5625em]">Date</p>


            <input type="date" id="birthday" name="birthday" className="font-roboto font-light border border-[#DADADA] rounded-[0.3125em] text-[1.25rem] text-[rgba(51,51,51,0.50)] lg:pr-[10em]  xl:pr-[15em] mt-[0.875em]"  />

            <p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2.25em] ">Time</p>


            <div className='border border-[#DADADA]  flex flex-col py-[0.5em] px-[1rem] rounded-[0.3125em] mt-[0.875em]' ref={containerRef}
              onClick={togglePaymentOptions}
            >

              <div className="flex items-center justify-between mb-[0.5em]">

                <button className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)] ">7:00 AM</button>

                <Image src={'/home-reserve-table.svg'} width={10} height={6} alt=""></Image>


              </div>
            

              <div
                className={`${
                  showPaymentOptions ? 'max-h-36 overflow-y-auto' : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className=''>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">9:00 AM</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">12:00 PM</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">3:00 PM</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">6:00 PM</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">9:00 PM</p>
                </div>
              </div>
            </div>

            <p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2.25em]">Guest</p>


            <div className='border border-[#DADADA] green flex flex-col py-[0.5em] px-[1rem] rounded-[0.3125em] mt-[0.875em]' ref={containerGuest}
              onClick={toggleGuest}
            >

              <div className="flex items-center justify-between mb-[0.5em]">

                <button className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">2 People</button>

                <Image src={'/home-reserve-table.svg'} width={10} height={6} alt=""></Image>


              </div>
            

              <div
                className={`${
                  showGuest ? 'max-h-36 overflow-y-auto' : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className=''>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">3 People</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">4 People</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">5 People</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">6 People</p>
                  <p className="font-roboto font-light  text-[1.25rem] text-[rgba(51,51,51,0.50)]">7 People</p>
                </div>
              </div>
            </div>


            <div className="flex items-center border border-[#50B498] green mt-[2em]">

              <button className="border border-[#50B498] green text-[#fff]  bg-[#6327EB] py-[0.75em] px-[2.40625em] text-[1.125rem] font-roboto font-normal rounded-[0.1875em] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Find a table</button>

            </div>
           





                
          </div>



          <div className="flex flex-col mt-[5.75em] lg:mt-[0em]">


            <div className="flex items-center justify-center">

              <Image src={'/home-our-chef-2.svg'} width={570} height={560} alt=""></Image>



            </div>

          </div>






        </div>



      </div>
    
    </>
    
  )
}