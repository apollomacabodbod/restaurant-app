
"use client"

import { motion } from "framer-motion";



export default function HomeGalleryPeople(){

  return (<>

    <div className="flex flex-col   mb-[3.25em] mt-[8.5em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out"
    
    
    >

      <motion.p className=" text-center text-[#333] font-roboto text-[1.5rem] not-italic font-light  transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      >What people</motion.p>
      <motion.p className=" text-center text-[#333] font-pt-serif  text-[2.5rem] lg:text-[3.5rem] not-italic font-bold  transition-all duration-1000 ease-in-out"
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      
      >Say About Us</motion.p>


    </div>
    
    
  </>)
}