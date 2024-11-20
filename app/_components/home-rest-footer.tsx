
"use client"

import { motion } from "framer-motion";



import Image from "next/image";




export default function HomeRestFooter(){


  return (<>


    <div className="flex flex-col  mt-[4.5625em] mb-[2em] lg:mt-[15em] transition-all duration-1000 ease-in-out"
    
    >


      <motion.p className=" text-[#fff] text-center font-pt-serif text-[2.5rem] not-italic font-bold transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      >
        
        REST
        
      </motion.p>



      <motion.div className="lg:flex lg:items-center lg:justify-center    lg:gap-[3em] mt-[1.6em] transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      >


        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center mt-[1.4em] lg:mt-[0em]">About us</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center  mt-[1.4em] lg:mt-[0em]">Menu</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center mt-[1.4em]  lg:mt-[0em]">Events</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center  mt-[1.4em] lg:mt-[0em]">News</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center  mt-[1.4em] lg:mt-[0em]">Contact</p>


      </motion.div>



      <motion.div className="flex items-center justify-center mt-[5.4375em] gap-[0.7em] transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      >


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



      </motion.div>



      <motion.p className=" text-center text-[rgba(255,255,255,0.50)] mt-[1.5625em] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      
      >2024 Restaurant. All Rights Reserved.</motion.p>



    </div>
    
    
  </>)
}