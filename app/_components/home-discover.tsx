import Image from "next/image";


export default function HomeDiscover(){


  return(
    
    <>

      <div className="flex flex-col my-[5em] lg:my-[10em] border border-[#50B498] green transition-all duration-1000 ease-in-out">



        <div className="sm:flex sm:items-center sm:justify-between">

          <div className="relative flex flex-col ">
            <Image
              src={'/home-kitchen.svg'}
              alt="oval logo"
              width={570}
              height={560}
              className=" min-w-[3em]"
            />
            <Image
              src={'/path.svg'}
              alt="path logo"
              width={15}
              height={16}
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>


          <div className="flex flex-col">

            <p>Discover</p>

          </div>




        </div>
      



        


      </div>
    
    
    
    </>)

}