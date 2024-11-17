
"use client"


import Image from "next/image";



export default function HomeGalleryTestimontial(){


  return (<>

    <div className="flex flex-col border border-[#50B498] green  mx-[2em] lg:mx-[8.4375em] bg-white z-50">

      <div className="flex items-center justify-center">

        <Image src={'/home-gallery-rounded.svg'} width={128} height={128} alt="" className="rounded-full mt-[4.0625em]"></Image>
      </div>

      <p className="border border-[#50B498] green text-center mt-[2.5625em] text-[#333] font-roboto not-italic font-light   mx-[1.875em] lg:mx-[11.5em]">As I went on, still gaining velocity, the palpitation of night and day merged into one continuous greyness the sky took on a wonderful deepness of blue, a splendid luminous color like that of early twilight; the jerking sun became a streak of fire, a brilliant arch.</p>


      <div className="flex items-center justify-center">

        <Image src={'/home-gallery-ratings.svg'} width={152} height={23} alt="" className="mt-[1.875em]"></Image>

      </div>

      <p className="border border-[#50B498] green text-center font-pt-serif text-[1.5rem] not-italic font-bold mt-[1.1875em]">Magnus Kekhuis</p>
      <p className="border border-[#50B498] green text-center text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light mb-[4.4375em]">Restaurant expert</p>



    </div>
    
  </>)
}