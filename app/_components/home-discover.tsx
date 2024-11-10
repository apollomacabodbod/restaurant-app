import Image from "next/image";


export default function HomeDiscover(){


  return(
    
    <>

      <div className="flex flex-col mx-[2em] lg:mx-[8.4375em]  my-[5em] lg:my-[10em]   transition-all duration-1000 ease-in-out">



        <div className="lg:flex lg:items-center lg:justify-between   gap-[3.125em] sm:gap-[2.7em] md:gap-[3.125em] lg:gap-[7.125em]  transition-all duration-1000 ease-in-out">


          <div className="relative ">

            <div className="flex items-center justify-center  ">
              <Image
                src={'/home-kitchen.svg'}
                alt="oval logo"
                width={570}
                height={570}
                className="rounded-[0.5em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] "
              />

            </div>
           
          

            <div className="absolute top-[12em] lg:top-[14em] xl:top-[20em] left-[2.5em] sm:left-[2.9em] md:left-[10em] md:hidden lg:block  lg:left-[2em]   -translate-x-1/2 -translate-y-1/2    transition-all duration-1000 ease-in-out object-cover">
          
              <div className="relative ">


                <div className="flex flex-col bg-[#BBA285] w-[120px] h-[120px] rounded-[0.5em] "></div>


                <Image
                  src={'/kitchen-oval.svg'}
                  alt="oval logo"
                  width={85}
                  height={85}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Image
                  src={'/home-kitchen-folk.svg'}
                  alt="path logo"
                  width={33}
                  height={48}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />


              </div>
          
            </div>
          



            <Image

              src={'/home-combine-shape.svg'}
              alt="home-combine-shapes icon"
              width={176}
              height={176}
              className="absolute top-[8em] left-[12.7em] sm:left-[21em] md:left-[37em]  lg:left-[17em]  xl:left-[23em] -translate-x-1/2 -translate-y-1/2  transition-all duration-1000 ease-in-out object-cover"
            
            >
            </Image>


          </div>

         


          <div className="flex flex-col  mt-[3.9375em] lg:mt-[0em]">

            <p className=" font-roboto text-[1.5rem] not-italic font-light  text-[#333] ">Discover</p>
            <p className=" font-serif text-[#333]  text-[2.5em]  lg:text-[3.5rem] not-italic font-bold whitespace-nowrap">Our History</p>

            <p className=" font-roboto text-[1.25rem] not-italic font-light   transition-all duration-1000 ease-in-out  lg:w-[16em] xl:w-[24em] mt-[0.875em] ">A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.</p>


            <div className="flex items-center">

              <button className=" text-[#FFF] text-[1.125rem] font-roboto not-italic font-normal py-[0.75em] px-[2.59375em] bg-[#6327EB] rounded-[0.1875em] mt-[1.4375em] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Read more</button>

            </div>
           

          </div>



        </div>


      </div>
      


        


    
    
    
    </>)

}