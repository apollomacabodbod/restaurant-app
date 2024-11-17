"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HomeGalleryCarousel() {
  const [isSwiping, setIsSwiping] = useState(false);

  return (
    <div className="mx-auto max-w-full transition-all duration-1000 ease-in-out mb-[-18em]">
      <Carousel
        className="w-full overflow-hidden relative"
        onPointerDown={() => setIsSwiping(true)}
        onPointerUp={() => setIsSwiping(false)}
      >
        <CarouselContent className="flex snap-x snap-mandatory scroll-smooth">
          {/* Carousel Items */}
          {[...Array(4)].map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full z-50 snap-start transition-all duration-1000 ease-in-out transform-gpu"
            >
              <div className="flex flex-col mx-[2em] lg:mx-[8.4375em] bg-white  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-center">
                  <Image
                    src={"/home-gallery-rounded.svg"}
                    width={128}
                    height={128}
                    alt=""
                    className="rounded-full mt-[4.0625em]"
                  />
                </div>
                <p className="text-center mt-[2.5625em] text-[#333] font-roboto not-italic font-light mx-[3em] lg:mx-[5em] xl:mx-[11.5em]">
                  As I went on, still gaining velocity, the palpitation of night
                  and day merged into one continuous greyness...
                </p>
                <div className="flex items-center justify-center">
                  <Image
                    src={"/home-gallery-ratings.svg"}
                    width={152}
                    height={23}
                    alt=""
                    className="mt-[1.875em]"
                  />
                </div>
                <p className="text-center font-pt-serif text-[1.5rem] not-italic font-bold mt-[1.1875em]">
                  Magnus Kekhuis
                </p>
                <p className="text-center text-[rgba(51,51,51,0.50)] font-roboto text-[1.25rem] not-italic font-light mb-[4.4375em]">
                  Restaurant expert
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <CarouselPrevious
          className={`absolute left-[3em] lg:left-[12em] xl:left-[13em] top-1/2 transform -translate-y-1/2 bg-white text-gray-700 border border-gray-300 p-2 rounded-full hover:bg-white transition ${
            isSwiping ? "pointer-events-none" : ""
          }`}
        >
          &#8249;
        </CarouselPrevious>

        {/* Next Button */}
        <CarouselNext
          className={`absolute right-[3em] lg:right-[12em] xl:right-[13em] top-1/2 transform -translate-y-1/2 bg-white text-gray-700 border border-gray-300 p-2 rounded-full hover:bg-white transition ${
            isSwiping ? "pointer-events-none" : ""
          }`}
        >
          &#8250;
        </CarouselNext>
      </Carousel>
    </div>
  );
}