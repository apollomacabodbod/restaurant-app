import Image from "next/image";




export default function HomeOurChef(){



  return (<>


    <div className="flex flex-col border border-[#50B498] green my-[9em] mx-[2em] lg:mx-[5em]  xl:mx-[8.4375em]">


      <div className="lg:flex lg:items-center lg:justify-between lg:gap-[2em] xl:gap-[8.125em] lg:border border-[#50B498] green">




        <div className="flex flex-col border border-[#50B498] green">


          <div className="flex items-center justify-center">


            <div className=" bg-center bg-cover bg-no-repeat   bg-[url('/home-our-chef.svg')] w-[30.625em] h-[30.625em] ">


              <div className="relative flex flex-col bg-[#BBA285] w-[120px] h-[120px] rounded-[0.5em] mt-[20.8125em] sm:ml-[-3em] ml-[-1.5em]">

                <Image
                  src={'/kitchen-oval.svg'}
                  alt="oval logo"
                  width={85}
                  height={85}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Image
                  src={'/home-our-chef-1.svg'}
                  alt="path logo"
                  width={33}
                  height={48}
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

              </div>


            </div>


          </div>


         

       

        </div>


        <div className="flex flex-col border border-[#50B498] green mt-[4.9375em] lg:mt-[0em]">

          <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.5rem] not-italic font-light">The word from</p>
          <p className="border border-[#50B498] green text-[#333] font-pt-serif text-[3.5rem] not-italic font-bold ">Our Chef</p>

          <p className="border border-[#50B498] green lg:max-w-[29.375em] text-[#333] font-roboto text-[1.25rem] not-italic font-light ">A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.</p>
                
          <p className="border border-[#50B498] green text-[#333] font-pt-serif text-[1.5rem] font-bold mt-[2em]"> Slavcho Karbashewski</p>

          <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light" >Head Chef</p>
                
        </div>



      </div>



    </div>
    
    
  </>)
}