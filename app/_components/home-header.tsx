
import Image from "next/image"

export default function HomeHeader(){

  return (<>


    <div className="flex flex-col border border-[#50B498] ">

      <div className="flex items-center justify-between  md:gap-[2.28125em] lg:gap-[6.28125em] xl:gap-[14.5625em]">

        <Image src={'/logo.svg'} alt="logo" width={101} height={0} className="border border-[#50B498]   "></Image>

        <div className="flex flex-col border border-[#50B498] hidden md:flex  ">

          <div className="flex items-center md:gap-[2em] lg:gap-[4em]">

            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light">About us</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light">Menu</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light">Events</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light">News</div>
            <div className="border border-[#50B498] font-['Roboto'] text-[1.25rem] leading-[2em] font-light">Contacts</div>

          </div>

        </div>



        <div className="flex flex-col hidden md:flex ">

          <div className="flex items-center gap-[0.5em]">
    
            {/* Container for overlayed images */}
            <div className="relative">
              <Image
                src={'/oval.svg'}
                alt="facebook logo"
                width={48}
                height={48}
                className="border border-[#50B498]"
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
                className="border border-[#50B498]"
              />
              <Image
                src={'/twitter.svg'}
                alt="facebook logo"
                width={20}
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
                className="border border-[#50B498]"
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



      </div>





    </div>

    
    
  </>)
}