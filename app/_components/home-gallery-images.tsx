
import { useState } from "react"
import { gallery } from "../_types/home-gallery-images-types"


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

      <div className="grid grid-cols-1 lg:grid-cols-3">



      </div>
    
    
    </>
  )
}

    
