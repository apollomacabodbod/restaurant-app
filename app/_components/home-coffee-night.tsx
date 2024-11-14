import Image from "next/image";


export default function HomeCoffeNight(){

  return (
    
    <>
    
      <div className="flex flex-col mx-[2em] lg:mx-[8.4375em] border border-[#50B498] green">

        <div className="flex items-center justify-center bg-white lg:gap-[4.125em] border border-[#50B498] green">

          <div className="flex flex-col border border-[#50B498] green">

            <div className="flex items-center justify-center">

              <Image src={"/home-events.svg"} width={570} height={570} alt=""></Image>

            </div>


          </div>

          <div className="flex flex-col border border-[#50B498] green">


            <p className="text-[#333] border border-[#50B498] green font-roboto text-[1.25rem] not-italic font-light">Upcoming</p>
            <p className="text-[#333] border border-[#50B498] green font-pt-serif text-[2.5rem] not-italic font-bold ">Coffee Night</p>

            <p className="border border-[#50B498] green font-roboto text-[rgba(51,51,51,0.50)] text-[0.875rem] not-italic font-normal">25 september, 2019</p>

          </div>



        </div>


      





      </div>


    
    </>
    
  )
}