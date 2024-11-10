import Image from "next/image";




export default function HomeCheckout(){


  return (
    
    <>


      <div className="flex flex-col border border-[#50B498] green mx-[1em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out mt-[4.5em] lg:mt-[10.5em]">


        <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.5rem] not-italic font-light">Check out our</p>


        <div className="relative">

          <p className="border border-[#50B498] green text-[#333] font-serif text-[3.5rem] not-italic font-bold">Seasonal Offers</p>

          <Image src={'/seasonal-shape.svg'} width={176} height={176} alt="seasional shape icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#50B498] green"/>

        </div>


        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green">Alaskan Fish & Chips</p>

          <p className="border border-[#50B498] green">$14.00</p>

        </div>


        <p className="border border-[#50B498] green">Served with soy sauce, wasabi, pickled ginger and chopsticks</p>
     
     


        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green">Fishermen’s Basket</p>

          <p className="border border-[#50B498] green">$7.00</p>

        </div>


        <p className="border border-[#50B498] green">Snow crab, avocado, cucumber, tobiko, Japanese mayonnaise</p>
 




        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green">Chicken Breat Saute Sec</p>

          <p className="border border-[#50B498] green">$5.00</p>

        </div>


        <p className="border border-[#50B498] green">A Latte is a coffee drink made with espresso and steamed milk</p>
 



        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green">Crisp Pork Belly</p>

          <p className="border border-[#50B498] green">$18.00</p>

        </div>


        <p className="border border-[#50B498] green">Candied salmon, basil potato puree, baby kale marsala</p>
 

        <div className="flex items-center justify-center">
    
          <Image src={'/home-checkout-salad.svg'} alt="" width={570} height={570} className=""></Image>

        </div>


      </div>
    
    
    
    </>
    
  )
}