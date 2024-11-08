
import Image from "next/image"
import Link from "next/link"

export default function HomeHeader(){

  return (<>


    <div className="flex flex-col border border-[#50B498] mt-[1em] mx-[1em] lg:mx-[8.4375em] transition-all duration-1000 ease-in-out ">

      <div className="flex items-center justify-between transition-all duration-1000 ease-in-out">

        <Image src={'/logo.svg'} alt="logo" width={101} height={0} className="border border-[#50B498]  cursor-pointer transform active:scale-95 transition-transform duration-200"></Image>

        <div className="flex-col  sm:flex hidden  ">

          <div className="flex items-center  sm:gap-[0.4em] md:gap-[2em]  transition-all duration-1000 ease-in-out">


            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF]  border-b-2 focus:border-[#FFF] hover:border-[#FFF] border-transparent transition-all duration-1000 ease-in-out">About us </Link>
            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] border-b-2 focus:border-[#FFF] hover:border-[#FFF] border-transparent transition-all duration-1000 ease-in-out"> Menu</Link>
            <Link href={"#"} className="font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] border-b-2 focus:border-[#FFF] hover:border-[#FFF] border-transparent transition-all duration-1000 ease-in-out"> Events</Link>
            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] border-b-2 focus:border-[#FFF] hover:border-[#FFF] border-transparent transition-all duration-1000 ease-in-out"> News</Link>
            <Link href={"#"} className=" font-roboto text-[1.25rem] leading-[2em] font-light whitespace-nowrap not-italic text-[#FFF] border-b-2 focus:border-[#FFF] hover:border-[#FFF] border-transparent transition-all duration-1000 ease-in-out">Contacts </Link>

          </div>

        </div>



        <div className="flex-col sm:flex hidden">

          <div className="flex items-center sm:gap-[0.4em] transition-all duration-1000 ease-in-out">
    
            {/* Container for overlayed images */}
            <div className="relative cursor-pointer transform active:scale-95 transition-transform duration-200">
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


            <div className="relative cursor-pointer transform active:scale-95 transition-transform duration-200">
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


            <div className="relative  cursor-pointer transform active:scale-95 transition-transform duration-200">
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
        
        <div className="relative  sm:hidden transform active:scale-95 transition-transform duration-200 cursor-pointer">
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