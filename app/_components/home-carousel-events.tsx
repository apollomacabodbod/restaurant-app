

"use client"


import { motion } from "framer-motion";


import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    // Initialize the count when the api is available
    setCount(api.scrollSnapList().length)

    // Update the current selected item whenever the carousel changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap()) // Use 0-based index for selectedScrollSnap
    })

    // Set an interval to change the slide every 3 seconds
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % count // calculate the next index, and ensure it wraps around
      api.scrollTo(nextIndex) // Scroll to the next slide
      setCurrent(nextIndex) // Update the current state
    }, 6000)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [api, current, count])

  return (
    <div className="mx-auto max-w-full  transition-all duration-1000 ease-in-out mb-[2em] "
    
    
    >
      <Carousel setApi={setApi} className="w-full overflow-hidden ">
        <CarouselContent className="flex snap-x snap-mandatory  scroll-smooth ">
          {/* First Card */}
          <CarouselItem className="flex-shrink-0 w-full snap-start transition-all duration-1000 ease-in-out transform-gpu">
            <div className="flex flex-col mx-[2em] lg:mx-[4.4375em] xl:mx-[8.4375em]  my-[2.4375em] transition-all duration-1000 ease-in-out transform rounded-[0.1875em]"
            
            
            >
              <motion.div className="lg:flex lg:items-center lg:justify-center bg-[#333] lg:bg-white lg:gap-[3em] xl:gap-[4.125em] transition-all duration-1000 ease-in-out"
              
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}

              >
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    <Image src={"/home-events.svg"} width={570} height={570} alt="" className="lg:min-w-[28.625em]"></Image>
                  </div>
                </div>
                <div className="flex flex-col  bg-[#333] lg:bg-white lg:px-[1.875em]  py-[3em] lg:py-[1em] ">
                  <p className="text-[#FFF] lg:text-[#333]  font-roboto text-[1.25rem] not-italic font-light   ">Upcoming</p>
                  <p className="text-[#FFF] lg:text-[#333]  font-pt-serif text-[2rem] lg:text-[2.5rem] not-italic font-bold ">Coffee Night</p>
                  <p className=" font-roboto  text-[#FFF] lg:text-[#333] text-[0.875rem] not-italic font-normal">25 september, 2019</p>
                  <p className=" font-roboto text-[#FFF] lg:text-[#333] text-[1.25rem] not-italic font-light mt-[1.125em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                  <div className="flex items-center mt-[2.4375em]">
                    <button className="py-[0.75em] px-[2.15625em] bg-[#6327EB] text-[#FFF] font-roboto text-[1.125rem] font-normal not-italic cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out rounded-[0.1875em]">Book a table</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </CarouselItem>

          {/* Second Card */}
          <CarouselItem className="flex-shrink-0 w-full snap-start transition-all duration-1000 ease-in-out transform-gpu">
            <div className="flex flex-col mx-[2em] lg:mx-[4.4375em] xl:mx-[8.4375em]  my-[2.4375em] transition-all duration-1000 ease-in-out transform rounded-[0.1875em]"
            
               
            
            >
              <motion.div className="lg:flex lg:items-center lg:justify-center bg-[#333] lg:bg-white lg:gap-[3em] xl:gap-[4.125em] transition-all duration-1000 ease-in-out"
              
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              
              >
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    <Image src={"/home-events.svg"} width={570} height={570} alt="" className="lg:min-w-[28.625em]"></Image>
                  </div>
                </div>
                <div className="flex flex-col  bg-[#333] lg:bg-white lg:px-[1.875em]  py-[3em] lg:py-[1em] ">
                  <p className="text-[#FFF] lg:text-[#333]  font-roboto text-[1.25rem] not-italic font-light   ">Upcoming</p>
                  <p className="text-[#FFF] lg:text-[#333]  font-pt-serif text-[2rem] lg:text-[2.5rem] not-italic font-bold ">Coffee Night</p>
                  <p className=" font-roboto  text-[#FFF] lg:text-[#333] text-[0.875rem] not-italic font-normal">25 september, 2019</p>
                  <p className=" font-roboto text-[#FFF] lg:text-[#333] text-[1.25rem] not-italic font-light mt-[1.125em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                  <div className="flex items-center mt-[2.4375em]">
                    <button className="py-[0.75em] px-[2.15625em] bg-[#6327EB] text-[#FFF] font-roboto text-[1.125rem] font-normal not-italic cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out rounded-[0.1875em]">Book a table</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </CarouselItem>



          <CarouselItem className="flex-shrink-0 w-full snap-start transition-all duration-1000 ease-in-out transform-gpu">
            <div className="flex flex-col mx-[2em] lg:mx-[4.4375em] xl:mx-[8.4375em]  my-[2.4375em] transition-all duration-1000 ease-in-out transform rounded-[0.1875em]"
            
         
            
            >
              <motion.div className="lg:flex lg:items-center lg:justify-center bg-[#333] lg:bg-white lg:gap-[3em] xl:gap-[4.125em] transition-all duration-1000 ease-in-out"
              
              
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
         
              >
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    <Image src={"/home-events.svg"} width={570} height={570} alt="" className="lg:min-w-[28.625em]"></Image>
                  </div>
                </div>
                <div className="flex flex-col  bg-[#333] lg:bg-white lg:px-[1.875em]  py-[3em] lg:py-[1em] ">
                  <p className="text-[#FFF] lg:text-[#333]  font-roboto text-[1.25rem] not-italic font-light   ">Upcoming</p>
                  <p className="text-[#FFF] lg:text-[#333]  font-pt-serif text-[2rem] lg:text-[2.5rem] not-italic font-bold ">Coffee Night</p>
                  <p className=" font-roboto  text-[#FFF] lg:text-[#333] text-[0.875rem] not-italic font-normal">25 september, 2019</p>
                  <p className=" font-roboto text-[#FFF] lg:text-[#333] text-[1.25rem] not-italic font-light mt-[1.125em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                  <div className="flex items-center mt-[2.4375em]">
                    <button className="py-[0.75em] px-[2.15625em] bg-[#6327EB] text-[#FFF] font-roboto text-[1.125rem] font-normal not-italic cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out rounded-[0.1875em]">Book a table</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </CarouselItem>





          <CarouselItem className="flex-shrink-0 w-full snap-start transition-all duration-1000 ease-in-out transform-gpu">
            <div className="flex flex-col mx-[2em] lg:mx-[4.4375em] xl:mx-[8.4375em]  my-[2.4375em] transition-all duration-1000 ease-in-out transform rounded-[0.1875em]"
            
            
            >
              <motion.div className="lg:flex lg:items-center lg:justify-center bg-[#333] lg:bg-white lg:gap-[3em] xl:gap-[4.125em] transition-all duration-1000 ease-in-out"
              
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
         
              
              
              >
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    <Image src={"/home-events.svg"} width={570} height={570} alt="" className="lg:min-w-[28.625em]"></Image>
                  </div>
                </div>
                <div className="flex flex-col  bg-[#333] lg:bg-white lg:px-[1.875em]  py-[3em] lg:py-[1em] ">
                  <p className="text-[#FFF] lg:text-[#333]  font-roboto text-[1.25rem] not-italic font-light   ">Upcoming</p>
                  <p className="text-[#FFF] lg:text-[#333]  font-pt-serif text-[2rem] lg:text-[2.5rem] not-italic font-bold ">Coffee Night</p>
                  <p className=" font-roboto  text-[#FFF] lg:text-[#333] text-[0.875rem] not-italic font-normal">25 september, 2019</p>
                  <p className=" font-roboto text-[#FFF] lg:text-[#333] text-[1.25rem] not-italic font-light mt-[1.125em]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                  <div className="flex items-center mt-[2.4375em]">
                    <button className="py-[0.75em] px-[2.15625em] bg-[#6327EB] text-[#FFF] font-roboto text-[1.125rem] font-normal not-italic cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out rounded-[0.1875em]">Book a table</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </CarouselItem>



          {/* Add more cards as needed */}
        </CarouselContent>

      </Carousel>

      {/* Indicator Circles */}
      <div className="flex justify-center mt-[-1em] lg:mt-[-1em]">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full ${index === current ? 'bg-[#686868]' : 'bg-[#a0a0a0]'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
