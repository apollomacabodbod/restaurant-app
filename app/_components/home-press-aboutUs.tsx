
"use client"

import { motion } from "framer-motion";


export default function HomePressAboutUs(){

  return (<>

    <motion.div className="flex flex-col mt-[25em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out"
    
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    
    >

      <p className=" text-[#FFF] text-center font-roboto text-[1.5rem] not-italic font-light ">Press</p>

      <p className=" text-center text-[#FFF] font-pt-serif not-italic font-bold  text-[3.5rem]">About Us</p>


    </motion.div>
    
  </>)
}