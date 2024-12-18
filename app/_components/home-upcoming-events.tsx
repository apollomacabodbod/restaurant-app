
"use client"

import { motion } from "framer-motion";


export default function HomeUpcomingEvents(){


  return (<>


    <div className="flex flex-col  mt-[6.5em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out"
     
    
    >

      <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
     
      
      >

        <p className=" text-[#FFF] font-roboto text-[1.5rem] not-italic font-light">Party with us!</p>


      </motion.div>


      <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
     
      
      
      >

        <p className=" text-[#FFF] font-pt-serif  text-[2rem] lg:text-[3.5rem] not-italic font-bold ">Upcoming Events</p>

      </motion.div>

       

     



    </div>
    
    
    
  </>)
}