import Image from "next/image";

export default function HomeCube() {
  return (
    <>
      <div className="flex flex-col border border-[#50B498] mt-[2.6875em] sm:mt-[9em] xl:mt-[3.8125em] lg:mt-[5.8125em]  mx-[1em] lg:mx-[8.4375em]  transition-all duration-1000 ease-in-out ">
              

        <div className="sm:flex sm:items-center sm:justify-between transition-all duration-1000 ease-in-out">


          <div className="flex flex-col  ">

            <div className="relative">

              <p className="text-[3.5em]  sm:text-[3.1rem]  md:text-[4rem]  lg:text-[4rem] xl:text-[4.5rem]  whitespace-nowrap border border-[#50B498] font-bold  font-pt-serif leading-[1.2em] tracking-[0.01em]  transition-all duration-1000 ease-in-out">
               Welcome 
                <br className="sm:hidden transition-all duration-1000 ease-in-out"/> 
                {`${" to our"}`}
              </p>

              <p className="text-[3.5em] sm:text-[3.1rem]  md:text-[4rem]  lg:text-[4rem] xl:text-[4.5rem]  border border-[#50B498] font-bold   font-pt-serif sm:leading-[1em] transition-all duration-1000 ease-in-out ">
               Restaurant
              </p>

              <div className="flex items-center">


                <Image
                  src={'/cube.svg'}
                  alt="facebook logo"
                  width={176}
                  height={176}
                  // className="border border-[#50B498] absolute top-[2em] left-[16em] md:left-[22em] -translate-x-1/2 -translate-y-1/2 leading-tight tracking-tight"
                  className="border border-[#50B498] absolute top-[4.5em]  sm:top-[1.9em]  xl:top-[2.4em]   left-[14.5em]   sm:left-[13.5em] md:left-[16em]  lg:left-[16em] xl:left-[23em]  -translate-x-1/2 -translate-y-1/2  transition-all duration-1000 ease-in-out"
                />


              </div>



            </div>


            <p className="text-[1.5rem] font-roboto text-[#FFF] not-italic font-light leading-[2em] mt-[1.6875em]">Everyday 8:00 am - 23:00 pm</p>



            <div className="flex items-center border border-[#50B498] gap-[1.875em] mt-[2.5em]">

              <button className="font-roboto py-[0.75em] bg-[#6327EB] px-[1.2em] sm:px-[2.15625em] text-[#FFFFFF] rounded-[0.1875em] text-[1.125rem] not-italic font-normal leading-[1.5em] transform active:scale-95 transition-transform duration-200 ">Book a table</button>
              <button className="font-roboto py-[0.75em]  border-2 border-[#7a7b7c] text-[#FFFFFF] px-[1.3em] sm:px-[2.15625em] rounded-[0.1875em] text-[1.125rem] not-italic font-normal leading-[1.5em] transform active:scale-95 transition-transform duration-200">See menu</button>

            </div>


          </div>




          <div className="flex items-center justify-center mt-[1.12em] sm:mt-[0em]">

            <Image 
              src={'/rice.svg'} 
              alt="friend rice icon"
              width={555} 
              height={555}
              className="w-[26.22275em] sm:w-[34.6875em] border border-[#50B498]"

            />


          </div>






        </div>


          
    
              

      </div>
    </>
  );
}
