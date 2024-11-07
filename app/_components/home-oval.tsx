import Image from "next/image";

export default function HomeOval(){

  return (
    
    <>

      <div className="flex flex-col mb-[3em]">

        <div className="flex items-center justify-center">

          <div className="relative cursor-pointer">
            <Image
              src={'/oval.svg'}
              alt="oval logo"
              width={48}
              height={48}
              className="border border-[#50B498] min-w-[3em]"
            />
            <Image
              src={'/path.svg'}
              alt="path logo"
              width={15}
              height={16}
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>


        </div>


     


      </div>



    
    
    </>)
}