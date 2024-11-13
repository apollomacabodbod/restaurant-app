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


    <div className="grid grid-cols-2">

      {homeFoods.map(item => (

        <div key={item.id} className="flex flex-col ">

          <div className="flex items-center justify-between">


            <div className="flex flex-col">


              <div className="flex items-center">

                <Image src={item.image} width={136} height={136} alt="" className=""></Image>



              </div>

            </div>





          </div>



        </div>


      ))}


    </div>
    
  </>)
}