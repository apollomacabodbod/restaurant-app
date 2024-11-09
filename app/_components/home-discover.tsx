import Image from "next/image";


export default function HomeDiscover(){


  return(
    
    <>

      <div className="flex flex-col mx-[1em] lg:mx-[8.4375em]  my-[5em] lg:my-[10em] border border-[#50B498] green transition-all duration-1000 ease-in-out">



        <div className="md:flex md:items-center md:justify-between   gap-[3.125em] sm:gap-[2.7em] md:gap-[3.125em] lg:gap-[7.125em] border border-[#50B498] green transition-all duration-1000 ease-in-out">


          <div className="relative ">

            <div className="flex items-center justify-center">
              <Image
                src={'/home-kitchen.svg'}
                alt="oval logo"
                width={570}
                height={570}
                className="min-w-[16em] sm:w-[35.625em]"
              />

            </div>
           
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

         


          <div className="flex flex-col border border-[#50B498] green">

            <p className="border border-[#50B498] green font-roboto text-[1.5rem] not-italic font-light  text-[#333] ">Discover</p>
            <p className="border border-[#50B498] green font-serif text-[#333] text-[3.5rem] not-italic font-bold whitespace-nowrap">Our History</p>

            <p className="border border-[#50B498] green font-roboto text-[1.25rem] not-italic font-light  md:w-[21.375em] transition-all duration-1000 ease-in-out">A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.</p>

            <button className="border border-[#50B498] green">Read more</button>

          </div>



        </div>


      </div>
      


        


    
    
    
    </>)

}