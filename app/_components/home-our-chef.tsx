import Image from "next/image";




export default function HomeOurChef(){



  return (<>


    <div className="flex flex-col border border-[#50B498] green mt-[10em] mx-[2em] lg:mx-[8.4375em]">


      <div className="lg:flex lg:items-center lg:justify-between lg:gap-[8.125em] lg:border border-[#50B498] green">




        <div className="flex flex-col border border-[#50B498] green">

          <div className="flex items-center justify-center lg:justify-start border border-[#50B498] green">

            <Image src={'/home-our-chef.svg'} width={570} height={560} alt="our chef icon"></Image>

          </div>


        </div>


        <div className="flex flex-col border border-[#50B498] green mt-[4.9375em] lg:mt-[0em]">

          <p className="border border-[#50B498] green text-[#333] font-roboto text-[1.5rem] not-italic font-light">The word from</p>
          <p className="border border-[#50B498] green text-[#333] font-pt-serif text-[3.5rem] not-italic font-bold ">Our Chef</p>

          <p className="border border-[#50B498] green lg:max-w-[29.375em] text-[#333] font-roboto text-[1.25rem] not-italic font-light ">A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.</p>
                
          <p className="border border-[#50B498] green text-[#333] font-pt-serif text-[1.5rem] font-bold mt-[2.875em]"> Slavcho Karbashewski</p>

          <p className="border border-[#50B498] green text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light" >Head Chef</p>
                
        </div>



      </div>



    </div>
    
    
  </>)
}