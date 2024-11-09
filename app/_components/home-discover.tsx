import Image from "next/image";


export default function HomeDiscover(){


  return(
    
    <>

      <div className="flex flex-col mx-[2.75em] lg:mx-[8.4375em]  my-[5em] lg:my-[10em] border border-[#50B498] green transition-all duration-1000 ease-in-out">



        <div className="sm:flex sm:items-center sm:justify-between">

          <div className="relative ">
            <Image
              src={'/home-kitchen.svg'}
              alt="oval logo"
              width={570}
              height={560}
              className=""
            />
            <Image
              src={'/home-kitchen-mask.svg'}
              alt="path logo"
              width={170}
              height={170}
              className="absolute top-[12em] sm:top-[25em] md:top-[29em] left-[2em] sm:left-[2em] -translate-x-1/2 -translate-y-1/2   border border-[#50B498] green transition-all duration-1000 ease-in-out"
            />
          </div>


          <div className="flex flex-col">

            <p>Discover</p>

          </div>




        </div>
      



        


      </div>
    
    
    
    </>)

}