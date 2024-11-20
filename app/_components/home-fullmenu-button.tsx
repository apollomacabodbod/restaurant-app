
"use client"

import { motion } from "framer-motion";


export default function HomeFullmenuButton(){


  return (<>


    <motion.div className="flex flex-col mt-[2.875em] mb-[5em] transition-all duration-1000 ease-in-out"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0 }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    
    >



      <div className="flex items-center justify-center">


        <button className="  py-[0.75em] px-[2.84375em] bg-[#6327EB] text-[#FFF] rounded-[0.1875em] font-roboto not-italic font-normal text-[1.125rem]  cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Full menu</button>


      </div>
       


    </motion.div>
    
    
  </>)
}