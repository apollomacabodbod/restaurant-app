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

          <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.25rem] not-italic font-light">Alaskan Fish & Chips</p>

          <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$14.00</p>

        </div>


        <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">Served with soy sauce, wasabi, pickled ginger and chopsticks</p>
     
     


        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.25rem] not-italic font-light">Fishermen’s Basket</p>

          <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$7.00</p>

        </div>


        <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">Snow crab, avocado, cucumber, tobiko, Japanese mayonnaise</p>
     




        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.25rem] not-italic font-light">Chicken Breat Saute Sec</p>

          <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$5.00</p>

        </div>


        <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">A Latte is a coffee drink made with espresso and steamed milk</p>
     



        <div className="flex items-center justify-between border border-[#50B498] green">

          <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.25rem] not-italic font-light">Crisp Pork Belly</p>

          <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$18.00</p>

        </div>


        <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">Candied salmon, basil potato puree, baby kale marsala</p>





        <div className="flex items-center justify-center">
    
          <Image src={'/home-checkout-salad.svg'} alt="" width={570} height={570} className=""></Image>

        </div>


      </div>
    
    
    
    </>
    
  )
}