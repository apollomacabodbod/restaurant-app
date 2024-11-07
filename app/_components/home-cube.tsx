import Image from "next/image";

export default function HomeCube() {
  return (
    <>
      <div className="flex flex-col border border-[#50B498] mt-[2.6875em] mx-[1em] lg:mx-[8.4375em] sm:mt-[9.625em] transition-all duration-1000 ease-in-out">
              

        <div className="sm:flex sm:items-center sm:justify-between transition-all duration-1000 ease-in-out">


          <div className="flex flex-col  ">

            <div className="relative">

              <p className="text-[3.5em]  sm:text-[3.2rem]  md:text-[4rem]  lg:text-[4rem] xl:text-[4.5rem]  whitespace-nowrap border border-[#50B498] font-bold  font-pt-serif leading-[1.2em] tracking-[0.01em]  transition-all duration-1000 ease-in-out">
               Welcome 
                <br className="sm:hidden transition-all duration-1000 ease-in-out"/> 
                {`${" to our"}`}
              </p>

              <p className="text-[3.5em] sm:text-[3.2rem]  md:text-[4rem]  lg:text-[4rem] xl:text-[4.5rem]  border border-[#50B498] font-bold   font-pt-serif sm:leading-[1em] transition-all duration-1000 ease-in-out ">
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


            <p className="text-[1.5rem] font-roboto text-[#FFF] not-italic font-light">Everyday 8:00 am - 23:00 pm</p>

          </div>




          <div className="flex items-center justify-center">

            <Image 
              src={'/rice.svg'} 
              alt="friend rice icon"
              width={673} 
              height={673}
              className="w-[26.22275em] sm:w-[42.0625em] border border-[#50B498]"

            />


          </div>






        </div>


          
    
              

      </div>
    </>
  );
}
