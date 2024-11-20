"use client"


import Image from "next/image"

import { useState } from "react"
import { foods } from "../_types/home-foods-types"

import { motion } from "framer-motion";



export default function HomeLunchFoods(){

  const [homeFoods, setHomeFoods] = useState<foods[]>([  
        
    { id: 1 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 2 , name: "Mediterranean Salad", description: "Soy sauce, wasabi, pickled ginger and chopsticks" , image: "/rice.svg" , price: 17.00},
    { id: 3 , name: "Creole Tempeh", description: "Served with soy sauce, wasabi, pickled  chopsticks" , image: "/rice.svg" , price: 19.00},
    { id: 4 , name: "Warm Kipfler Potato", description: "Sauce, wasabi, pickled ginger and chopsticks" , image: "/rice.svg" , price: 22.00},
    { id: 5 , name: "Polenta Nera Cake", description: "Served with soy sauce, wasabi, pickled ginger" , image: "/rice.svg" , price: 13.00},
    { id: 6 , name: "Warm Kipfler Potato", description: "Wasabi, pickled ginger and chopsticks" , image: "/rice.svg" , price: 24.00}
    
  ])





  return (<>


    <div className="grid grid-cols-1 lg:grid-cols-2 mt-[1em] mx-[2em] lg:mx-[8.4375em]  transition-all duration-1000 ease-in-out  gap-[1em] lg:gap-[0.5em]"
    
    >

      {homeFoods.map(item => (

        <motion.div key={item.id} className="flex flex-col  transition-all duration-1000 ease-in-out"
        
        
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
    

        >

          <div className="lg:flex lg:items-center lg:justify-center lg:gap-[1.25em] ">


            <div className="flex flex-col "> 


              <div className="flex items-center">

                <Image src={item.image} width={136} height={136} alt="" className="min-w-[8.5em]"></Image>

              </div>



            </div>

            



            <div className="flex flex-col ">

              <div className="flex items-center justify-between   xl:gap-[7em]">
                   

                <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light ">{item.name}</p>
                <p className=" font-roboto text-[1.25rem] not-italic font-light text-[rgba(51,51,51,0.50)] ">{`$${item.price}`}</p>
        
              </div>

              <p className=" font-roboto text-[0.875rem] text-[rgba(51,51,51,0.50)] font-normal">{`${item.description}`}</p>



            </div>





          </div>



        </motion.div>


      ))}


    </div>
    
  </>)
}