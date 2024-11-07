
import Image from "next/image"

export default function HomeHeader(){

  return (<>


    <div className="flex flex-col border border-[#50B498] mt-[1em] mx-[1em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out ">

      <div className="flex items-center justify-between transition-all duration-1000 ease-in-out">

        <Image src={'/logo.svg'} alt="logo" width={101} height={0} className="border border-[#50B498]  cursor-pointer "></Image>

        <div className="flex-col border border-[#50B498] sm:flex hidden  ">

          <div className="flex items-center  sm:gap-[0.4em] md:gap-[2em]  transition-all duration-1000 ease-in-out">

            <div className="border border-[#50B498] font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]">About us</div>
            <div className="border border-[#50B498] font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]">Menu</div>
            <div className="border border-[#50B498] font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]" >Events</div>
            <div className="border border-[#50B498] font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]">News</div>
            <div className="border border-[#50B498] font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]">Contacts</div>

          </div>

        </div>



        <div className="flex-col sm:flex hidden">

          <div className="flex items-center sm:gap-[0.4em] transition-all duration-1000 ease-in-out">
    
            {/* Container for overlayed images */}
            <div className="relative cursor-pointer">
              <Image
                src={'/oval.svg'}
                alt="facebook logo"
                width={48}
                height={48}
                className="border border-[#50B498] min-w-[3em]"
              />
              <Image
                src={'/facebook.svg'}
                alt="facebook logo"
                width={15}
                height={16}
                className="border border-[#50B498] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>


            <div className="relative cursor-pointer">
              <Image
                src={'/oval.svg'}
                alt="facebook logo"
                width={48}
                height={48}
                className="border border-[#50B498] min-w-[3em]"
              />
              <Image
                src={'/twitter.svg'}
                alt="facebook logo"
                width={20}
                height={16}
                className="border border-[#50B498] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>


            <div className="relative  cursor-pointer">
              <Image
                src={'/oval.svg'}
                alt="facebook logo"
                width={48}
                height={48}
                className="border border-[#50B498] min-w-[3em]"
              />
              <Image
                src={'/instagram.svg'}
                alt="facebook logo"
                width={20}
                height={16}
                className="border border-[#50B498] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>



          </div>

        </div>


        {/* Humberger */}
        
        <div className="relative  sm:hidden ">
          <Image
            src={'/oval.svg'}
            alt="facebook logo"
            width={48}
            height={48}
            className="border border-[#50B498] min-w-[3em]"
          />
          <Image
            src={'/humberger.svg'}
            alt="facebook logo"
            width={20}
            height={16}
            className="border border-[#50B498] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>


      </div>





    </div>

    
    
  </>)
}