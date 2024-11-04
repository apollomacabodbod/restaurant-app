import Image from "next/image";
import HomeHeader from "./_components/home-header";
import HomeCube from "./_components/home-cube";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-center bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/hero-background.svg')" }}>
      {/* Color Overlay */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="z-10  ">
        <HomeHeader/>
        <HomeCube/>
      </div>



    </div>
  );
}
