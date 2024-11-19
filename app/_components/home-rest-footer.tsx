import Image from "next/image";




export default function HomeRestFooter(){


  return (<>


    <div className="flex flex-col  my-[4.5625em] lg:mt-[15em]">


      <p className=" text-[#fff] text-center font-pt-serif text-[2.5rem] not-italic font-bold ">REST</p>



      <div className="lg:flex lg:items-center lg:justify-center    lg:gap-[3em] mt-[1.6em] ">


        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center mt-[1.4em] lg:mt-[0em]">About us</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center  mt-[1.4em] lg:mt-[0em]">Menu</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center mt-[1.4em]  lg:mt-[0em]">Events</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center  mt-[1.4em] lg:mt-[0em]">News</p>
        <p className=" text-[#fff] font-roboto text-[1.25rem] not-italic font-light text-center  mt-[1.4em] lg:mt-[0em]">Contact</p>


      </div>



      <div className="flex items-center justify-center mt-[5.4375em] gap-[0.5em] ">


        {/* Container for overlayed images */}
        <div className="relative cursor-pointer transform active:scale-95 active:transition-transform active:duration-200 opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          <Image
            src={'/oval.svg'}
            alt="facebook logo"
            width={48}
            height={48}
            className=" min-w-[3em]"
          />
          <Image
            src={'/facebook.svg'}
            alt="facebook logo"
            width={15}
            height={16}
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>


        <div className="relative cursor-pointer transform active:scale-95 active:transition-transform active:duration-200 opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          <Image
            src={'/oval.svg'}
            alt="facebook logo"
            width={48}
            height={48}
            className=" min-w-[3em]"
          />
          <Image
            src={'/twitter.svg'}
            alt="facebook logo"
            width={20}
            height={16}
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>


        <div className="relative cursor-pointer transform active:scale-95 active:transition-transform active:duration-200 opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          <Image
            src={'/oval.svg'}
            alt="facebook logo"
            width={48}
            height={48}
            className=" min-w-[3em]"
          />
          <Image
            src={'/instagram.svg'}
            alt="facebook logo"
            width={20}
            height={16}
            className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          />
        </div>



      </div>



      <p className=" text-center text-[rgba(255,255,255,0.50)] mt-[1.5625em] font-roboto text-[1.25rem] not-italic font-light">2019 Restaurant. All Rights Reserved.</p>



    </div>
    
    
  </>)
}