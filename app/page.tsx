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
        <HomeCoffeNight/>

      </div>
    
    </>
   

    
  );
}
