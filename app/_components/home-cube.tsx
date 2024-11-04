import Image from "next/image";

export default function HomeCube() {
  return (
    <>
      <div className="flex flex-col border border-[#50B498]  mx-[1em] lg:mx-[4.4375em] mt-[9.625em]">
              

        <div className="relative">

          <p className="text-[4.5rem] border border-[#50B498] font-bold  tracking-[0.06em] font-serif  leading-[1em]">
                    Welcome 
            <br className="lg:hidden"/> 
                    to our 
          </p>

          <p className="text-[4.5rem] border border-[#50B498] font-bold  tracking-[0.02em] font-serif  leading-[1em]">
                    Restaurant
          </p>


          <Image
            src={'/cube.svg'}
            alt="facebook logo"
            width={141}
            height={176}
            className="border border-[#50B498] absolute top-[2em] left-[22em] -translate-x-1/2 -translate-y-1/2 leading-tight tracking-tight"
          />


            
        </div>
              

      </div>
    </>
  );
}
