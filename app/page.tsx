import Image from "next/image";
import HomeHeader from "./_components/home-header";
import HomeCube from "./_components/home-cube";
import HomeOval from "./_components/home-oval";
import HomeDiscover from "./_components/home-discover";
import HomeCheckout from "./_components/home-checkout";
import HomeLunch from "./_components/home-lunch";
import HomeLunchFoods from "./_components/home-lunch-foods";
import HomeFullmenuButton from "./_components/home-fullmenu-button";
import HomeUpcomingEvents from "./_components/home-upcoming-events";
import HomeCoffeNight from "./_components/home-coffee-night";
import { CarouselDApiDemo } from "./_components/home-carousel-events";
import HomeGalleryInterior from "./_components/home-gallery-interior";
import HomeGalleryImages from "./_components/home-gallery-images";
import HomeGalleryPeople from "./_components/home-gallery-people";
import HomeGalleryTestimontial from "./_components/home-gallery-testimontial";
import { HomeGalleryCarousel } from "./_components/home-gallery-carousel";
import HomePressAboutUs from "./_components/home-press-aboutUs";
import HomePressCards from "./_components/home-press-cards";
import HomeOurChef from "./_components/home-our-chef";
import HomeReserveTable from "./_components/home-reserve-table";
import HomeRestFooter from "./_components/home-rest-footer";

export default function Home() {
  return (

    <>
      <div className="relative flex flex-col min-h-screen bg-center bg-cover bg-no-repeat bg-fixed  bg-[url('/hero-background.svg')]" >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div className="relative flex-grow">
          <HomeHeader />
          <HomeCube />
        </div>

        {/* Footer with HomeOval */}
        <footer className="relative ">
          <HomeOval />
        </footer>

      </div>


      <div className="flex flex-col min-h-screen bg-white">

        <HomeDiscover />

      </div>

      <div className="flex flex-col min-h-screen bg-white">

        <HomeCheckout/>
      </div>


      <div className="flex flex-col min-h-screen bg-white">

        <HomeLunch/>
        <HomeLunchFoods/>
        <HomeFullmenuButton/>



      </div>

      <div className="flex flex-col min-h-screen bg-[#333333]">

        <HomeUpcomingEvents/>
        {/* <HomeCoffeNight/>  */}
        {/*  */}
        <CarouselDApiDemo/>
        

      </div>


      <div className="flex flex-col min-h-screen bg-white">

        <HomeGalleryInterior/>
        <HomeGalleryImages/>
        <HomeGalleryPeople/>

        {/* <HomeGalleryTestimontial/> */}
        <HomeGalleryCarousel/>

      </div>

      <div className="flex flex-col min-h-screen bg-[#333]">


        <HomePressAboutUs/>
        <HomePressCards/>

     

      </div>


      <div className="flex flex-col min-h-screen bg-white">

        <HomeOurChef/>
        <HomeReserveTable/>

      </div>



      <div className="flex flex-col min-h-[28.75em] bg-[#333] ">

        <HomeRestFooter/>



      </div>

    
    </>
   

    
  );
}
