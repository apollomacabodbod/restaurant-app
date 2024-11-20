
"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeOval(){

  return (
    
    <>

      <motion.div className="flex flex-col mb-[2em] mt-[2em] xl:mt-[0em] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out "
      
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

          <div className="relative cursor-pointer">
            <Image
              src={'/oval.svg'}
              alt="oval logo"
              width={48}
              height={48}
              className=" min-w-[3em]"
            />
            <Image
              src={'/path.svg'}
              alt="path logo"
              width={15}
              height={16}
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>


        </div>


     


      </motion.div>



    
    
    </>)
}