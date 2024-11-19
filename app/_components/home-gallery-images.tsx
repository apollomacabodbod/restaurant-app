
"use client"


import { useState } from "react"
import { gallery } from "../_types/home-gallery-images-types"
import Image from "next/image"


export default function HomeGalleryImages(){


  const [images, SetImages] = useState<gallery[]>([

    {id: 1, image: '/home-gallery-image-1.svg'},
    {id: 2, image: '/home-gallery-image-2.svg'},
    {id: 3, image: '/home-gallery-image-3.svg'},
    {id: 4, image: '/home-gallery-image-4.svg'},
    {id: 5, image: '/home-gallery-image-5.svg'},
    {id: 6, image: '/home-gallery-image-6.svg'},
  ])



  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[2em] lg:mx-[8.4375em] gap-[1.875em] mt-[3.3125em] transition-all duration-1000 ease-in-out">

        {images.map((item) => (

          <div key={item.id} className="flex flex-col">

            <div className="flex items-center justify-center">

              <Image src={item.image} width={370} height={256} alt="gallery images icon" className="rounded-[0.1875em]"></Image>

            </div>


          </div>

        ))}


      </div>
    
    
    </>
  )
}

    
