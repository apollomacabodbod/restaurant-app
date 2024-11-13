"use client"


import Image from "next/image"

import { useState } from "react"


type foods = {

    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

export default function HomeLunchFoods(){

  const [homeFoods, setHomeFoods] = useState<foods[]>([  
        
    { id: 1 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 2 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 3 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 4 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 5 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 6 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00}
    
  ])





  return (<>


    <div className="grid grid-cols-1 lg:grid-cols-2 my-[2.9375em] mx-[2em] lg:mx-[8.4375em]  transition-all duration-1000 ease-in-out border border-[#50B490] gap-[1em] lg:gap-[0.5em]">

      {homeFoods.map(item => (

        <div key={item.id} className="flex flex-col border border-[#50B490] ">

          <div className="lg:flex lg:items-center lg:gap-[1.25em] ">


            <div className="flex flex-col border border-[#50B490] green"> 


              <div className="flex items-center">

                <Image src={item.image} width={136} height={136} alt="" className=""></Image>

              </div>



            </div>

            



            <div className="flex flex-col border border-[#50B490] green">

              <div className="flex items-center justify-between  lg:gap-[7em]">
                   

                <p className="border border-[#50B490] green text-[#333] font-roboto text-[1.25rem] not-italic font-light ">{item.name}</p>
                <p className="border border-[#50B490] green font-roboto text-[1.25rem] not-italic font-light text-[rgba(51,51,51,0.50)] ">{`$${item.price}`}</p>
        
              </div>

              <p className="border border-[#50B490] green font-roboto text-[0.875rem] text-[rgba(51,51,51,0.50)] font-normal">{`${item.description}`}</p>



            </div>





          </div>



        </div>


      ))}


    </div>
    
  </>)
}