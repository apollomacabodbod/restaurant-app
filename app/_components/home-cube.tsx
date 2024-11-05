import Image from "next/image";

export default function HomeCube() {
  return (
    <>
      <div className="flex flex-col border border-[#50B498]  mx-[1em] lg:mx-[4.4375em] mt-[9.625em]">
              

        <div className="relative">

          <p className="text-[3.5em]  md:text-[4.5rem] border border-[#50B498] font-bold  tracking-[0.05em]  md:tracking-[0.15em] font-serif    leading-[0.9em] transition-all duration-1000 ease-in-out">
                    Welcome 
            <br className="lg:hidden transition-all duration-1000 ease-in-out"/> 
                    to our 
          </p>

          <p className="text-[3.5em]  md:text-[4.5rem] border border-[#50B498] font-bold  tracking-[0.02em] font-serif  leading-[1.4em] md:leading-[1.4em] transition-all duration-1000 ease-in-out">
                    Restaurant
          </p>


          <Image
            src={'/cube.svg'}
            alt="facebook logo"
            width={176}
            height={176}
            // className="border border-[#50B498] absolute top-[2em] left-[16em] md:left-[22em] -translate-x-1/2 -translate-y-1/2 leading-tight tracking-tight"
            className="border border-[#50B498] absolute top-[3.5em] lg:top-[2em] left-[14.5em]  md:left-[19em] lg:left-[25em] -translate-x-1/2 -translate-y-1/2 leading-tight tracking-tight transition-all duration-1000 ease-in-out"
          />


            
        </div>
              

      </div>
    </>
  );
}
