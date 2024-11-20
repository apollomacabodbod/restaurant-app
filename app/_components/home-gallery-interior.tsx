

"use client"

import { motion } from "framer-motion";


export default function HomeGalleryInterior(){


  return (<>


    <motion.div className="flex flex-col mt-[7.5em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out"
    
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    
    
    >

      <p className=" text-center text-[#333] font-roboto text-[1.5em] not-italic font-light ">Gallery</p>
      <p className=" text-center text-[#333] font-pt-serif text-[2.5rem] lg:text-[3.5em] not-italic font-bold ">Our Interior</p>

    </motion.div>
    
    
  </>)
}