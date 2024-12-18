"use client";


import Image from "next/image";

import { motion } from "framer-motion";
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

      <div className="flex flex-col  lg:bg-white green mx-[2em]  lg:pb-[5em] mb-[5em] lg:mb-[0em] lg:relative  lg:top-[8em]  lg:px-[2em]    lg:mx-[5em] xl:mx-[8.4375em] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-1000 ease-in-out "
      
      
      >


        <div className="lg:flex lg:items-center lg:justify-between  lg:gap-[1.9em] xl:gap-[3.875em] ">


          <div className="flex flex-col transition-all duration-1000 ease-in-out "
          
        
          >

            <motion.p className=" text-[#333] font-roboto text-[1.5rem] not-italic font-light transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
       

            >Reserve</motion.p>
            <motion.p className=" text-[#333] font-pt-serif not-italic font-bold  text-[3.5rem] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
       
            >A Table</motion.p>

            <motion.p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2em] transition-all duration-1000 ease-in-out"
            
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
       
            
            
            >Date</motion.p>


            <motion.input
              type="date"
              id="birthday"
              name="birthday"
              value={date} // Set the default value to today's date
              onChange={(e) => setDate(e.target.value)} // Optional: handle value change
              className="font-roboto font-light border border-gray-300 rounded-[0.3125em] text-[1.25rem] text-[rgba(51,51,51,0.50)] lg:pr-[10em] xl:pr-[15em] mt-[0.875em] py-[0.3em] px-3 transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
         
            
            
            />
            <motion.p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2em] transition-all duration-1000 ease-in-out"
            
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
       
            
            >Time</motion.p>


            <HomeReserveDropDown/>


            <motion.p className=" font-roboto text-[0.75rem] font-bold uppercase not-italic mt-[2em] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >Guest</motion.p>


            <HomeDropDownGuest/>

            <motion.div className="flex items-center  mt-[2.5em]  xl:mt-[2.5em] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >

              <button className=" text-[#fff]  bg-[#6327EB] py-[0.75em] px-[2.40625em] text-[1.125rem] font-roboto font-normal rounded-[0.1875em] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Find a table</button>

            </motion.div>
           





                
          </div>



          <motion.div className="flex flex-col mt-[5.75em] lg:mt-[0em] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-1000 ease-in-out"
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          
          >


            <div className="flex items-center justify-center overflow-hidden">

              <Image src={'/home-our-chef-2.svg'} width={570} height={560} alt="" className="rounded-[0.1875em] transition-all duration-700 ease-in-out hover:scale-110"></Image>



            </div>

          </motion.div>






        </div>



      </div>
    
    </>
    
  )
}