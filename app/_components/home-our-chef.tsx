
"use client"

import Image from "next/image";
import { motion } from "framer-motion";


export default function HomeOurChef(){



  return (<>


    <div className="flex flex-col  my-[9em] mx-[2em] lg:mx-[5em]  xl:mx-[8.4375em] transition-all duration-1000 ease-in-out"
    
    
    
    >


      <div className="lg:flex lg:items-center lg:justify-between lg:gap-[2em] xl:gap-[8.125em] ">




        <motion.div className="flex flex-col transition-all duration-1000 ease-in-out"
        
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


            <div className=" bg-center bg-cover bg-no-repeat   bg-[url('/home-our-chef.svg')] w-[30.625em] h-[30.625em] rounded-[0.1875em] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">


              <div className="relative flex flex-col bg-[#BBA285] w-[120px] h-[120px] rounded-[0.5em] mt-[20.8125em] sm:ml-[-3em] ml-[-1.5em]">

                <Image
                  src={'/kitchen-oval.svg'}
                  alt="oval logo"
                  width={85}
                  height={85}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Image
                  src={'/home-our-chef-1.svg'}
                  alt="path logo"
                  width={33}
                  height={48}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

              </div>


            </div>


          </div>


         

       

        </motion.div>


        <div className="flex flex-col  mt-[4.9375em] lg:mt-[0em] transition-all duration-1000 ease-in-out"
        
        
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
        
          >The word from</motion.p>

          <motion.p className=" text-[#333] font-pt-serif text-[3.5rem] not-italic font-bold transition-all duration-1000 ease-in-out"
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
        
          
          >Our Chef</motion.p>

          <motion.p className=" lg:max-w-[29.375em] text-[#333] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out"
           
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
         
          
          >A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.</motion.p>
                
          <motion.p className=" text-[#333] font-pt-serif text-[1.5rem] font-bold mt-[2em] transition-all duration-1000 ease-in-out"
          
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
        
          
          > Slavcho Karbashewski</motion.p>

          <motion.p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out" 
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          
          >Head Chef</motion.p>
                
        </div>



      </div>



    </div>
    
    
  </>)
}