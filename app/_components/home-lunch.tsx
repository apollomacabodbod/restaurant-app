



export default function HomeLunch(){


  const data = [
      
    { id: 1 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 2 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 3 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 4 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 5 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00},
    { id: 6 , name: "Huitlacoche Tamle", description: "Served pickled ginger and chopsticks" , image: "/rice.svg" , price: 14.00}

  ]


  return (<>


    <div className="flex flex-col mt-[7.5em] border border-[#50B490] green">



      <div className="flex items-center justify-center border border-[#50B490] green">

        <p className="text-[#333] font-roboto text-[1.5rem] not-italic font-light">Tasty dishes</p>

      </div>


      <div className="flex items-center justify-center border border-[#50B490] green">

        <p className="text-[#333] font-pt-serif text-[3.5rem] not-italic font-bold">For Lunch</p>

      </div>


      


    </div>
    
    
    
  </>)
}