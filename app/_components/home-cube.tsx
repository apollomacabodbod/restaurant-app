"use client"


import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeCube() {


  const Welcome = [
    "Welcome"
  ];


  const toOur = [
    " to our"
  ];



  return (
    <>
      <div className="flex flex-col  mt-[8em]   lg:mt-[6em]  mx-[2em] lg:mx-[8.4375em]  transition-all duration-1000 ease-in-out ">
              

        <div className="lg:flex lg:items-center lg:justify-between transition-all duration-1000 ease-in-out">


          <div className="flex flex-col  ">

            <div className="relative">


              <motion.p
                className="text-[#FFF] dark:text-[#FFF] text-[3.5rem]   xl:text-[4.5rem]  whitespace-nowrap  font-bold  font-pt-serif leading-[1.2em] tracking-[0.01em]  transition-all duration-1000 ease-in-out opacity-70 "

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}

              >
 Welcome


                <motion.br
                  className="lg:hidden transition-all duration-1000 ease-in-out "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}

                />
                {`${" to our"}`}



              </motion.p>


              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="absolute top-[-1em] lg:top-[-1em] xl:top-[-3em] left-[7em] lg:left-[12em] xl:left-[20em] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
              >
                <Image
                  src="/cube.svg"
                  alt="facebook logo"
                  width={176}
                  height={176}
                  className=""
                />
              </motion.div>



              {/* <Image
                src={'/cube.svg'}
                alt="facebook logo"
                width={176}
                height={176}
                // className="border border-[#50B498] absolute top-[2em] left-[16em] md:left-[22em] -translate-x-1/2 -translate-y-1/2 leading-tight tracking-tight"
                className=" absolute top-[3.5em]    lg:top-[4.5em] xl:top-[2.4em]  left-[12em]     lg:left-[19em] xl:left-[23em]  -translate-x-1/2 -translate-y-1/2  transition-all duration-1000 ease-in-out"
              /> */}

            </div>
              

            <motion.p className=" opacity-70  text-[#FFF] dark:text-[#FFF] text-[3.5rem]   xl:text-[4.5rem]   font-bold   font-pt-serif sm:leading-[1em] transition-all duration-1000 ease-in-out "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >
               Restaurant
            </motion.p>


            


            <motion.p className="text-[1.5rem]  font-roboto text-[#FFF] not-italic font-light leading-[2em] mt-[1.6875em] opacity-70 transition-all duration-1000 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >
              
              Everyday 8:00 am - 23:00 pm
            
            
            </motion.p>



            <motion.div className="flex items-center  gap-[1.875em] mt-[2.5em] transition-all duration-1000 ease-in-out"

              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >

              <button className="font-roboto py-[0.75em] bg-[#6327EB] px-[0.8em] sm:px-[2.15625em] text-[#FFFFFF] rounded-[0.1875em] text-[1.125rem] not-italic font-normal leading-[1.5em] cursor-pointer opacity-70 hover:opacity-100 hover:transition-opacity  transition-all duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out ">Book a table</button>
              <button className="font-roboto py-[0.75em]  border-2 border-[#7a7b7c] text-[#FFFFFF] px-[0.9em] sm:px-[2.15625em] rounded-[0.1875em] text-[1.125rem] not-italic font-normal leading-[1.5em] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">See menu</button>

            </motion.div>


          </div>




          <div className="flex items-center justify-center mt-[2.5em] lg:mt-[0em]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="transition-all duration-1000 ease-in-out"
            >
              <Image 
                src={'/rice.svg'} 
                alt="friend rice icon"
                width={555} 
                height={555}
                className=""

              />
            </motion.div>


          </div>


            






        </div>


          
    
              

      </div>
    </>
  );
}
