import profile from "./assets/profile.png";
import cv from "./assets/sidowwwscv.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
        {/* Background Glows */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/40 blur-[100px] sm:h-[700px] sm:w-[700px] md:h-[900px] md:w-[900px]"></div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/30 blur-[80px] sm:h-[350px] sm:w-[350px]"></div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 pt-8 pb-4 sm:px-8 sm:py-12 justify-start space-y-4 sm:space-y-8">
          
          {/* Header Title */}
          <div className="text-center">
            <h2
              data-aos="zoom-in"
              className="italic text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Hello i am Sidowwws
            </h2>
            <h1
              data-aos="fade-up"
              className="bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text font-serif text-5xl italic text-transparent sm:text-6xl md:text-8xl lg:text-9xl"
            >
              Fullstack dev
            </h1>
          </div>

          {/* Image & Badges Container */}
          <div className="relative flex w-full max-w-md items-end justify-center sm:max-w-lg md:max-w-2xl">
            
            {/* UI/UX Designer - Didekatkan 2% masuk ke dalam */}
            <span
              data-aos="fade-right"
              className="absolute left-[1%] top-[25%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:-left-[8%] sm:top-[32%] sm:px-4 sm:py-2 sm:text-sm md:-left-[16%] md:top-[36%]"
            >
              UI/UX Designer
            </span>

            {/* Problem Solving - Didekatkan 2% masuk ke dalam */}
            <span
              data-aos="fade-left"
              className="absolute right-[1%] top-[35%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:-right-[6%] sm:top-[44%] sm:px-4 sm:py-2 sm:text-sm md:-right-[14%] md:top-[46%]"
            >
              Problem Solving
            </span>

            {/* Development - Didekatkan 2% masuk ke dalam */}
            <span
              data-aos="fade-right"
              className="absolute left-[2%] top-[65%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:-left-[6%] sm:top-[64%] sm:px-4 sm:py-2 sm:text-sm md:-left-[13%]"
            >
              Development
            </span>

            {/* Team Work - Didekatkan 2% masuk ke dalam */}
            <span
              data-aos="fade-left"
              className="absolute right-[2%] top-[72%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:-right-[8%] sm:top-[68%] sm:px-4 sm:py-2 sm:text-sm md:-right-[16%]"
            >
              Team Work
            </span>

            {/* Profile Image Wrapper */}
            <div className="relative h-[68vh] w-full overflow-hidden sm:h-[60vh]">
              <img
                data-aos="zoom-in"
                src={profile}
                alt="Nahid - Product Designer"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="relative z-20 w-full flex justify-center px-2 sm:px-0">
            <div className="flex w-full max-w-md flex-row">
              <a
                href="https://wa.me/628989209979" target="_blank"
                className="flex flex-1 items-center justify-center bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-xs sm:text-base font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:opacity-90"
              >
                Contact me
              </a>

              <a
                href={cv}
                className="flex flex-1 items-center justify-center bg-white px-3 py-3 text-xs sm:text-base font-semibold text-black transition hover:bg-gray-200"
              >
                View CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}