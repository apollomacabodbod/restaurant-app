import Image from "next/image";



export default function HomePressCards(){


  return (<>


    <div className="grid grid-cols-1 xl:grid-cols-3  border border-[#50B498] green mx-[2em] lg:mx-[8.1em] gap-[1.875em] my-[4.3125em] ">

      <div className="flex flex-col border border-[#50B498] green  py-[3.0625em] px-[1em] bg-white">

        <div className="flex items-center justify-center border border-[#50B498] green">

          <Image src={'/home-press-card-1.svg'} width={281} height={40} alt="home press card 1"></Image>
        </div>

        <p className="border border-[#50B498] green text-center text-[#333] font-roboto text-[1.25rem] not-italic font-light xl:max-w-[17.125em] mt-[1.9em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
        <p className="border border-[#50B498] green text-center text-[#333] font-pt-serif text-[1.5rem] not-italic font-bold mt-[1.875em]">The New York Times</p>

      </div>



      <div className="flex flex-col border border-[#50B498] green  py-[3.0625em] px-[1em] bg-white ">

        <div className="flex items-center justify-center border border-[#50B498] green">

          <Image src={'/home-press-card-2.svg'} width={250} height={40} alt="home press card 1"></Image>
        </div>

        <p className="border border-[#50B498] green text-center text-[#333] font-roboto text-[1.25rem] not-italic font-light xl:max-w-[17.125em] mt-[1.5em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
        <p className="border border-[#50B498] green text-center text-[#333] font-pt-serif text-[1.5rem] not-italic font-bold mt-[1.875em]">The Guardian</p>

      </div>



      <div className="flex flex-col border border-[#50B498] green pt-[3.0625em] px-[1em] bg-white">

        <div className="flex items-center justify-center border border-[#50B498] green">

          <Image src={'/home-press-card-3.svg'} width={264} height={40} alt="home press card 1"></Image>
        </div>

        <p className="border border-[#50B498] green text-center text-[#333] font-roboto text-[1.25rem] not-italic font-light xl:max-w-[17.125em] mt-[2.5625em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level.</p>
        <p className="border border-[#50B498] green text-center text-[#333] font-pt-serif text-[1.5rem] not-italic font-bold mt-[1.875em]">The Wall Street Journal</p>

      </div>





    </div>
    
    
  </>)
}