import Image from "next/image";


export default function HomeDiscover(){


  return(
    
    <>

      <div className="flex flex-col mx-[2.75em] lg:mx-[8.4375em]  my-[5em] lg:my-[10em] border border-[#50B498] green transition-all duration-1000 ease-in-out">



        <div className="sm:flex sm:items-center gap-[8.125em] border border-[#50B498] green">


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
              className="absolute top-[12em] left-[2em] sm:top-[25em] md:top-[29em]  sm:left-[2em] -translate-x-1/2 -translate-y-1/2   border border-[#50B498] green transition-all duration-1000 ease-in-out"
            />

            <Image

              src={'/home-combine-shape.svg'}
              alt="home-combine-shapes icon"
              width={176}
              height={176}
              className="absolute top-[8em] left-[13em]  sm:top-[10em] sm:left-[30.83em] md:left-[32.83em] -translate-x-1/2 -translate-y-1/2 border border-[#50B498] green transition-all duration-1000 ease-in-out"
            
            >
            </Image>


          </div>

         


          <div className="flex flex-col">

            <p className="font-roboto text-[1.5em] not-italic font-light leading-[2em] text-[#333]">Discover</p>
            <p>Our History</p>

            <p className="w-[29.375em]">A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.</p>

            <button>Read more</button>

          </div>



        </div>


      </div>
      


        


    
    
    
    </>)

}