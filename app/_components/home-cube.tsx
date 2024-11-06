import Image from "next/image";

export default function HomeCube() {
  return (
    <>
      <div className="flex flex-col border border-[#50B498] mt-[2.6875em] mx-[1em] lg:mx-[8.4375em] sm:mt-[9.625em] transition-all duration-1000 ease-in-out">
              

        <div className="sm:flex sm:items-center transition-all duration-1000 ease-in-out">


          <div className="flex flex-col  ">

            <div className="relative">

              <p className="text-[3.5em]  sm:text-[4.5rem] border border-[#50B498] font-bold  tracking-[0.05em]  sm:tracking-[0.12em] font-serif    leading-[0.9em] transition-all duration-1000 ease-in-out">
Welcome 
                <br className="lg:hidden transition-all duration-1000 ease-in-out"/> 
                {`${" to our"}`}
              </p>

              <p className="text-[3.5em]  sm:text-[4.5rem] border border-[#50B498] font-bold  tracking-[0.02em] font-serif  leading-[1.4em] sm:leading-[1.4em] transition-all duration-1000 ease-in-out">
Restaurant
              </p>

              <div className="flex items-center">


                <Image
                  src={'/cube.svg'}
                  alt="facebook logo"
                  width={176}
                  height={176}
                  // className="border border-[#50B498] absolute top-[2em] left-[16em] md:left-[22em] -translate-x-1/2 -translate-y-1/2 leading-tight tracking-tight"
                  className="border border-[#50B498] absolute top-[3.5em] lg:top-[2em] left-[14.5em]  md:left-[18em] lg:left-[25em] -translate-x-1/2 -translate-y-1/2  transition-all duration-1000 ease-in-out"
                />


              </div>



            </div>

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
