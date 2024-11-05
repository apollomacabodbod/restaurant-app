
import Image from "next/image"

export default function HomeHeader(){

  return (<>


    <div className="flex flex-col border border-[#50B498] ">

      <div className="flex items-center justify-between  mx-[1em] md:mx-[2em] lg:mx-[4.4375em] lg:gap-[2em] transition-all duration-1000 ease-in-out">

        <Image src={'/logo.svg'} alt="logo" width={101} height={0} className="border border-[#50B498]   "></Image>

        <div className="flex flex-col border border-[#50B498] hidden md:flex  ">

          <div className="flex items-center md:gap-[2em] lg:gap-[4em] transition-all duration-1000 ease-in-out">

            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light whitespace-nowrap">About us</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light whitespace-nowrap">Menu</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light whitespace-nowrap" >Events</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light whitespace-nowrap">News</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light whitespace-nowrap">Contacts</div>

          </div>

        </div>



        <div className="flex flex-col hidden md:flex ">

          <div className="flex items-center gap-[0.5em] transition-all duration-1000 ease-in-out">
    
            {/* Container for overlayed images */}
            <div className="relative">
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


            <div className="relative">
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


            <div className="relative  ">
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
        
        <div className="relative md:hidden lg:hidden xl:hidden">
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