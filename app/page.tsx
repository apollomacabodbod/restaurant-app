import Image from "next/image";
import HomeHeader from "./_components/home-header";
import HomeCube from "./_components/home-cube";
import HomeOval from "./_components/home-oval";

export default function Home() {
  return (

    <>
      <div className="relative flex flex-col min-h-screen bg-center bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/hero-background.svg')" }}>
        {/* Color Overlay */}
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



      
      </div>
    
    </>
   

    
  );
}
