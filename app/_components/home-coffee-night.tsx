import Image from "next/image";


export default function HomeCoffeNight(){

  return (
    
    <>
    
      <div className="flex flex-col mx-[2em] lg:mx-[5.4375em] xl:mx-[8.4375em] border border-[#50B498] green my-[2.4375em]">

        <div className="lg:flex lg:items-center lg:justify-center lg:bg-white lg:gap-[3em]  xl:gap-[4.125em] border border-[#50B498] green">

          <div className="flex flex-col border border-[#50B498] green">

            <div className="flex items-center justify-center">

              <Image src={"/home-events.svg"} width={570} height={570} alt="" className="lg:min-w-[24.625em]"></Image>

            </div>


          </div>

          <div className="flex flex-col border border-[#50B498] green bg-white">


            <p className="text-[#333] border border-[#50B498] green font-roboto text-[1.25rem] not-italic font-light mt-[2.375em] lg:mt-[0em]">Upcoming</p>
            <p className="text-[#333] border border-[#50B498] green font-pt-serif text-[2.5rem] not-italic font-bold ">Coffee Night</p>

            <p className="border border-[#50B498] green font-roboto text-[rgba(51,51,51,0.50)] text-[0.875rem] not-italic font-normal">25 september, 2019</p>

            <p className="border border-[#50B498] green font-roboto text-[1.25rem] not-italic font-light mt-[1.125em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
          

            <div className="flex items-center mt-[2.4375em]">

              <button className="py-[0.75em] px-[2.15625em] bg-[#6327EB] text-[#FFF] font-roboto text-[1.125rem] font-normal not-italic cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Book a table</button>
            </div>
          </div>



        </div>


      





      </div>


    
    </>
    
  )
}