"use client"

import { motion } from "framer-motion";


export default function HomeLunch(){




  return (<>


    <div className="flex flex-col mt-[2em]  mx-[2em] lg:mx-[8.4375em]  transition-all duration-1000 ease-in-out"
    
     
    >


      <div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
      
      >

        <motion.p className="text-[#333] font-roboto text-[1.5rem] not-italic font-light transition-all duration-1000 ease-in-out"
        
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}

        >Tasty dishes</motion.p>

      </div>


      <div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
      
      
      >

        <motion.p className="text-[#333] font-pt-serif text-[3.5rem] not-italic font-bold transition-all duration-1000 ease-in-out"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        
        >For Lunch</motion.p>

      </div>


      


    </div>
    
    
    
  </>)
}