"use client"


import Image from "next/image";
import { motion } from "framer-motion";



export default function HomeCheckout(){


  return (
    
    <>


      <div className="flex flex-col   lg:my-[10em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out  "
      
      
      >



        <div className="lg:flex lg:items-center lg:justify-between transition-all duration-1000 ease-in-out lg:gap-[3em] xl:gap-[10em]">

          <div className="flex flex-col">


    

            <motion.p className=" text-[#333] font-roboto text-[1.5rem] not-italic font-light transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            
            >Check out our</motion.p>


            <motion.div className="relative transition-all duration-1000 ease-in-out"
           
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >

              <p className=" text-[#333] font-serif  text-[2.5rem] xl:text-[3.5rem] not-italic font-bold whitespace-nowrap">Seasonal Offers</p>

              <Image src={'/seasonal-shape.svg'} width={176} height={176} alt="seasional shape icon" className="absolute top-[0em] xl:top-[1em] left-[13em] xl:left-[21em] -translate-x-1/2 -translate-y-1/2  "/>

            </motion.div>


            <motion.div className="flex items-center justify-between   mt-[2.625em] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}

            >

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out"
              

              >
                
                Alaskan Fish & Chips
                
              </p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out"
              
                

              >$14.00</p>

            </motion.div>


            <motion.p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal lg:whitespace-nowrap transition-all duration-1000 ease-in-out"
              
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >
              
              Served with soy sauce, wasabi, pickled ginger and chopsticks</motion.p>
     
     


            <motion.div className="flex items-center justify-between  mt-[2.625em] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
          
            >

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out"

              
              >Fishermen’s Basket
              
              </p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light transition-all duration-1000 ease-in-out"
               
              
              >$7.00
              
              
              </p>

            </motion.div>


            <motion.p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal lg:whitespace-nowrap transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >
              
              Snow crab, avocado, cucumber, tobiko, Japanese mayonnaise
              
            </motion.p>
     




            <motion.div className="flex items-center justify-between  mt-[2.625em] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light">Chicken Breat Saute Sec</p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$5.00</p>

            </motion.div>


            <motion.p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal lg:whitespace-nowrap transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              
              A Latte is a coffee drink made with espresso and steamed milk
              
            </motion.p>
     



            <motion.div className="flex items-center justify-between  mt-[2.625em] transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light">Crisp Pork Belly</p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$18.00</p>

            </motion.div>


            <motion.p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal lg:whitespace-nowrap transition-all duration-1000 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            
            >Candied salmon, basil potato puree, baby kale marsala</motion.p>

          </div>


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
        
        
            <div className="flex items-center justify-center my-[4.6875em] overflow-hidden">
    
              <Image src={'/home-checkout-salad.svg'} alt="" width={570} height={570} className="rounded-[0.5em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 ease-in-out hover:scale-110"></Image>

            </div>

            
          </motion.div>

          



        </div>




       


      </div>
    
    
    
    </>
    
  )
}