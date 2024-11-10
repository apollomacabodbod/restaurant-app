import Image from "next/image";




export default function HomeCheckout(){


  return (
    
    <>


      <div className="flex flex-col   lg:my-[10em] mx-[2em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out  ">



        <div className="lg:flex lg:items-center lg:justify-between transition-all duration-1000 ease-in-out gap-[3.875em]">

          <div className="flex flex-col">


    

            <p className=" text-[#333] font-roboto text-[1.5rem] not-italic font-light">Check out our</p>


            <div className="relative">

              <p className=" text-[#333] font-serif  text-[2.5rem] xl:text-[3.5rem] not-italic font-bold whitespace-nowrap">Seasonal Offers</p>

              <Image src={'/seasonal-shape.svg'} width={176} height={176} alt="seasional shape icon" className="absolute top-[1.5em] xl:top-[1em] left-[13em] xl:left-[21em] -translate-x-1/2 -translate-y-1/2  "/>

            </div>


            <div className="flex items-center justify-between   mt-[2.625em]">

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light">Alaskan Fish & Chips</p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$14.00</p>

            </div>


            <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">Served with soy sauce, wasabi, pickled ginger and chopsticks</p>
     
     


            <div className="flex items-center justify-between  mt-[2.625em]">

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light">Fishermen’s Basket</p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$7.00</p>

            </div>


            <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">Snow crab, avocado, cucumber, tobiko, Japanese mayonnaise</p>
     




            <div className="flex items-center justify-between  mt-[2.625em]">

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light">Chicken Breat Saute Sec</p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$5.00</p>

            </div>


            <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">A Latte is a coffee drink made with espresso and steamed milk</p>
     



            <div className="flex items-center justify-between  mt-[2.625em]">

              <p className=" text-[#333] font-roboto text-[1.25rem] not-italic font-light">Crisp Pork Belly</p>

              <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light ">$18.00</p>

            </div>


            <p className=" text-[rgba(51,51,51,0.50)] font-roboto text-[0.875rem] not-italic font-normal ">Candied salmon, basil potato puree, baby kale marsala</p>

          </div>



          <div className="flex flex-col">

            <div className="flex items-center justify-center my-[4.6875em]">
    
              <Image src={'/home-checkout-salad.svg'} alt="" width={570} height={570} className="rounded-[0.5em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"></Image>

            </div>

          </div>



        </div>




       


      </div>
    
    
    
    </>
    
  )
}